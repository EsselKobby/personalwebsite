
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname, event) {
  for (let tab of tablinks) {
    tab.classList.remove("active-link");
  }
  for (let content of tabcontents) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
 
  sidemenu.classList.add("open");
}

function closemenu() {

  sidemenu.classList.remove("open");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyAOz_qJdKokSI7_p6eEScgIpWqgFmPEGuKdqYre8Aiv8iptA8MgOfahx9UAug2IBF7kg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
