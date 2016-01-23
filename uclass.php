<?php
 class Myurlparse{
  function urlbase($url){
  $urlbase =  parse_url(trim($url));
  $host = $urlbase[host];
  return $host;
  }
 }
?>
