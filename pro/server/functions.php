get<?php

require "db_connection.php";

function getCategory(){

    global $conn;


    $getCatsQuery =  "select * from categories";
    $getCatsResult = mysqli_query($conn,$getCatsQuery);

    while($row = mysqli_fetch_assoc($getCatsResult))
    {
        $cat_id = $row["cat_id"];
        $title = $row["cat_title"];
        echo "<li> <a class='nav-link' href='index.php?cat=$cat_id'>$title</a><li>";
    }
}

function getBrands(){

    global $conn;

    $getBrandsQuery =  "select * from brands";
    $getBrandsResult = mysqli_query($conn,$getBrandsQuery);

    while($row = mysqli_fetch_assoc($getBrandsResult))
    {
        $title = $row["brand_title"];
        echo "<li> <a class='nav-link' href='#'>$title</a><li>";
    }
}

function getCategoryAdmin(){

    global $conn;

    $getCatsQueryAdmin =  "select * from categories";
    $getCatsResultAdmin = mysqli_query($conn,$getCatsQueryAdmin);

    while($row = mysqli_fetch_assoc($getCatsResultAdmin))
    {
        $title = $row["cat_title"];
        echo "<option>$title</option>";
    }
}

function getBrandsAdmin(){

    global $conn;

    $getBrandsQueryAdmin =  "select * from brands";
    $getBrandsResultAdmin = mysqli_query($conn,$getBrandsQueryAdmin);

    while($row = mysqli_fetch_assoc($getBrandsResultAdmin))
    {
        $title = $row["brand_title"];
        echo "<option>$title</option>";
    }
}

function getPro(){
    global $conn;
    $getProQuery = '';
    if(!isset($_GET['cat']))
    {
        $getProQuery = "select * from products order by RAND();";
    }
    else{
        $pro_cat_id = $_GET['cat'];
        $getProQuery = "select * from products where pro_cat = '$pro_cat_id';";
    }
    $getProResult = mysqli_query($conn,$getProQuery);
    $pro_count = mysqli_num_rows($getProResult);
    if($pro_count == 0){
        echo "<h3 class='alert-warning'> No Product in selected criteria</h3>";
    }
    while($row = mysqli_fetch_assoc($getProResult)){
        $pro_id = $row['pro_id'];
        $pro_title = $row['pro_title'];
        $pro_price = $row['pro_price'];
        $pro_image = $row['pro_image'];
        echo "
                <div class='col-sm-6 col-md-4 col-lg-3 text-center product-summary'>
                    <h5 class='text-capitalize'>$pro_title</h5>
                    <img src='admin/product_images/$pro_image'>
                    <p> <b> Rs $pro_price/-  </b> </p>
                    <a href='detail.php' class='btn btn-info btn-sm'>Details</a>
                    <a href='#'>
                        <button class='btn btn-primary btn-sm'>
                            <i class='fas fa-cart-plus'></i> Add to Cart
                        </button>
                    </a>
                </div>
        ";
    }
}