<?php

$con = mysqli_connect("localhost","root","","tech_box_db");

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";