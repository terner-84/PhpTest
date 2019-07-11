<?php
//$par = trim($_GET['par']);
$postPar = $_POST['s'];
$postArr = explode(";", $postPar);
//echo json_encode("houby " . $postPar);
echo json_encode($postArr);