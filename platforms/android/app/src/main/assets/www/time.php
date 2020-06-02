<?php
  if($_POST['formSubmit'] == "Submit")
  {
    $varMovie = $_POST['formMovie'];
  }

  if($errorMessage != "")
  {
    echo("<p>There was an error:</p>\n");
    echo("<ul>" . $errorMessage . "</ul>\n");
  }
  else
  {
    $fs = fopen("data.csv","a");
    fwrite($fs,$varMovie . "\n");
    fclose($fs);

    header("Location: index.html");
    exit;
  }
?>
