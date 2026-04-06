<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $title = $conn->real_escape_string($_POST['title']);
    $description = $conn->real_escape_string($_POST['description']);
    $tag = $conn->real_escape_string($_POST['tag']);

    $sql = "INSERT INTO dreams (title, description, tag) 
            VALUES ('$title', '$description', '$tag')";

    if ($conn->query($sql) === TRUE) {
        header("Location: journal.html");
        exit();
    } else {
        echo "Error: " . $conn->error;
    }
}
?>