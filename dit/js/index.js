$(function(){var o;$(".nav_right ul li:eq(0)").on("mouseenter",function(){$(this).css({backgroundColor:"#fff"}),$(this).children("a").css({color:"#f40"}),$(".wdtb").css({display:"block"}),$(".nav_right1 .icon-sanjiao").addClass("sanjiao")}),$(".nav_right ul li:eq(0)").on("mouseleave",function(){$(this).css({color:"#999",backgroundColor:"#f2f2f2"}),$(this).children("a").css({color:"#999"}),$(".wdtb").css({display:"none"}),$(".nav_right1 .icon-sanjiao").removeClass("sanjiao")}),$(".wdtb").on("mouseenter",function(){$(this).css({display:"block"}),$(".nav_right ul li:eq(0)").trigger("mouseenter")}),$(".wdtb").on("mouseleave",function(){$(this).css({display:"none"}),$(".nav_right ul li:eq(0)").trigger("mouseleave"),$(".nav_right1 .icon-sanjiao").removeClass("sanjiao")}),$(".nav_right ul li:eq(2)").on("mouseenter",function(){$(this).css({backgroundColor:"#fff"}),$(this).children("a").css({color:"#f40"}),$(".scj").css({display:"block"}),$(".nav_right3 .icon-sanjiao").addClass("sanjiao")}),$(".nav_right ul li:eq(2)").on("mouseleave",function(){$(this).css({color:"#999",backgroundColor:"#f2f2f2"}),$(this).children("a").css({color:"#999"}),$(".scj").css({display:"none"}),$(".nav_right3 .icon-sanjiao").removeClass("sanjiao")}),$(".scj").on("mouseenter",function(){$(this).css({display:"block"}),$(".nav_right ul li:eq(2)").trigger("mouseenter")}),$(".scj").on("mouseleave",function(){$(this).css({display:"none"}),$(".nav_right ul li:eq(2)").trigger("mouseleave"),$(".nav_right3 .icon-sanjiao").removeClass("sanjiao")}),$list=$(".lunbo_list ul").children(),$list.on("mouseenter",function(){o=this,$(this).css({backgroundColor:"#fff"}),$(this).children().css({color:"#ff0036"});var s=$(this).children("a").html();$(".shoppingList").css({display:"block"}),$(".shoppingList").children().html(s)}),$(".shoppingList").on("mouseenter",function(){$(".shoppingList").css({display:"block"}),$(o).triggerHandler("mouseenter")}),$list.on("mouseleave",function(){o=this,$(this).css({backgroundColor:"transparent"}),$(this).children(".iconfont").css({color:"#b1b6b7"}),$(this).children("a").css({color:"#fff"}),$(".shoppingList").css({display:"none"}),$(".shoppingList").children().html("")}),$(".shoppingList").on("mouseleave",function(){$(".shoppingList").css({display:"none"}),$(o).triggerHandler("mouseleave")}),$(".theSecond ul").children().on("mouseenter",function(){$(this).children().children("span").stop().fadeIn(300),$(this).siblings().children().children("span").stop().fadeOut(300)}),$(".theSecond ul").children().on("mouseleave",function(){$(this).children().children("span").fadeOut(300)}),$(document).on("scroll",function(){var s=$(".content_wrapper").offset().top;$(this).scrollTop()>s?($(".fadeSearch_wrapper").stop().animate({top:0},200),$(".fadecolum_wrapper").stop().show(200)):($(".fadeSearch_wrapper").stop().animate({top:-50},50),$(".fadecolum_wrapper").stop().hide(50))}),$(".fadecolum_bottom").on("click",function(){$(document).scrollTop(0)}),$(".btn_left").on("mouseenter",function(){$(this).css({color:"#fff",backgroundColor:"#00b262"}),$(".btn_right").css({color:"#000",backgroundColor:"#f1f1f1"}),$(".p_02").css({display:"none"}),$(".str_01").eq(1).css({display:"none"}),$(".p_01").css({display:"block"}),$(".str_01").eq(0).css({display:"block"})}),$(".btn_right").on("mouseenter",function(){$(this).css({color:"#fff",backgroundColor:"#00b262"}),$(".btn_left").css({color:"#000",backgroundColor:"#f1f1f1"}),$(".p_02").css({display:"block"}),$(".str_01").eq(1).css({display:"block"}),$(".p_01").css({display:"none"}),$(".str_01").eq(0).css({display:"none"})}),$(".list_list").on("mouseenter",function(){$(this).css({border:"1px solid #ff0036",opacity:.66}).siblings().css({border:"none",opacity:1})}),$(".list_list").on("mouseleave",function(){$(this).css({border:"none",opacity:1})});var s,n,e=!1;$(".txt")[0].addEventListener("compositionstart",function(s){e=!0},!1),$(".txt").on("input",function(){var s=$(this).val();s?setTimeout(function(){$.ajax({url:"https://suggest.taobao.com/sug",data:"code=utf-8&q="+s+"&_ksTS=1563970517892_385&k=1&area=c2c&bucketid=10",dataType:"jsonp",type:"get",success:function(s){var o,n=s.result;o=n,e||($("#searchText").html(""),$("#searchText").css({display:"block"}),$.each(o,function(s,o){var n=$("<li></li>");$(n).html(o[0]),$("#searchText").prepend(n)}))},error:function(){$("#searchText").css({display:"none"})}})},0):$("#searchText").css({display:"none"}).html("")}),$(".txt")[0].addEventListener("compositionend",function(s){e=!1},!1),$(".txt").on("blur",function(){$("#searchText").css({display:"none"}).html("")}),s=getCookie("username"),"undefined"!=(n=decodeURIComponent(s))&&($(".nav_left").html("<p>Hi!"+n+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><a id='top'>点击退出登录</a>"),$(".nav_left").on("click","#top",function(){return removeCookie("username","",-1),removeCookie("password","",-1),!(window.location.href="http://localhost/tianmao/dit")}))});