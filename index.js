/// toggle menu button javascrpit////////

var click = document.getElementById("click");
function showMenu() {
  click.style.right = "0";
}
function hideMenu() {
  click.style.right = "-200px";
}

//////// request button js///
var button = document.getElementById("btn");
function OpenMenu() {
  document.querySelector(".popup").style.display = "flex";
}
function closeMenu() {
  document.querySelector(".popup").style.display = "none";
}

/******send data through emailjs in email adresss ** */

function Send(){
  var name = document.getElementById('name').value;
  var city = document.getElementById('city').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var body = "Name: " +name + "<br/> Email:" +email + "<br/> City:"+city + "<br/> Phone:"+phone + "<br/> Message:"+ message ;

  console.log(body);

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nehabawankar88@gmail.com",
    Password : "2B9C96666F4F9B4160DB37B416230C071AD8",
    To : 'nehabawankar88@gmail.com',
    From : "nehabawankar88@gmail.com",
    Subject : "Narayana Infra Construction",
    Body : body
}).then(
  message => alert(message)
);
}



























//////////get in touch button clickable////
 /* var send = document.getElementById('send');
send.addEventListener('click', function(e){
  e.preventDefault()
  var name = document.getElementById('name').value;
  var city = document.getElementById('city').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var subject = document.getElementById('subject').value;

  var body = 'name:' +name + '<br/> email: ' + email + '<br/> city:' + city + '<br/> phone:' + phone + '<br/> phone:' + phone + '<br/> message:' + message + '<br/> subject: ' + subject; 

  Email.send({
    Host : "smtp.email.com",
    Username : "nehabawankar88@gmail.com",
    Password : "dwak kmos lrul tcpy",
    To : 'nehabawankar88@gmail.com',
    From : email ,
    Subject : subject,
    Body : body
}).then(
  message => alert(message)
);
})*/




