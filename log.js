function logcheck()
{
	var x="GokulM2811";
	var y="Gokul@2811";
	if(document.getElementById("username").value==x)
	{
		if(document.getElementById("password").value==y)
		{
			window.open("home.html","_self");
		}
		else
		{
			document.getElementById("tip").innerHTML="INCORRECT PASSWORD";
		}
	}
	else
	{
		document.getElementById("tip").innerHTML="USERID DOESN'T EXIST";
	}
}