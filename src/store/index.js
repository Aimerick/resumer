import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样
import objectPath from "object-path"


Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: '姓名',
        city: '城市',
        title: '职业意向',
        birthday: '19xx-xx-xx'
      },
      workHistory: [
        {
          company: 'A公司', content: `公司总部设在XXXX区，在yy成立分公司。专注于XXX领域，产品XXXXX，
主要工作如下:
1. xxx。
2. xxx。`
        },
        { company: 'B公司', content: `公司总部设在XXXX区，在yy成立分公司。专注于XXX领域，产品XXXXX，主要工作如下:
1. xxx。
2. xxx` },
      ],
      education: [
        { school: 'C大学', content: '本科' },
        { school: 'D高中'},
      ],
      projects: [
        { name: 'project A', content: '文字' },
        { name: 'project B', content: '文字' },
      ],
      awards: [
        { name: 'E奖', content: '奖励详情' },
        { name: 'D奖'},
      ],
      contacts: [
        { contact: 'phone', content: '13xxxxxxxxx' },
        { contact: 'qq', content: '123456789' },
      ],
    }
  },
  mutations: {
    initState(state, payload){
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload 
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload){
      Object.assign(state.user, payload)
      console.log(state.user)
    }
  }
})
