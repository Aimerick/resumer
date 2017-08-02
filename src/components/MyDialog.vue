<template>
  <div class="wrapper" v-show="visible">
    <div class="dialog">
      <header>{{title}}
        <a class="close" @click="close">✖</a>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
      close(){
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper{
    text-align: center;
    position: fixed;
    background: hsla(0, 0%,0%,0.25);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog{
    background: white;
    border-radius: 4px;
    min-height: 16em;
    min-width: 24em;
    > header{
      padding: 16px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dotted cornflowerblue;
      > a{
        cursor: pointer;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        &:hover{
          background: cornflowerblue;
          border-radius: 50%;
          color: #fff;
        }
      }

    }
    > main{
      margin-top: 48px;
      padding: 16px;
    }
  }
</style>
