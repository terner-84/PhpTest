<?php

//$vec = $_GET[''];

try {
    $db = new PDO('sqlite:C:\Users\hanus\Documents\programming\sqlite\sqlite-tools-win32-x86-3280000\test.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = "INSERT INTO veci (vec_nazev, vec_cena) 
        VALUES ('Sklenicka', 23.5)";
    $db->exec($query);
    echo json_encode('Date inserted');
} catch (PDOException $ex) {
    echo 'An error has occured ' . $ex->getMessage();
}