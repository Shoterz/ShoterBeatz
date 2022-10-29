function togglePopup(content){
	document.getElementById("popup-1").classList.toggle("active");
}
function togglePop(content){
	document.getElementById("popup-2").classList.toggle("active");
}
function togglePopLicense(content){
	document.getElementById("popup-3").classList.toggle("active");
}
function togglePopLicense2(content){
	document.getElementById("popup-4").classList.toggle("active");
}
function togglePopLicense3(content){
	document.getElementById("popup-5").classList.toggle("active");
}
function togglePopMoreInfo(content){
	document.getElementById("popup-6").classList.toggle("active");
}


if(window.scrollTop() > 0){
  document.getElementById('headers').style.position="fixed";
}

function openmenu()
				{
					document.getElementById("side-menu").style.display="block";
					document.getElementById("menu-btn").style.display="none";
					document.getElementById("close-btn").style.display="block";
				}
			function closemenu()
				{
					document.getElementById("side-menu").style.display="none";
					document.getElementById("menu-btn").style.display="block";
					document.getElementById("close-btn").style.display="none";
				}
				
				
				
