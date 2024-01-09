<template>
	<el-descriptions title="" :column="2" border>
	  <el-descriptions-item>
		<template #label>日期</template>
		{{ data.date }}
	  </el-descriptions-item>
	  <el-descriptions-item>
		<template #label>设备名称</template>
		{{ data.name }}
	  </el-descriptions-item>
	  <el-descriptions-item>
		<template #label>值</template>
		{{ data.value }}
	  </el-descriptions-item>
	</el-descriptions>
	<EZUIKitJs :rowData="data" />

  </template>
  
  <script lang="ts">


  export default {
	props: {
	  data: Object // 假设你传递的是一个对象
	}
  };
  </script>
  
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>