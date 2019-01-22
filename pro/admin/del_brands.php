<?php
if(!isset($_SESSION['user_email'])){
    header('location: login.php?not_admin=You are not Admin!');
}
if(isset($_GET['del_brn'])){
    $brn_id = $_GET['del_brn'];
    $del_brn = "delete from brands where brand_id='$brn_id'";
    $run_del = mysqli_query($con,$del_brn);
    if($run_del){
        header('location: index.php?view_brands');
    }
}