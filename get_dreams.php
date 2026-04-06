<?php
include "db.php";

header('Content-Type: application/json');

$sql = "SELECT * FROM dreams ORDER BY id DESC";
$result = $conn->query($sql);

$dreams = [];

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $dreams[] = $row;
    }
}

echo json_encode($dreams);
?>