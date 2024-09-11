function sendMail(){
  var params= {
  FirstName:document.getElementById("name").value,
  email:document.getElementById("email").value,
  password:document.getElementById("password").value,
  };
  const serviceID ="service_iysezge"
  const templateID ="template_wvldnae"
 email.js(serviceID,templateID,params)
.then(
  res =>{
    document.getElementById("name").value ="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    alert("Your registration is validated.")

    }) 
    .catch((err)=>console.log(err));
}
