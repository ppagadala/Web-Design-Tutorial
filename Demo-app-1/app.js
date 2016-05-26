function formValidation()  
{  
var uid = document.registration.userid;  
var passid = document.registration.passid;  
var uname = document.registration.username;  
var uadd = document.registration.address;  
var ucountry = document.registration.country;  
var uzip = document.registration.zip;  
var uemail = document.registration.email;  
var umsex = document.registration.msex;  
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))  
{  
if(passid_validation(passid,7,12))  
{  
if(allLetter(uname))  
{  
if(alphanumeric(uadd))  
{   
if(countryselect(ucountry))  
{  
if(allnumeric(uzip))  
{  
if(ValidateEmail(uemail))  
{  
if(validsex(umsex,ufsex))  
{  
}  
}   
}  
}   
}  
}  
}  
}  
return false;  
  
} function userid_validation(uid,mx,my)  
{  
var uid_len = uid.value.length;  
var el = document.getElementById('useridValidation');
if (uid_len == 0 || uid_len >= my || uid_len < mx)  
{  
	
	removeClass(el, 'hideTooltipText');
	addClass(el, 'showTooltipText');
	el.innerHTML = "User Id should not be empty / length be between "+mx+" to "+my;
	//alert("User Id should not be empty / length be between "+mx+" to "+my);  
uid.focus();  
return false;  
}  
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText');
return true;  
}  
function passid_validation(passid,mx,my)  
{  
var passid_len = passid.value.length;  
var el = document.getElementById('pwdValidation');
if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
{  
	removeClass(el, 'hideTooltipText');
	addClass(el, 'showTooltipText');
	el.innerHTML = "Password should not be empty / length be between "+mx+" to "+my;
//alert("Password should not be empty / length be between "+mx+" to "+my);  
passid.focus();  
return false;  
}
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText');  
return true;  
}  
function allLetter(uname)  
{   
var letters = /^[A-Za-z]+$/;
var el = document.getElementById('usernameValidation');  
if(uname.value.match(letters))  
{
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText');  
return true;  
}  
else  
{ 
	removeClass(el, 'hideTooltipText');
	addClass(el, 'showTooltipText');
	el.innerHTML = 'Username must have alphabet characters only';
//alert('Username must have alphabet characters only');  
uname.focus();  
return false;  
}  
}  
function alphanumeric(uadd)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
var el = document.getElementById('addressValidation');
if(uadd.value.match(letters))  
{  
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText');
return true;  
}  
else  
{  
	removeClass(el, 'hideTooltipText');
	addClass(el, 'showTooltipText');
	el.innerHTML = 'User address must have alphanumeric characters only';
//alert('User address must have alphanumeric characters only');  
uadd.focus();  
return false;  
}  
}  
function countryselect(ucountry)  
{  
var el = document.getElementById('countryValidation');
if(ucountry.value == "Default")  
{  
	removeClass(el, 'hideTooltipText');
	addClass(el, 'showTooltipText');
	el.innerHTML = 'Select your country from the list';
//alert('Select your country from the list');  
ucountry.focus();  
return false;  
}  
else  
{  
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText');
return true;  
}  
}  
function allnumeric(uzip)  
{   
var numbers = /^[0-9]+$/;  
var el = document.getElementById('zipValidation');
if(uzip.value.match(numbers))  
{  
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText');
return true;  
}  
else  
{  
removeClass(el, 'hideTooltipText');
	addClass(el, 'showTooltipText');
	el.innerHTML = 'ZIP code must have numeric characters only';
//alert('ZIP code must have numeric characters only');  
uzip.focus();  
return false;  
}  
}  
function ValidateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
var el = document.getElementById('emailValidation');
if(uemail.value.match(mailformat))  
{  
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText');
return true;  
}  
else  
{
removeClass(el, 'hideTooltipText');
	addClass(el, 'showTooltipText');
	el.innerHTML = "You have entered an invalid email address!";  
//alert("You have entered an invalid email address!");  
uemail.focus();  
return false;  
}  
} function validsex(umsex,ufsex)  
{  
x=0;  
  var el = document.getElementById('genderValidation');
if(umsex.checked)   
{  
x++; 
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText'); 
} if(ufsex.checked)  
{  
x++;   
removeClass(el, 'showTooltipText');
addClass(el, 'hideTooltipText');
}  
if(x==0)  
{  
removeClass(el, 'hideTooltipText');
	addClass(el, 'showTooltipText');
	el.innerHTML = 'Select Male/Female';  
//alert('Select Male/Female');  
umsex.focus();  
return false;  
}  
else  
{  
alert('Form Succesfully Submitted');  
window.location.reload()  
return true;  
}  
}  
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}