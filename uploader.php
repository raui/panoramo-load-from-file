<?php
   $uploaddir = "ftoload/";
   if (isset($_FILES["ufile"])) {
   if(is_uploaded_file($_FILES["ufile"]["tmp_name"]))
    {	  
      move_uploaded_file($_FILES["ufile"]["tmp_name"], $uploaddir . $_FILES["ufile"]["name"]);	 
    } else {
      echo("error");
    }
   }
?>
