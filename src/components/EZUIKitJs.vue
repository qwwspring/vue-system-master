<script lang="ts" setup>
import EZUIKit from 'ezuikit-js'
import { onMounted } from 'vue'
import moment from 'moment';
const props = defineProps({
  rowData:{
    type:Object
  }
})

interface IPlayer {
  play: Function
  stop: Function
  getOSDTime: Function
  capturePicture: Function
  openSound: Function
  closeSound: Function
  startSave: Function
  stopSave: Function
  startTalk: Function
  stopTalk: Function
  fullScreen: Function
  destroy: Function
}

let player:IPlayer

const play = () => {
  const playPromise = player.play()
  playPromise.then((data: any) => {
    console.log('promise 获取 数据', data)
  })
}

const stop = () => {
  const stopPromise = player.stop()
  stopPromise.then((data: any) => {
    console.log('promise 获取 数据', data)
 })
}

const getOSDTime = () => {
  const getOSDTimePromise = player.getOSDTime()
  getOSDTimePromise.then((data: any) => {
    console.log('promise 获取 数据', data)
  })
}

const capturePicture = () => {
  const capturePicturePromise = player.capturePicture(`${new Date().getTime()}`)
  capturePicturePromise.then((data: any) => {
    console.log('promise 获取 数据', data)
  })
}

const openSound = () => {
  const openSoundPromise = player.openSound()
  openSoundPromise.then((data: any) => {
    console.log('promise 获取 数据', data)
  })
}

const closeSound = () => {
  const openSoundPromise = player.closeSound()
  openSoundPromise.then((data: any) => {
    console.log('promise 获取 数据', data)
  })
}

const startSave = () => {
  const startSavePromise = player.startSave(`${new Date().getTime()}`)
  startSavePromise.then((data: any) => {
    console.log('promise 获取 数据', data)
  })
}

const stopSave = () => {
  const stopSavePromise = player.stopSave()
  stopSavePromise.then((data: any) => {
    console.log('promise 获取 数据', data)
  })
}

const ezopenStartTalk = () => {
  player.startTalk()
}

const ezopenStopTalk = () => {
  player.stopTalk()
}

const fullScreen = () => {
  player.fullScreen()
}

const destroy = () => {
  const destroyPromise = player.destroy()
  destroyPromise.then((data: any) => {
    console.log('promise 获取 数据', data)
  })
}


console.log("父组件传值",props.rowData)
onMounted(() => {
  console.log("父组件传值",props.rowData)
  let startTime = moment(props.rowData.startTime).subtract(10,'seconds').format('yyyyMMDDHHmmss')
  let endTime = moment(props.rowData.endTime).add(10,'seconds').format('yyyyMMDDHHmmss')
  console.log("开始时间",startTime)
  console.log("结束时间",endTime)
  // 摄像头变化
  let code = 'AX5155206'
  player = new EZUIKit.EZUIKitPlayer({
          id: 'video-container', // 视频容器ID
          accessToken: "at.5174zfzl9quo2y401akabql36akk1688-45hcljmbk3-0nk5bj7-obtnvlyp7",
          url: `ezopen://open.ys7.com/${code}/1.rec?begin=${startTime}&end=${endTime}`,
          // simple - 极简版; pcLive-pc直播；pcRec-pc回放；mobileLive-移动端直播；mobileRec-移动端回放;security - 安防版;voice-语音版;
          //template: 'simple',
          plugin: ['talk'], // 加载插件，talk-对讲
          width: 600,
          height: 400,
        });
})


</script>

<template>
<div class="hello-ezuikit-js">
    <div id="video-container" style="width:600px;height:400px"></div>
    <div>
      <button @click="stop">stop</button>
      <button @click="play">play</button>
      <button @click="openSound">openSound</button>
      <button @click="closeSound">closeSound</button>
      <button @click="startSave">startSave</button>
      <button @click="stopSave">stopSave</button>
      <button @click="capturePicture">capturePicture</button>
      <button @click="fullScreen">fullScreen</button>
      <button @click="getOSDTime">getOSDTime</button>
      <button @click="ezopenStartTalk">开始对讲</button>
      <button @click="ezopenStopTalk">结束对讲</button>
      <button @click="destroy">销毁</button>
    </div>
  </div>
</template>
