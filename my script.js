
function validate(){
    
     fname=document.getElementById("fname").value;
     lname=document.getElementById("lname").value;
     password=document.getElementById("password").value;
     email=document.getElementById("email").value;
     Adrress=document.getElementById("Adrress").value;
     phone=document.getElementById("phone").value;
    count=0;
     first=password.substr(0,1);
    if(fname.length <3){
      alert(" frist name should be more than 3 letters");
      return false;
  }
  else{count++ ;}
if(lname.length <3 ){
      alert("last name should be more 3 letters");
    return false;
  }
  else {count ++;}

  if(!(first.match(/[A-Z]/)))
    {
      alert("first letter of password should be capital");
     return false;
    }
  
  
    else if(password.indexOf(' ')>=0)
    {
      alert("password shouldnt contain spaces");
     return false;
    }
   
   else if(password.search(/[0-9]/)==-1)
    {
      alert("password should contain numbers");
      return false;
    }
   
   else if(password.search(/[a-z]/)==-1)
    {
      alert("password should contain lowecase chars");
     return false;
    }
    
   else if(password.search(/[$&+,:;=?@#|'<>.^*()%!-]/)==-1)
    {
    alert("password should contain special chars");
    return false;
    }
   else if(password.length !=8){
      alert(" password should be 8 parts");
      return false;}
   else {count ++;}

    if(email.indexOf('@')<0)
    {
      alert("email should contain @");
      return false;
    }
  else {count ++;}

  if(Adrress == ""){
		alert('Adrress is required !');
		check= false;
	}
    else {count ++ ;}

r = /01+[0-9]{9}/;
if(!(r.test(phone))){
  alert("phone number should be 01 and 9 nums");
return false;
}
else {count ++;}

if (count==6){
  alert("thanks for you");
  return true;
}

  }