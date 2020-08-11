const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pageName:String,
    showNav:{
      type:Boolean,
      value:true
    },
    showHome: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },
  lifetimes: {
    attached: function () {
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop: App.globalData.navTop,
        windowHeight: App.globalData.windowHeight
      })
     }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // //回退
    // navBack: function () {
    //     tt.navigateBack({
    //       delta: 1
    //     })      
    // },
    // //回主页
    // toIndex: function () {
    //   tt.navigateTo({
    //     url: 'pages/home/home'
    //   })
    // },
    search: function(){
      // tt.navigateTo({
      //   url: 'pages/'//转到搜索界面
      // })
    console.log('to search')
    }
  }
})