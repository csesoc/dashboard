<?php
echo "{";
foreach(glob('images/'.'*') as $filename){
    echo '"' . basename($filename) . '", ';
}
echo "}";
?>
