<?php

require "db_connection.php";

function getCategory(){

    global $conn;

    $getCatsQuery =  "select * from categories";
    $getCatsResult = mysqli_query($conn,$getCatsQuery);

    while($row = mysqli_fetch_assoc($getCatsResult))
    {
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