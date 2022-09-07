let click1 = document.getElementById('1');
let click2 = document.getElementById('2');
let click3 = document.getElementById('3');
let click4 = document.getElementById('4');
let click5 = document.getElementById('5');
let click6 = document.getElementById('6');
let click7 = document.getElementById('7');

function load(){
    if(click1.value.length === 0){
        alert('Please Enter Username')
    }else if(click2.value.length === 0)
    {
        alert('Please Enter Password')
    }else if(click3.value.length === 0)
    {
        alert('Please Enter Confirm Password')

    }else if(click4.value.length === 0)
    {
        alert('Please Enter Age')
    }else if(click5.value.length === 0)
    {
        alert('Please Select Gender')
    }else if(click2.value != click3.value)
    {
        alert('please match the password');
    }else{
        alert("SUCCESSFUL");
    }
}

function login(){
    alert('Welcome To Senseless World')
}







//  if(click6.value!=0 || click6.value!=0)
//     {
//         alert('please tick usertype');
//     }else