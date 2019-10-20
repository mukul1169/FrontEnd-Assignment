document.getElementById('logincheck').addEventListener('click',function(){

	var username=document.getElementById('user').value;
	var password=document.getElementById('pwd').value;

	if(username=="" && password=="")
		alert('Invalid Username and Password')
    else if(username=="")
		alert('Invalid Username')
	else if(password=="")
	    alert('Invalid Password')
	else
		alert('Login Successfully')

});

function signupCheck()
{
	var flag=0;
	var name=document.getElementById('name').value;
	var number=document.getElementById('number').value;
	var email=document.getElementById('email').value;
	var x=email.length;
	var username1=document.getElementById('user1').value;
	var pwd1=document.getElementById('pwd1').value;
	var n=pwd1.length;
	var pwd2=document.getElementById('pwd2').value;

	if(name=="" || name==null)
		alert("Name can't be blank")
	else if(email=="")
	{
		for(var i=0;i<x;i++)
		{
			if(email.charAt(i)=='@')
				flag==1;
			else if(email.charAt(i)=='.')
				flag==1;
	    }
	    if(flag==0)
	    	alert("Invalid email address")
	}
	else if(number=="")
		alert("mobile number can't be blank")
	else if(isNaN(number))
		alert("Enter numeric value only in mobile number")
	else if(pwd1=="")
		alert("password can't be blank")
	else if(n<6)
		alert("Password must between 8 to 10 characters")
	else if(pwd2=="")
		alert("Re-enter your password")
	else if(pwd1!=pwd2)
		alert("Password must be same!")
	else if(username1=="")
		alert("username can't be blank")
	else
		alert("Sign Up Successfully")
}