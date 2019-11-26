<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$db = new mysqli('localhost', 'root', 'root', 'game');

if ($db->connect_errno) {
	die(json_encode(['err'=> $db->connect_error]));
}


// die(json_encode($_POST));

$name = isset($_POST['name']) ? $_POST['name'] : '';
$score = isset($_POST['score']) ? $_POST['score'] : '';
$time = isset($_POST['time']) ? $_POST['time'] : '';

$q = "INSERT INTO players (name, score, time) 
			VALUES('{$name}', '{$score}', '{$time}')";

$db->query($q);

if ($db->error) {
	die(json_encode(['insert error'=> $db->error, 'query'=> $q]));
}



$q = 'SELECT * FROM players ORDER BY score LIMIT 10';
$res = $db->query($q);

$data = [];

if ($res->num_rows > 0) {
	while($row = $res->fetch_assoc())
		$data[] = $row;
		// array_push($d, $row);
}


die(json_encode($data));


// [
// 	[
// 		'name': 'asd',
// 		'score': 50,
// 		'time': 701,
// 	],[
// 		'name': 'asd',
// 		'score': 50,
// 		'time': 701,
// 	],[
// 		'name': 'asd',
// 		'score': 50,
// 		'time': 701,
// 	]
// ]





