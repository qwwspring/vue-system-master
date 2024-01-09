<template>
    <el-card>
        <!-- <el-alert title="双击修改表格数据" type="warning" center show-icon /> -->
        <h3 style="text-align: center;">设置最低存储值和阈值</h3>
        <el-table :data="tableData" style="width: 80%; margin:50px auto;" @cell-dblclick="handleEdit1">
            <el-table-column prop="equipCode" label="设备编号" ></el-table-column>
            <el-table-column prop="equipName" label="设备名称" >
                
            </el-table-column>
            <el-table-column prop="min" label="存储最低值">
                <template #default="scope">
                    <el-input :disabled="!(scope.$index === isEdit)" v-model="scope.row.min"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="max" label="预警值">
                <template #default="scope">
                    <el-input :disabled="!(scope.$index === isEdit)" v-model="scope.row.max"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button @click="handleEdit(scope.$index, scope.row)" link type="primary">修改</el-button>
                    <el-button @click="saveEdit(scope.$index, scope.row)" link type="primary">保存</el-button>
                </template>

            </el-table-column>
        </el-table>
    </el-card>
  
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { save,getList } from '../api/index'
let isEdit = ref(-1);
onMounted(()=>{
    getYuzhiList()
})
const tableData = ref([
    {name : '伸缩裂缝传感器(14号桩)',min:34,max:180},
    {name : '伸缩裂缝传感器(14号桩)',min:34,max:180}
])
const getYuzhiList = ()=>{
    getList().then(res=>{
        console.log(res.data)
        tableData.value = res.data.data
    })
}
const handleEdit = (index, row) => {

    console.log(index, row)
    // 修改输入框禁用状态
    isEdit.value =index;
}
const saveEdit = (index, row) => {
    // 修改输入框禁用状态
    isEdit.value =-1;
    console.log(row)
    // 保存修改的数据
    save(row).then(res => {
        
    })
    
}
</script>

<style scoped>
.el-input{
    border: 0 !important;
}

</style>
