var app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list: '',
    word: '',
    message:''
  },
  houduanButton1: function () {  tt.login({
    success (res) {
      console.log('code',res);
      var code = res.code;
      tt.request({
            //请求地址
            url:"https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal",
            header:{
              'Content-Type': 'application/json'
            },
            data:{
              "app_id":"cli_9e4d1ead35f6100d",
              "app_secret":"0ayKYOVHc3EMOmTZGAxgMcvXuybJ5wbG"
            },
            method:"POST",
            success:function(res){
                console.log('fei',res.data.app_access_token)
                let token = res.data.app_access_token;
               tt.request({
            //请求地址
            url:"https://open.feishu.cn/open-apis/mina/v2/tokenLoginValidate",
            header:{
              'Content-Type': 'application/json',
              'Authorization':'Bearer <app_access_token>'
            },
            data:{
              "token":token,
              "code":code
            },
            method:"POST",
            success:function(res){
                console.log('c2s',res)
               
            }
        })
            }
        })
    }
})
  },
    //获取输入框的内容
  houduanTab_input: function (e) {
    this.setData({
      word: e.detail.value
    })
  },
  // houduanButton2的网络请求
  houduanButton2: function () {
    var that = this;
    tt.request({
      url: 'http://localhost:8080/getWord',
      data:{
        word: that.data.word
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.message)//打印到控制台
        var message = res.data.message;
        if (message == null) {
          var toastText = '数据获取失败';
          tt.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            message: message
          })
        }
      tt.showModal({
        title: '详细内容',
        content: message,
        confirmText:'确定',
        showCancel:false,
      })
      },
      fail:function(res){
        console.log("get message",res.errMsg);
         tt.showModal({
        title: '查询失败',
        showCancel:false,
        content: '',
        confirmText:'确定',
      })
      }
    })
  }
  
  
})