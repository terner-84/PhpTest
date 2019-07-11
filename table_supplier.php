<?php

$surnames = ["Kubát", "Pekař", "Krejcárek", 
    "Hamřík", "Otradovec", "Jarolím"];
$names = ["Břetislav", "Rudolf", "Libor", "Kamil", "Jiří"];
$out = [];

class Row {
    var $name;
    var $surname;
    var $age;

    function __construct($name, $surname, $age) {
        $this->name = $name;
        $this->surname = $surname;
        $this->age = $age;
    }
}

for ($i = 0; $i < 500; $i++) {
    $temp_name = array_rand($names);
    $temp_surname = array_rand($surnames);
    $row = new Row($names[$temp_name], $surnames[$temp_surname], random_int(18, 65));
    array_push($out, $row);
}

echo json_encode($out);