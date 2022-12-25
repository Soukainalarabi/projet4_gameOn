function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    x.style.flexDirection = "column"
    x.style.alignItems = "stretch"

  } else {
    x.className = "topnav";
    x.style.flexDirection = "row"
    x.style.alignItems = "center"


  }
}

// DOM Elements
let body = document.querySelector("body")
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let form = document.querySelector("form")
let modalBody = document.querySelector(".modal-body")
let closeModal = document.querySelector(".close")
let confirmMsgElement = document.getElementById("confirmation");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  form.style.display = "block";
  let confirmMsgElement = document.getElementById("confirmation");
  confirmMsgElement.style.display = "none";
  modalbg.style.display = "block";

}
//close Modal 
function closeeModal() {
  modalbg.style.display = "none";
}
// body.addEventListener("click", () => {
//   closeeModal()
// })
//close Modal event
closeModal.addEventListener("click", () => {
  let erreurPrenom = document.getElementById("firstNameErrorMsg")
  modalbg.style.display = "none";
})

//Vérification Prénom
const prenomInvalide = () => {
  let prenom = document.getElementById("first")
  let erreurPrenom = document.getElementById("firstNameErrorMsg")
  let regexPrenom = /^[a-z]{2}/gi
  if (!prenom.value) {
    erreurPrenom.textContent = "Veuillez saisir votre prénom"
    return false;
  }
  if (prenom.value.match(regexPrenom)) {
    erreurPrenom.textContent = ""
    return true
  }
  else {
    erreurPrenom.textContent = "Le prénom doit contenir minimum 2 caractères"
    return false
  }
}
//Vérification Nom
const nomInvalide = () => {
  let nom = document.getElementById("last")
  let erreurNom = document.getElementById("lastNameErrorMsg")
  let regexNom = /^[a-z]{2}/gi
  if (!nom.value) {
    erreurNom.textContent = "Veuillez saisir votre nom"
    return false

  }
  if (nom.value.match(regexNom)) {
    erreurNom.textContent = ""
    return true
  }
  else {
    erreurNom.textContent = "Le nom doit contenir minimum 2 caractères "
    return false

  }
}
//Vérification Email
const emailInvalide = () => {
  let email = document.getElementById("email")
  let erreurEmail = document.getElementById("emailErrorMsg")
  let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value) {
    erreurEmail.textContent = "Veuillez saisir votre email"
    return false
  }
  if (email.value.match(regexEmail)) {
    erreurEmail.textContent = ""
    return true
  }
  else {
    erreurEmail.textContent = "L'adresse électronique est invalide "
    return false

  }
}
//

//Soustraire 10 ans de la date actuelle
function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}

//verification Birthdate
const birthDateInvalid = () => {
  let date = document.getElementById("birthdate")


  let erreurDate = document.getElementById("birthdateErrorMsg")
  let birthDayDate = date.value ? new Date(date.value) : null;
  let tenYBeforeNown = subtractYears(new Date(), 10);

  if (birthDayDate && tenYBeforeNown >= birthDayDate) {
    erreurDate.textContent = ""
    return true
  } else {
    erreurDate.textContent = "Vous devez entrer votre date de naissance"
    return false

  }
}
//Vérification tournois number
const tournoiNbInvalide = () => {
  let nbTournois = document.getElementById("quantity")
  let erreurNbTournois = document.getElementById("nbTournoisErrorMsg")
  let regexNbTournois = /^[0-9]{1}/

  if (!nbTournois.value) {
    erreurNbTournois.textContent = "Veuillez saisir à combien de tournois vous avez participé"
    return false
  }
  if (nbTournois.value.match(regexNbTournois)) {

    erreurNbTournois.textContent = ""
    return true
  }
  else {
    erreurNbTournois.textContent = "Ce champs doit contenir une valeur numérique"
    return false

  }
}
//Vérification tournois radio
const tournoiInvalide = () => {
  let location = document.querySelector('input[name="location"]:checked')
  let erreurLocation = document.getElementById("tournoisErrorMsg")
  let radioSelectionne = false;

  if (location) {
    radioSelectionne = true;
    erreurLocation.textContent = ""
  } if (!radioSelectionne) {
    erreurLocation.textContent = "Veuillez séléctionner un pays"
    radioSelectionne = false;

  }
  return radioSelectionne;

}
const condition = () => {
  let conditionGenerale = document.getElementById("checkbox1")
  let conditionError = document.getElementById("conditionErrorMsg")
  if (conditionGenerale.checked) {
    conditionError.textContent = ""
    return true

  } else {
    conditionError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions."
    return false

  }
}

function showConfirmMessageOK() {
  form.style.display = "none";
  confirmMsgElement.style.display = "block";
}
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let isPrenomValid = prenomInvalide()
  let isNomValid = nomInvalide()
  let isEmailValid = emailInvalide()
  let isBirthDateValid = birthDateInvalid()
  let isTournoiNbValid = tournoiNbInvalide()
  let isTournoiValid = tournoiInvalide()
  let isConditionValid = condition()
  if (isPrenomValid && isNomValid && isEmailValid && isBirthDateValid && isTournoiNbValid && isTournoiValid && isConditionValid) {
    showConfirmMessageOK(e)

    let formValue = {
      prenom: first.value,
      nom: last.value,
      email: email.value,
      birthdate: birthdate.value,
      quantity: quantity.value,
      location: document.querySelector('input[name="location"]:checked').value,

    }


    console.log(formValue);



  }

})
document.forms['reserve'].reset(); //le contenue du formulaire sera initialisé
launchModal()



