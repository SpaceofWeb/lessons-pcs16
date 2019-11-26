<?php

$db = new mysqli('localhost', 'root', 'root', 'game');

if ($db->connect_errno) {
	die(json_encode('[mgs: "error"]'));
}


$q = 'INSERT INTO players (name, score, time) 
VALUES(' . $_POST['name'] . ', 
			' . $_POST['score'] . ', 
			' . $_POST['time'] . ')';

$db->query($q);


$q = 'SELECT * FROM players ORDER BY score LIMIT 10';

$data = $db->query($q);

$d = [];

if ($data) {
	while($row = $data->fetch_assoc())
		array_push($d, $row);
}


die(json_encode($d));


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





