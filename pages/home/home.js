var app = getApp()
Page({
  data: {
    navbar: ['随便', '景点', '美食','伙伴','住宿'],
    btnVal: ['考虑考虑','好'],
    likeVal: [1,1,1],
    currentTab: 0,
    currentTab1: 0,
    choose: true,
    btnWidth:144,
  },
  navbarTap: function(e){
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  swiperChange: function (e) {  
    var that = this;
    that.setData({  
    currentTab: e.detail.current,  
    })  
  },  
  swiperChange1: function (e) {  
    var that = this;
    that.setData({  
    currentTab1: e.detail.current,  
    })  
  },
  clickLike:function(e){//收藏按钮
    var that = this;
    var val = e.currentTarget.dataset.val;
    let likeV = "likeVal[" + val + "]"
    if(that.data.likeVal[val]){
      that.setData({
        [likeV]:0, 
      })
      tt.showToast({
      title: '收藏成功',
      icon: '',     
      duration: 2000,      //停留时间
      })
    }else{
      that.setData({
      [likeV]: 1
      })
      tt.showToast({
      title: '取消收藏',
      icon: '',     
      duration: 2000,      //停留时间
      })
    }
  },
  clickNext: function(e){
    var that = this;
    var val = that.data.currentTab1;
    if(val==0||val==1){
      that.setData({
        currentTab1: val+1
      })
    }else if(val==2){
      that.setData({
        btnVal : ['真挑剔！自己去搜下玩的',''],
        choose : false
      })
    }
  }
//   onLoad: function () {
//     var that = this  
//     tt.request({
//     url: 'http://121.36.24.180:777/api',
//     method: 'GET',
//     success: function(res){
//     console.log("age:",res.data.data[0].age,"name:",res.data.data[0].name)
//     },
//     fail: function(res) {
//       console.log('get:',res.errMsg)
//     },
//     complete: function() {
//     }
//   })
//  },
})
