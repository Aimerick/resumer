<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="triangle"></div>
      <div class="actions">
        <span>『 你好，{{user.username}} 』</span>
        <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <SignUpForm @success="login($event)"/>
        </MyDialog>
        <a class="button" href="#">登录</a>
        <button class="button" v-on:click="preview">预览</button>
      </div>
    </div>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
export default {
  name: 'Topbar',
  data(){
    return {
      signUpDialogVisible: false
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    }
  },
  components: {
    MyDialog, SignUpForm
  },
  methods: {
    login(user){
      this.signUpDialogVisible = false
      this.$store.commit('setUser', user)
    },
     preview(){
        this.$emit('preview')
    }
  }
}
</script>

<style scoped lang="scss">
  #topbar{
    color: #646464;
    background: #fff;
    border-bottom: 5px solid  cornflowerblue;
    border-top: 4px solid  cornflowerblue;
    >.wrapper{
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      height:64px;

      >.triangle{
        position: fixed;
        left: 494px;
        height:0px;
        width:0px;
        border-top:solid 32px transparent;
        border-left:solid 32px cornflowerblue;
        border-bottom:solid 32px transparent;
        border-right:solid 32px transparent;
      }
    
    }
    >.wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
    }
    .logo{
      font-size:24px;
      color:#fff;
      background: cornflowerblue;
      padding: 209px;
      margin-left: -40px;
    }
    span{
      font-size: 20px;
      margin-right: 40px;
    }

  }

  .button{
    width:62px;
    height:62px;
    border: none;
    cursor: pointer;
    font-size: 18px; 
    background: #fff;
    color: #646464;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover{
      border: 1px solid cornflowerblue;
      border-radius: 50%;
      background: #fff;
      color: cornflowerblue;
    }
    &.primary{
      background:cornflowerblue;
      color: white;
      border-radius: 50%;

      &:hover{
        border: 1px solid cornflowerblue;
        border-radius: 50%;
        background: #fff;
        color: cornflowerblue;
      }
    }

  }
  .actions > a{
  }
</style>
