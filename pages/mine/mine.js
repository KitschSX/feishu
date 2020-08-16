var app = getApp()
Page({
  data: {
     userInfo:{
          avatarUrl:"",//用户头像
          nickName:"",//用户昵称
          }
  },
  onLoad: function(options){
    var that=this;
    tt.login({
      success:function(res){
        console.log(res);
        // if (res.code) {
        //  tt.request({
        //     // url: 'http://localhost:8080/login',
        //     data: {
        //       code: res.code
        //     },
        //     success: function(res){
        //       //res 为 openid
        //       console.log(res)
        //     },
        //  })
        // };
        tt.getUserInfo({
          success: function(res) {
            console.log(res);
            var avatarUrl = 'userInfo.avatarUrl';
            var nickName = 'userInfo.nickName';
            that.setData({
              [avatarUrl]: res.userInfo.avatarUrl,
              [nickName]:res.userInfo.nickName,
            })
          }
        })
      }
    })
  }
})