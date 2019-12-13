$(function () {
    var oli = $(".shopping_left_bottom").children().children();
    var bli = $(".shopping_left_top").children()
    var maxImgLi = $(".shopping_big").children().children();
    var bIndex = 0;
    oli.on("mouseenter", function () {
        bIndex = $(this).index();
        $(this).css({ border: "2px solid #000000" })
            .siblings().css({ border: "2px solid transparent" });
        bli.eq(bIndex).css({ zIndex: 10 })
            .siblings("img").css({ zIndex: 1 });
        maxImgLi.eq(bIndex).css({ display: "block" })
            .siblings().css({ display: "none" })
    })

    //放大镜
    var smallBox = $(".shopping_left_top");
    var block = $(".block");
    var bigBox = $(".shopping_big");
    var bigImg = $(".shopping_big").children().children().children();

    smallBox.on("mouseenter", function (e) {
        block.css({ display: "block" })
        bigBox.css({ display: "block" })
        $(document).on("mousemove", function (e) {
            var xx = e.pageX - smallBox.offset().left
            var yy = e.pageY - smallBox.offset().top
            var x = xx - block.outerWidth() / 2;
            var y = yy - block.outerHeight() / 2;
            var maxX = smallBox.innerWidth() - block.outerWidth();
            var maxY = smallBox.innerHeight() - block.outerHeight();
            if (x <= 0) {
                x = 0;
            }
            if (x >= maxX) {
                x = maxX
            }
            if (y <= 0) {
                y = 0
            }
            if (y >= maxY) {
                y = maxY
            }
            block.css({ left: x, top: y })
            var bigMoveX = -x * bigBox.innerWidth() / block.innerWidth();
            var bigMoveY = -y * bigBox.innerHeight() / block.innerHeight();
            bigImg.eq(bIndex).css({ left: bigMoveX, top: bigMoveY })
        })
    })
    smallBox.on("mouseleave", function () {
        block.css({ display: "none" })
        bigBox.css({ display: "none" })
        $(document).off("mousemove")
    })

    //购物车部分
    var shoppingArr = JSON.parse(localStorage.car)||[];
    var oneCar = {};
    var black = $(".num_top").children("strong");
    var blackNum = true;
    var oliNum = $(".strong_men").children();


    black.on("click", function () {
        if (blackNum) {
            $(this).css({ border: "2px solid #ff0036" })
            blackNum = false;
            oneCar.color = "black";
        } else {
            $(this).css({ border: "2px solid transparent" })
            blackNum = true;
            oneCar.color = "";
        }
    })
    for (var i = 0; i < 9; i++) {
        oliNum.eq(i)[0].index = true;
    }
    oliNum.on("click", function () {
        if ($(this)[0].index) {
            $(this).css({ border: "2px solid #ff0036" })
                .siblings().css({ border: "2px solid transparent" })
            $(this)[0].index = false;
            for (var j = 0; j < $(this).siblings().length; j++) {
                $(this).siblings().eq(j)[0].index = true
            }
            oneCar.shoe = $(this).html()
        } else {
            $(this).css({ border: "2px solid transparent" })
            $(this)[0].index = true;
            oneCar.shoe = ""
        }
    })

    var TopDown = 1;
    oneCar.shoeNum = TopDown
    $(".litTop").on("click", function () {
        TopDown++;
        if (TopDown >= 74) {
            TopDown = 74
        }
        $(".bot_men").children("strong").html(TopDown)
        oneCar.shoeNum = TopDown
    })
    $(".litDown").on("click", function () {
        TopDown--;
        if (TopDown <= 1) {
            TopDown = 1
        }
        $(".bot_men").children("strong").html(TopDown)
        oneCar.shoeNum = TopDown
    })
    
    //存储在数据
    $(".btn_car").on("click", function () {
        var twoCar = $.extend({},oneCar)
        function bigNum (){
            if (oneCar.color != "" && oneCar.shoe != "") {
                if (shoppingArr.length == 0) {
                    shoppingArr.push(twoCar)
                } else {  
                    for(var j = 0;j<shoppingArr.length;j ++){
                        if (shoppingArr[j].shoe == twoCar.shoe) {
                            shoppingArr[j].shoeNum ++;
                            return;
                        }
                    }
                    shoppingArr.push(twoCar)
                }
            }
        }
        bigNum();
        //存到本地存储，并进行调用
        localStorage.car = JSON.stringify(shoppingArr);
        var changeNum = JSON.parse(localStorage.car)

        shopCart(changeNum)

    })
    function shopCart(know){
        $(".shopping_list").html("")
        $.each(know,function(index,value){
            var nli = $("<li></li>");
            nli.html("颜色:"+value.color+"---码数:"+value.shoe+"---"+value.shoeNum+"双"+"---------<span>删除</span>");
            $(".shopping_list").append(nli[0])
            var childNum = $(".shopping_list").children().length;
            $(".shopping_list").css({bottom:50*childNum})
        })
        $(".shopping_list").children().on("click","span",function(){
            var trueNum = $(this).parent().index()
            shoppingArr.splice(trueNum,1)
            localStorage.car = JSON.stringify(shoppingArr);
            var changeNum = JSON.parse(localStorage.car)
            shopCart(changeNum)
        })
    }
    function init(){
        var mm = JSON.parse(localStorage.car)
        shopCart(mm)
    }
    init()
})

