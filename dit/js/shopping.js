$(function(){var n=$(".shopping_left_bottom").children().children(),s=$(".shopping_left_top").children(),i=$(".shopping_big").children().children(),h=0;n.on("mouseenter",function(){h=$(this).index(),$(this).css({border:"2px solid #000000"}).siblings().css({border:"2px solid transparent"}),s.eq(h).css({zIndex:10}).siblings("img").css({zIndex:1}),i.eq(h).css({display:"block"}).siblings().css({display:"none"})});var p=$(".shopping_left_top"),a=$(".block"),d=$(".shopping_big"),g=$(".shopping_big").children().children().children();p.on("mouseenter",function(n){a.css({display:"block"}),d.css({display:"block"}),$(document).on("mousemove",function(n){var s=n.pageX-p.offset().left,i=n.pageY-p.offset().top,o=s-a.outerWidth()/2,e=i-a.outerHeight()/2,t=p.innerWidth()-a.outerWidth(),r=p.innerHeight()-a.outerHeight();o<=0&&(o=0),t<=o&&(o=t),e<=0&&(e=0),r<=e&&(e=r),a.css({left:o,top:e});var l=-o*d.innerWidth()/a.innerWidth(),c=-e*d.innerHeight()/a.innerHeight();g.eq(h).css({left:l,top:c})})}),p.on("mouseleave",function(){a.css({display:"none"}),d.css({display:"none"}),$(document).off("mousemove")});var o=JSON.parse(localStorage.car)||[],e={},t=$(".num_top").children("strong"),r=!0,l=$(".strong_men").children();t.on("click",function(){r?($(this).css({border:"2px solid #ff0036"}),r=!1,e.color="black"):($(this).css({border:"2px solid transparent"}),r=!0,e.color="")});for(var c=0;c<9;c++)l.eq(c)[0].index=!0;l.on("click",function(){if($(this)[0].index){$(this).css({border:"2px solid #ff0036"}).siblings().css({border:"2px solid transparent"}),$(this)[0].index=!1;for(var n=0;n<$(this).siblings().length;n++)$(this).siblings().eq(n)[0].index=!0;e.shoe=$(this).html()}else $(this).css({border:"2px solid transparent"}),$(this)[0].index=!0,e.shoe=""});var f=1;function u(n){$(".shopping_list").html(""),$.each(n,function(n,s){var i=$("<li></li>");i.html("颜色:"+s.color+"---码数:"+s.shoe+"---"+s.shoeNum+"双---------<span>删除</span>"),$(".shopping_list").append(i[0]);var o=$(".shopping_list").children().length;$(".shopping_list").css({bottom:50*o})}),$(".shopping_list").children().on("click","span",function(){var n=$(this).parent().index();o.splice(n,1),localStorage.car=JSON.stringify(o),u(JSON.parse(localStorage.car))})}e.shoeNum=f,$(".litTop").on("click",function(){74<=++f&&(f=74),$(".bot_men").children("strong").html(f),e.shoeNum=f}),$(".litDown").on("click",function(){--f<=1&&(f=1),$(".bot_men").children("strong").html(f),e.shoeNum=f}),$(".btn_car").on("click",function(){var s=$.extend({},e);!function(){if(""!=e.color&&""!=e.shoe)if(0==o.length)o.push(s);else{for(var n=0;n<o.length;n++)if(o[n].shoe==s.shoe)return o[n].shoeNum++;o.push(s)}}(),localStorage.car=JSON.stringify(o),u(JSON.parse(localStorage.car))}),u(JSON.parse(localStorage.car))});