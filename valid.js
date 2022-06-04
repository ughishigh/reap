function validate(){
  let x=document.forms["myform"]["fname"].value
  let y=document.forms["myform"]["email"].value;
  let z=document.forms["myform"]["phone"].value;

  if(x==""){
    alert("enter the name");
    return false;

  }
  if(y==""){
    alert("enter valid @adress");
    return false;
  }
  if(z==""){
    alert("enter the corrct no.");
    return false;
  }
}
