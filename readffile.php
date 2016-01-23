<?php
 require('uclass.php');
 $upr = new Myurlparse;
 if (isset($_GET['fpath'])) { // Мы могли бы использовать $_SERVER['REQUEST_URI'];
 $fpath = $_GET['fpath'];  
 $fpath = htmlspecialchars($fpath, ENT_QUOTES, 'UTF-8'); 
 $fpath = str_replace('\\','/',$fpath);
 $fpath = "ftoload".$fpath;
 if (file_exists($fpath)){
 $fp = fopen($fpath,"r"); 
 header("Content-type:text/xml;   charset=UTF-8");
 print '<limg>'; 
 while (!feof($fp)) { 
  $line = fgets($fp, 4096);         	 
  if (trim($line) != "") print '<curimage   mage="'.trim($line).'" ihost="'.$upr->urlbase($line).'"/>';
  }
 print '</limg>'; 
 fclose($fp);
 unlink($fpath);
 } else {
  print "Файл $fpath не существует";
 }
}
?>
