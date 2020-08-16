var app = getApp()
Page({
  data: {
    status:false,
    inputsearch: ' ',
    job:[],
    history:[],
    inputVal:'',
    },
    onLoad: function (options) {
        var that =this;
        tt.getStorage({
            key: 'history',
            success: function(res){
                that.setData({
                    history:res.data,
                })
                if(that.data.history.length==0){
                    that.setData({
                        status:false
                    });
                }else{
                    that.setData({
                        status:true
                    })
                }
            },
            fail: function(res) {
                console.log('history fail',res)
            }
        });
    },
    showInput: function () {
        this.setData({
           inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    // getList(this);
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    // getList(this);
    },
    inputTyping: function (e) {
    //搜索数据
        this.setData({
            inputVal: e.detail.value
        });
    },
    clean1: function(e){
        var that = this;
        tt.removeStorage({
            key: 'history',
            success: function(res) {
                that.setData({
                history: []
             })
         },
    })


    },
    search: function(e){
        var that = this;
        var input1 = that.data.inputVal;
        console.log(input1);
        if(input1==''){
            tt.showToast({
                title: '请输入要搜索信息', 
                icon:'none',
                duration: 1000,
            });
        }else{
            that.data.history.unshift(input1);
            console.log(that.data.history)
            tt.setStorage({
                key: 'history', // 缓存数据的key
                data: that.data.history, // 要缓存的数据
                success: function(res){
                    that.setData({
                        history:that.data.history,
                        status:true
                    })
                    console.log('storage success',res);
                },
            });
            //get请求
        }
    }
})