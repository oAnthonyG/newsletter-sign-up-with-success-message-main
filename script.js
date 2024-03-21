function changeImage() {

  if (window.innerWidth > 768) {
    document.getElementById('container_card_img').src = "./assets/images/illustration-sign-up-desktop.svg";
  } else {
    document.getElementById('container_card_img').src = "./assets/images/illustration-sign-up-mobile.svg";
  }
}
window.onload = changeImage;
window.addEventListener('resize', changeImage);

const form = document.querySelector('form');
statusInput = form.querySelector('.form_email input');
statusTXT = form.querySelector('.form_email span');

const cssProprieties = `
  color: var(--tomato);
  border: 1px solid var(--tomato);
  background-color: rgba(255, 57, 55, 0.1);
`

form.onsubmit = (e) => {
  e.preventDefault();
  statusTXT.style.display = "block";

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "validate.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      console.log(response);
      if (response.indexOf("Valid email required!") != -1) {
        statusInput.classList.toggle('error');
        statusInput.style.cssText = cssProprieties;
      }else {
        window.location.href = "confirm.html";
      }
      statusTXT.innerText = response;

    }

  }
  let formData = new FormData(form);
  xhr.send(formData);

}


