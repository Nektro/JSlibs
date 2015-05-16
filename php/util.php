<?php
ob_start();

$super = [
  'get' => filter_input_array(INPUT_GET),
  'post' => filter_input_array(INPUT_POST),
  'cookie' => filter_input_array(INPUT_COOKIE),
  'server' => filter_input_array(INPUT_SERVER)
];

$url_root = "http" . (isset($super['server']['HTTPS']) ? 's' : '') . "://" . $super['server']['HTTP_HOST'];
$url_curr = $url_root . $super['server']['REQUEST_URI'];

/**
 * Is the directory name in the request URL at index $index equal to $path?
 * 
 * Assume the URL 'https://www.nektro.net/books/JosephConrad/HeartOfDarkness/1/'
 * isIA(0, 'books') == true
 * isIA(1, 'nektro') == false
 */
function isIA($index, $path) {
  global $super;
  return explode('/', $super['server']['REQUEST_URI'])[$index] == $path ? 'active' : '';
}

/**
 * Returns the dir name of the request URL of $index.
 * Assume the URL 'https://www.nektro.net/cygnus/drive/'
 * getAI(1) == 'cygnus'
 */
function getAI($index) {
  global $super;
  return explode('/', $super['server']['REQUEST_URI'])[$index];
}

/**
 * Filters input $s so that it is safe to echo, query to a database, etc.
 * Typical Usage: $username = filter($super['post']['username']);
 */
function filter($s) {
  return addslashes(htmlspecialchars($s));
}

function getPvar($var) {
  global $super;
  return filter($super['post'][$var]);
}
function getGvar($var) {
  global $super;
  return filter($super['get'][$var]);
}

/**
 * Send a $_POST array to a server without the need of a form.
 * Usage: send an array() $params to URL $url
 */
function sendPost($url, $params) {
  $options = array(
    'http' => array(
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($params)
    )
  );
  $context = stream_context_create($options);
  return file_get_contents($url, false, $context);
}

/**
 * Echos out $array as a JSON string
 */
function printJson($array) {
  echo json_encode($array);
}
