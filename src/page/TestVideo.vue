<template>
    <div>
      <div class="video">
        <video id="my-video" class="video-js vjs-default-skin" controls preload="none" x5-playsinline="" webkit-playsinline="" playsinline="" poster="" x-webkit-airplay="allow">
          <source :src="videoUrl" type="video/mp4">
        </video>
      </div>
    </div>
</template>

<script>
  import 'video.js/dist/video-js.css'
  import videojs from 'video.js'
    export default {
        name: "TestVideo",
      data(){
          return{
            videoUrl:'../assets/video/video.mp4',
            myPlayer: '', // 视频播放器实例
            myPlayerOptions : {
              bigPlayButton: true, // 是否显示播放按钮（这个播放按钮默认会再左上方，需用CSS设置居中）
              textTrackDisplay: true,
              posterImage: true,
              errorDisplay: true,
              controlBar: true,
              autoplay:false, // 不设置自动播放，若未true，则无法看到视频海报图片
              controls: true,
            }
          }
      },
      methods:{
          video(){
            setTimeout(() => {
              this.myPlayer = videojs('my-video',this.myPlayerOptions);
              this.player.src(this.brandDetail.vedioUrl);
              this.player.load(this.brandDetail.vedioUrl);
            }, 500)
          }
      },
      mounted(){
        videojs.addLanguage('zh-CN', {
          "You aborted the media playback": "视频播放被终止",
          "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
          "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
          "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
          "No compatible source was found for this media.": "无法找到此视频兼容的源。",
        });


// 此处等待UI渲染进程结束，再执行js逻辑线程
       this.video()

      },
      destroyed () {
        this.myPlayer.dispose()
      }

    }
</script>

<style scoped>
.video{
  width: 100%;
  height: 150px;
}
#my-video{
  width: 100%;
  height: 150px;
  position: relative;
}
.vjs-big-play-button{
  position: absolute;
  left:50% ;
  top: 50% ;
  transform: translate(-50%,-50%);
}
.video-js .vjs-big-play-button {
  border:unset!important;
  background-color:unset!important;
}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  font-size: 45px;
}

</style>
