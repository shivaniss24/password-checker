var input = document.querySelector('#input');
var btn=document.querySelector('#btn');
var output=document.querySelector('#output');
function checkPassword()
{
    var userInput=input.value;
    if(userInput.length<10)
    {
        // console.log("error");
        output.innerText="error";
        input.style.color='red';
    }
    else{
        // console.log("success");
        output.innerText="success";
        input.style.color="green";
    }

}

btn.addEventListener("click",checkPassword);