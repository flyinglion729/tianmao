$(".btn").on("click",function(){$username=$(".username").children("input").val(),$password=$(".password").children("input").val(),$.ajax({url:"http://localhost/tianmao/dit/load.php",data:{username:$username,password:$password},type:"get",success:function(a){var t=a;console.log(t),t?$(".user_wrapper").html("恭喜"+t+"注册成功<br><a href='http://localhost/tianmao/dit/onload.html'>返回登录窗口</a>"):$(".user_wrapper").html("对不起，该用户已被注册<br><a href='http://localhost/tianmao/dit/register.html'>返回上一级</a>")}})});