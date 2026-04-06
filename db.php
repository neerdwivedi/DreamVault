<?php
$conn = new mysqli("localhost", "root", "", "dreamvault");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>