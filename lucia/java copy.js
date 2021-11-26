

//--------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
let bool = false;
function inputA () {
    
    bool = !bool;

    
}
let bool2 = false;
function inputB () {
    
    bool2 = !bool2;

}
let flip = false;
function flipy () {
    flip = !flip;
}

function and ()
{
    if (bool == true && bool2 == true)
    {
        document.getElementById("andgate").src = "and3.JPG"; 
    }
    else if (bool == true && bool2 == false)
    {
        document.getElementById("andgate").src = "and2.JPG";
    }
    else if (bool == false && bool2 == true)
    {
        document.getElementById("andgate").src = "and4.JPG";
    }
    else 
    {
        document.getElementById("andgate").src = "and1.JPG"; 
    }
}
function not ()
{
    if (bool == true && bool2 == true)
    {
        document.getElementById("orgate").src = "not4.JPG"; 
    }
    else if (bool == true && bool2 == false)
    {
        document.getElementById("orgate").src = "not2.JPG";
    }
    else if (bool == false && bool2 == true)
    {
        document.getElementById("orgate").src = "not3.JPG";
    }
    else 
    {
        document.getElementById("orgate").src = "not1.JPG"; 
    }
}
function xor ()
{
    if (bool == true && bool2 == true)
    {
        document.getElementById("xorgate").src = "xor2.JPG"; 
    }
    else if (bool == true && bool2 == false)
    {
        document.getElementById("xorgate").src = "xor3.JPG";
    }
    else if (bool == false && bool2 == true)
    {
        document.getElementById("xorgate").src = "xor4.JPG";
    }
    else 
    {
        document.getElementById("xorgate").src = "xor1.JPG"; 
    }
}
function or ()
{
if ( bool == true)
document.getElementById("notgate").src = "realnot1.JPG";
else
document.getElementById("notgate").src = "realnot2.JPG";
}
function flipflop ()
{
    var flip
    if (bool == true && bool2 == false) 
    document.getElementById("flipgate").src = "flip2.JPG";
    
    else if (bool == false && bool2 == false)
    document.getElementById("flipgate").src = "flip3.JPG";
else if (bool == true && bool2 == true && flip == true)

document.getElementById("flipgate").src = "flip6.JPG";

    else if (bool == true && bool2 == true)
document.getElementById("flipgate").src = "flip4.JPG";
else if (bool == false && bool2 == true)
document.getElementById("flipgate").src = "flip5.JPG";


}






function brother () {
 
    weight = document.getElementById("we").value;
    height = document.getElementById("he").value;
    height = height * height;
    bmiresy = (weight / height) *703;
   
    if (bmiresy < 18)
    document.getElementById("res").innerHTML = 'Underweight';
    else if (bmiresy <= 25)
    document.getElementById("res").innerHTML = 'Normal';
    else if (bmiresy <= 30)
    document.getElementById("res").innerHTML = 'OverWeight';
    else if (bmiresy <= 35)
    document.getElementById("res").innerHTML = 'Obese';
    else 
    document.getElementById("res").innerHTML = 'Extremely Obese';
    bmiresy = bmiresy.toFixed (2)
    document.getElementById("demo").innerHTML = bmiresy;
    
    }


