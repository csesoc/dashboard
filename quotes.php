<?php

$quotes = array
  (
  array("Where does butt come from?","Davina Adisusila"),
  array("But our random was clever","Vincent Tran"),
  array("My internet is late","Vincent Wong"),
  array("But you'll get diabilities","Lucas Pickup"),
  array("Don't have babies here","Mrinal Chakravarthy"),  
  array("We can go as snoopy-doo","Vincent Wong"),
  array("I have a vagina","Pierre Estephan"),
  array("I couldn't get clitoris","Michael Nam Lee"),
  array("Rub my shaft","Nicola Gibson"),
  array("I do love the cock","Pierre Estaphan")
);

$randomm = rand(0, count($quotes)-1);
echo '{"quote": "' . $quotes[$randomm][0] . '" , "person": "' .  $quotes[$randomm][1]. '"}';

?>
