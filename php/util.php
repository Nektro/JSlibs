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

function isIA($index, $path) {
  global $super;
  return explode('/', $super['server']['REQUEST_URI'])[$index] == $path ? 'active' : '';
}
function getIA($index) {
  global $super;
  return explode('/', $super['server']['REQUEST_URI'])[$index];
}
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
function printJson($array) {
  echo json_encode($array);
}
