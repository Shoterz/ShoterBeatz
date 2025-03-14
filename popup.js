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
		 window.open('https://drive.google.com/drive/u/3/folders/1BXvY0zRki7CrbFW2uFx4z_WOlHqme6VX', '_self');
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 10000);
}
function message30(){
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
		 window.open('https://drive.google.com/drive/u/3/folders/1BXvY0zRki7CrbFW2uFx4z_WOlHqme6VX', '_self');
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 10000);
}


function message3()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = document.getElementById('email');
if(email.value.match(mailformat))
{
setTimeout(() => {
            email.value = '';
        }, 2000);

        success.style.display = 'block';
		 window.open('https://drive.google.com/drive/folders/1zeSxRRtkz9s6P8MNd_Z_bCCMmaSw37v0?usp=share_link', '_self');
		 
		 
}
else
{
	danger.style.display = 'block';
}
	setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 2000);
}

function message4()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = document.getElementById('email');
if(email.value.match(mailformat))
{
setTimeout(() => {
            email.value = '';
        }, 2000);

        success.style.display = 'block';		 
		 
}
else
{
	danger.style.display = 'block';
}
	setTimeout(() => {
        danger.style.display = 'none';
    }, 2000);
	
	setTimeout(() => {
        success.style.display = 'none';
    }, 5000);
}

function message1(){
	var email = document.getElementById('email1');

	 window.open('https://drive.google.com/drive/folders/1RGUajNtlB0Ygm1jNl6R8qBfS_yQnf8X6?usp=sharing', '_self');
   
}
function message2(){
	var email = document.getElementById('email2');

	 window.open('https://drive.google.com/drive/folders/1XXu9moBnNApLKXHc6DTdmzTiQbGep02j?usp=sharing', '_self');
   
}
function message3(){
	var email = document.getElementById('email1');

	 window.open('https://drive.google.com/drive/folders/1kVEhyfdrrBa5nLnQC2rcCmSlHYTJcQ9v?usp=drive_link', '_self');
   
}
function messagePBC(){
	var email = document.getElementById('email1');

	 window.open('https://drive.google.com/drive/folders/1CT-6x1FgHFcvO2rr4rhJVTO5JU_ZMbMl?usp=sharing', '_self');
   
}
function messagedaysrodeo(){
	var email = document.getElementById('email1');

	 window.open('https://drive.google.com/drive/folders/1HnN45jY7gKEuFGunpTsyAMoC7Stj0lQu?usp=sharing', '_self');
   
}
function messageplana(){
	var email = document.getElementById('email1');

	 window.open('https://drive.google.com/drive/folders/1SpVIxwWPC-muE0YnPJMfu8hdt6CBQLmk', '_self');
   
}
function messagelovesick(){
	var email = document.getElementById('email1');

	 window.open('https://drive.google.com/drive/folders/1qz8gQTqcl8ekk1dZ7VMLtRLxJvuPVVic?usp=drive_link', '_self');
   
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

function searchProduct() {
    const input = document.getElementById('icon-search').value.toUpperCase();
    console.log(input);
    const cardContainer = document.getElementById('card-list');
    console.log(cardContainer);
    const cards = cardContainer.getElementsByClassName('col-md-3');
    console.log(cards);
    for(let i = 0; i < cards.length; i++){
        let title = cards[i].querySelector(".product-bottom h3.card-title")
        console.log(title);
        if(title.innerText.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}