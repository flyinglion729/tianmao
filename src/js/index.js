$(function () {
    //导航栏 
    // 我的淘宝

    $(".nav_right ul li:eq(0)").on("mouseenter", function () {
        $(this).css({ backgroundColor: "#fff" })
        $(this).children("a").css({ color: "#f40" })
        $(".wdtb").css({ display: "block" })
        $(".nav_right1 .icon-sanjiao").addClass("sanjiao")
    })
    $(".nav_right ul li:eq(0)").on("mouseleave", function () {
        $(this).css({ color: "#999", backgroundColor: "#f2f2f2" })
        $(this).children("a").css({ color: "#999" })
        $(".wdtb").css({ display: "none" })
        $(".nav_right1 .icon-sanjiao").removeClass("sanjiao")
    })
    $(".wdtb").on("mouseenter", function () {
        $(this).css({ display: "block" })
        $(".nav_right ul li:eq(0)").trigger("mouseenter")
    })
    $(".wdtb").on("mouseleave", function () {
        $(this).css({ display: "none" })
        $(".nav_right ul li:eq(0)").trigger("mouseleave")
        $(".nav_right1 .icon-sanjiao").removeClass("sanjiao")
    })

    $(".nav_right ul li:eq(2)").on("mouseenter", function () {
        $(this).css({ backgroundColor: "#fff" })
        $(this).children("a").css({ color: "#f40" })
        $(".scj").css({ display: "block" })
        $(".nav_right3 .icon-sanjiao").addClass("sanjiao")
    })
    $(".nav_right ul li:eq(2)").on("mouseleave", function () {
        $(this).css({ color: "#999", backgroundColor: "#f2f2f2" })
        $(this).children("a").css({ color: "#999" })
        $(".scj").css({ display: "none" })
        $(".nav_right3 .icon-sanjiao").removeClass("sanjiao")
    })
    $(".scj").on("mouseenter", function () {
        $(this).css({ display: "block" })
        $(".nav_right ul li:eq(2)").trigger("mouseenter")
    })
    $(".scj").on("mouseleave", function () {
        $(this).css({ display: "none" })
        $(".nav_right ul li:eq(2)").trigger("mouseleave")
        $(".nav_right3 .icon-sanjiao").removeClass("sanjiao")
    })

    //菜单栏
    $list = $(".lunbo_list ul").children();
    var that;
    $list.on("mouseenter", function () {
        that = this
        $(this).css({ backgroundColor: "#fff" })
        $(this).children().css({ color: "#ff0036" })
        var listValue = $(this).children("a").html()
        $(".shoppingList").css({ display: "block" })
        $(".shoppingList").children().html(listValue)
    })
    $(".shoppingList").on("mouseenter", function () {
        $(".shoppingList").css({ display: "block" })
        // console.log(that)
        $(that).triggerHandler("mouseenter")
    })
    $list.on("mouseleave", function () {
        that = this
        $(this).css({ backgroundColor: "transparent" })
        $(this).children(".iconfont").css({ color: "#b1b6b7" })
        $(this).children("a").css({ color: "#fff" })
        $(".shoppingList").css({ display: "none" })
        $(".shoppingList").children().html("")

    })
    $(".shoppingList").on("mouseleave", function () {
        $(".shoppingList").css({ display: "none" })
        $(that).triggerHandler("mouseleave")
    })
    // 很多品牌的图标
    $(".theSecond ul").children().on("mouseenter", function () {
        $(this).children().children("span").stop().fadeIn(300)
        $(this).siblings().children().children("span").stop().fadeOut(300)
    })
    $(".theSecond ul").children().on("mouseleave", function () {
        $(this).children().children("span").fadeOut(300)
    })

    //滚动搜索栏 滚动侧边栏
    $(document).on("scroll", function () {
        var contentLong = $(".content_wrapper").offset().top;
        if ($(this).scrollTop() > contentLong) {
            $(".fadeSearch_wrapper").stop().animate({ top: 0 }, 200)
            $(".fadecolum_wrapper").stop().show(200)
        } else {
            $(".fadeSearch_wrapper").stop().animate({ top: -50 }, 50)
            $(".fadecolum_wrapper").stop().hide(50)
        }
    })
    $(".fadecolum_bottom").on("click", function () {
        $(document).scrollTop(0)
    })

    // 天猫超市
    $(".btn_left").on("mouseenter", function () {
        $(this).css({ color: "#fff", backgroundColor: "#00b262" })
        $(".btn_right").css({ color: "#000", backgroundColor: "#f1f1f1" })
        $(".p_02").css({ display: "none" })
        $(".str_01").eq(1).css({ display: "none" });
        $(".p_01").css({ display: "block" });
        $(".str_01").eq(0).css({ display: "block" });
    })
    // $(".btn_left").on("mouseleave",function(){
    //     $(this).css({color:"#000",backgroundColor:"#f1f1f1"})
    //     $(".btn_right").css({color:"#000",backgroundColor:"#f1f1f1"})
    // })
    $(".btn_right").on("mouseenter", function () {
        $(this).css({ color: "#fff", backgroundColor: "#00b262" })
        $(".btn_left").css({ color: "#000", backgroundColor: "#f1f1f1" })
        $(".p_02").css({ display: "block" })
        $(".str_01").eq(1).css({ display: "block" });
        $(".p_01").css({ display: "none" })
        $(".str_01").eq(0).css({ display: "none" });
    })
    // $(".btn_right").on("mouseleave",function(){
    //     $(this).css({color:"#000",backgroundColor:"#f1f1f1"})
    //     $(".btn_left").css({color:"#000",backgroundColor:"#f1f1f1"})
    // })

    $(".list_list").on("mouseenter", function () {
        $(this).css({ border: "1px solid #ff0036", opacity: 0.66 })
            .siblings().css({ border: "none", opacity: 1 })
    })
    $(".list_list").on("mouseleave", function () {
        $(this).css({ border: "none", opacity: 1 })
    })

    // AJAX请求搜索栏 
    
    var doing = false
    $(".txt")[0].addEventListener("compositionstart", function (e) {
        doing = true
    }, false)
    $(".txt").on("input", function () {
        var textValue = $(this).val();
        if (textValue) {
            setTimeout(function(){
                $.ajax({
                    url: "https://suggest.taobao.com/sug",
                    data: "code=utf-8&q=" + textValue + "&_ksTS=1563970517892_385&k=1&area=c2c&bucketid=10",
                    dataType: "jsonp",
                    type: "get",
                    // jsonpCallback: "jsonp386", 如果上面链接有这个&callback=jsonp386
                    success: function (data) {
                        var ageData = data;
                        var now = ageData.result;
                        // $("#searchText").html("");
                        // $("#searchText").css({display:"block"})
                        // $.each(now,function(index,value){
                        //     var oli = $("<li></li>");
                        //     $(oli).html(value[0]);
                        //     $("#searchText").prepend(oli)
                        // })
                        pushValue(now);
                    },
                    error: function () {
                        $("#searchText").css({ display: "none" })
                    }
                })
            },0)
        } else {
            $("#searchText").css({ display: "none" }).html("")
        }
    })
    $(".txt")[0].addEventListener("compositionend", function (e) {
        doing = false
    }, false)
    $(".txt").on("blur", function () {
        $("#searchText").css({ display: "none" }).html("")
    })
    function pushValue(note) {
        if (!doing) {
            $("#searchText").html("");
            $("#searchText").css({ display: "block" })
            $.each(note, function (index, value) {
                var oli = $("<li></li>");
                $(oli).html(value[0]);
                $("#searchText").prepend(oli)
            })
        }
    }
    //刷新页面获取COOKIE值
    function cookieUp(){
        var getck = getCookie("username");
        var ckUsername = decodeURIComponent(getck);
        if (ckUsername != "undefined") {
            $(".nav_left").html("<p>Hi!"+ckUsername+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><a id='top'>点击退出登录</a>")
            $(".nav_left").on("click","#top",function(){
            removeCookie("username","",-1);
            removeCookie("password","",-1);
            window.location.href = "http://localhost/tianmao/dit"
            return false
        })
        }
    }
    cookieUp();
    
})

        