<?php
header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin:*');
$connect = mysqli_connect('localhost','root','root','tianmao',3306);
if(mysqli_connect_error()){
	die('数据库连接错误');     //当数据库链接失败时触发，固定格式
}

$uname = $_REQUEST['username'];
$pw = $_REQUEST['password']; 


$sql0 = "SELECT * FROM tianmao WHERE username='$uname' AND password='$pw'" ;
$result0 = mysqli_query($connect,$sql0);
$rows = mysqli_num_rows($result0);

if($rows>0){
    echo $uname;
    setcookie("username",$uname,time()+24*60*60);
	setcookie("password",$pw,time()+24*60*60);
}else{
	echo 0;
}


?>