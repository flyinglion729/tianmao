$(".btn").on("click",function(e){
    $username = $(".username").children("input").val();
    $password = $(".password").children("input").val();
    $.ajax({
        url:"http://localhost/tianmao/dit/onload.php",
        data:{
            username:$username,
            password:$password
        },
        type:"post",
        success:function(data){
            var num = data;
            if (num != 0) {
                console.log(0)
                $(".user_wrapper").html("欢迎尊敬的"+num)
                setTimeout(function(){
                    window.location.href = "http://localhost/tianmao/dit"
                },3000)
            }else{
                console.log(11)
                $(".user_wrapper").html("账号或密码错误"+"<br>"+"<a href='http://localhost/tianmao/dit/onload.html'>点击重新登录</a>'")
            }
        }
    })
})