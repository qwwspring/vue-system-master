<template>
	<el-card>
	  <el-tabs v-model="activeTab" class="tabs-container">
		<el-tab-pane :label="tabs[0].title">
		  <div>
			<h2>
			  <el-date-picker
				v-model="tabs[0].startTime"
				type="datetime"
				placeholder="开始时间"
				:picker-options="pickerOptions"
			  ></el-date-picker>
			  <el-date-picker
				v-model="tabs[0].endTime"
				type="datetime"
				placeholder="结束时间"
				:picker-options="pickerOptions"
			  ></el-date-picker>
			  <el-button @click="queryData()">查询</el-button>
			</h2>
		  </div>
		  <div class="tab-content">
			<h2>
			  <el-button @click="showif(1)">图表</el-button>
			  <el-button @click="showif(0)">表格</el-button>
			</h2>
			<!-- Data List Page -->
			<div v-if="viewflag === 1" style="width: 800px; height: 600px;">
			  <div style="width: 100%; height: 100%;" ref="tubiao"></div>
			</div>
  
			<el-table v-show="viewflag === 0" :data="tabs[0].dataList" border style="width:100%">
			  <el-table-column prop="date" label="日期"></el-table-column>
			  <el-table-column prop="name" label="设备名称"></el-table-column>
			  <el-table-column prop="value" label="值"></el-table-column>
			  <el-table-column label="操作">
				<template v-slot="scope">
					<el-button type="warning" size="small" :icon="View" @click="handleView(scope.row)">
							查看视频
						</el-button>
					</template>
				
				</el-table-column>
			</el-table>
		  </div>
		  <el-dialog title="查看视频" v-model="visible1" width="700px" destroy-on-close>
			<TableDetail :data="rowData" />
		</el-dialog>
		</el-tab-pane>
	  </el-tabs>
	</el-card>
  </template>
  
  <script setup>
  import moment from 'moment';
  import { ref, onMounted, onBeforeMount } from 'vue';
  import { fetchData } from '../api/index';
  import * as echarts from 'echarts';
  import TableDetail from '../components/table-detail.vue';

  const tabs = ref([
	{ title: '伸缩裂缝计（14号桩）', dataList: null, startTime: null, endTime: null },
  ]);
  
  let viewflag = ref(1); // 默认显示图表
  
  const showif = (status) => {
	viewflag.value = status;
	 // 如果切换到图表页面，则更新图表
	 if (status === 1) {
    setTimeout(initChart, 0);
  }
  };
  
  onBeforeMount(() => {
	console.log('onBeforeMount');
	getData();
  });
  
  onMounted(() => {
	console.log('onMounted');
	setTimeout(initChart, 2000);
  });
  
  const getData = async () => {
	try {
	  let res = await fetchData();
	  if (res.data.length > 0) {
		res.data.forEach((item) => {
		  item.date = moment(item.date).format('YYYY-MM-DD HH:mm:ss');
		});
		tabs.value[0].dataList = res.data;
	  }
	} catch (error) {
	  console.error('获取数据时发生错误：', error);
	}
  };
  
  const tubiao = ref(null);
  
  const initChart = () => {
	const tubiaoElement = tubiao.value;
	if (!tubiaoElement) {
	  console.error('无效的图表容器 DOM 元素');
	  return;
	}
  
	const myChart = echarts.init(tubiaoElement);
	myChart.setOption({
	  title: {
		text: '',
	  },
	  tooltip: {},
	  xAxis: {
		data: tabs.value[0].dataList.map((item) => item.date),
	  },
	  yAxis: {},
	  series: [
		{
		  data: tabs.value[0].dataList.map((item) => item.value),
		  type: 'line',
		},
	  ],
	});
  };

  const visible1 = ref(false);
  const rowData = ref(null);

  const handleView = (row) => {

	const dateValue = row.date;
  console.log('当前行的 date 值：', dateValue);
  rowData.value = row;

	visible1.value = true;
};
  </script>
  
  <style scoped>
  .el-table {
	margin: 20px auto;
  }
  </style>
  