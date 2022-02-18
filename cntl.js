"use strict"

var im=new Array(
    ['/Prueba/0.jpg'],['/Prueba/1.jpg'] ,['/Prueba/2.jpg'] ,['/Prueba/3.jpg'] 
);
var i=0;

function change()
{
    i++
    document.getElementById("imagen").src=im[i%im.length][0];
    document.getElementById("link").href=im[i%im.length][1];
}

onload=function()
{
    change();
    setInterval(change,5000);
}