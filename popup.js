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
function togglePopupMoreInfo(content){
	document.getElementById("popup-6").classList.toggle("active");
}


function message(){
	var email = document.getElementById('email');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(email.value === ''){
        
    }
    else{
        setTimeout(() => {
            email.value = '';
        }, 10000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 10000);
}

 var form = document.getElementById('emailform');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("emailform")),
          }).then(
              response => response.json()
          ).then((html) => {
            // you can put any JS code here

          });
        });
		
function SubmitForm()
{
	showResultDiv();
	document.forms['search'].action='https://sheetdb.io/api/v1/2fnor4g03g8cb';
    document.forms['search'].submit();
	
    document.forms['search'].action='mail_handler.php';
    document.forms['search'].submit();
	

    return false;
}