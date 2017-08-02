<template>
  <div v-bind:class="{previewMode: previewMode}">
    <div class=page>
      <header>
        <Topbar class="topbar" v-on:preview="preview"/>
      </header>
      <main>
        <ResumeEditor class="editor"/>
        <ResumePreview class="preview"/>
      </main>
    </div>
    <button id="exitPreview" v-on:click="exitPreview">退出预览</button>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'

  import store from './store/index'

  export default {
    name: 'app',
    store,
    data(){
      return{
        previewMode :false
      }   
    },
    components: { Topbar, ResumeEditor, ResumePreview},
    created() {
      document.body.insertAdjacentHTML('afterbegin', icons) //
      let state = localStorage.getItem('state')
      if(state){
        state = JSON.parse(state) 
      }
      this.$store.commit('initState', state)
    },
    methods:{
      preview(){
        this.previewMode = true
      },
      exitPreview(){
        this.previewMode = false
      }
    }
  }
</script>

<style lang="scss">
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: cornflowerblue;
    >main{
      flex-grow: 1;  
    }
    >main{
      min-width: 1024px;
      max-width: 1440px;
      display: flex;
      justify-content: space-between;
      width: 100%; 
      align-self: center;
    }
  }


  #resumeEditor{
    min-width: 35%;
    background: #444;
  }
  #resumePreview{
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:20px;
  }

.previewMode .topbar{
  display: none;
}



.previewMode .preview{
  border-radius: 3px;
  max-width: 800px;
  margin: 16px auto;
  flex: 1;
}

#exitPreview{
  display: none;
}

.previewMode #exitPreview{
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
  background: #fff;
  color: cornflowerblue;
  width: 120px;
  height: 64px;
  padding: 8px;
  border-radius: 6px;
  &:hover{
    color: #fff;
    background: #aaa;
    border: 1px solid #fff;
  }

}
</style>
