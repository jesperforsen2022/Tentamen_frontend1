
function myFunction(inputValue)
{

    let myInput = document.getElementById('myInput').value;

 if(isNaN(myInput))
 {
	document.write(myInput + " är inget nummer");
 }
 else
 {
	document.write(myInput * myInput);
 }

   
}