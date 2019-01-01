<?php

require "db_connection.php";

function getCategory(){

    global $conn;

    $getCatsQuery =  "select * from categories";
    $getCatsResult = mysqli_query($conn,$getCatsQuery);

    while($row = mysqli_fetch_assoc($getCatsResult))
    {
        $id = $row["cat_id"];
        $title = $row["cat_title"];
        echo "<li> <a class='nav-link' href='#'>$title</a><li>";
    }
}

function getBrands(){

    global $conn;

    $getBrandsQuery =  "select * from brands";
    $getBrandsResult = mysqli_query($conn,$getBrandsQuery);

    while($row = mysqli_fetch_assoc($getBrandsResult))
    {
        $id = $row["brand_id"];
        $title = $row["brand_title"];
        echo "<li> <a class='nav-link' href='#'>$title</a><li>";
    }
}