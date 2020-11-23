<?php


$finalres=0;
$temp=$_POST['temp'];
$opt=$_POST['opt3'];
$result=$_POST['result'];

sel($opt);


    function sel($opt)
    {
        
    if($opt=="+")
    add1();
    else if($opt=="-")
    sub();
    else if($opt=="*")
    mul();
    else if($opt=="/")
    div();
    else if($opt=="=")
    show();
    }

function add1()
{
  global $result,$temp,$finalres;
    $finalres=$result+$temp;
  
}

function sub()
{
    global $result,$temp,$finalres;
    $finalres=$result-$temp;
}

function mul()
{
    global $result,$temp,$finalres;
    $finalres=$result*$temp;
}

function div()
{
    global $result,$temp,$finalres;
    $finalres=$result/$temp;
}
function show()
{
    global $finalres,$result;
   $finalres=$result; 
}
echo $finalres;





?>