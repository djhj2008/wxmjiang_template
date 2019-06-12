// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面总高度将会放在这里
    windowHeight: 0,
    // navbar的高度
    navbarHeight: 0,
    // header的高度
    headerHeight: 0,
    // scroll-view的高度
    scrollViewHeight: 0,
    TabCur: 0,
    scrollLeft: 0,
    tabs: ["温度异常", "治疗中", "低温异常"],
    subTitles: ["高温数量", "治疗数量", "低温数量"]    
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 先取出页面高度 windowHeight
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight
        });
        console.log("windowHeight:" + res.windowHeight);
      }
    });

    // 然后取出navbar和header的高度
    // 根据文档，先创建一个SelectorQuery对象实例
    let query = wx.createSelectorQuery().in(this);
    // 然后逐个取出navbar和header的节点信息
    // 选择器的语法与jQuery语法相同
    query.select('#navbar').boundingClientRect();
    query.select('#title1').boundingClientRect();
    query.select('#title2').boundingClientRect();
    query.select('#title3').boundingClientRect();
    query.select('#title4').boundingClientRect();
    query.select('#title5').boundingClientRect();
    query.select('#title6').boundingClientRect();
    query.select('#title7').boundingClientRect();

    // 执行上面所指定的请求，结果会按照顺序存放于一个数组中，在callback的第一个参数中返回
    query.exec((res) => {
      // 分别取出navbar和header的高度
      let navbarHeight = res[0].height;
      console.log(res);
      console.log("navbarHeight:" + navbarHeight);
      // 然后就是做个减法
      let scrollViewHeight = this.data.windowHeight - res[7].top- res[7].height;

      // 算出来之后存到data对象里面
      this.setData({
        scrollViewHeight: scrollViewHeight
      });
    });
  },

  highsetting: function(){
    wx.navigateTo({
      url: '/pages/home/high/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})