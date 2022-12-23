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
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let form = document.querySelector("form")
let modalBody = document.querySelector(".modal-body")
let closeModal = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  document.forms['reserve'].reset();
  form.style.display = "block";
  let confirmMsgElement = document.getElementById("confirmation");
  confirmMsgElement.style.display = "none";
  modalbg.style.display = "block";

}
function closeeModal() {
  modalbg.style.display = "none";
}
//close Modal
closeModal.addEventListener("click", () => {
  let erreurPrenom = document.getElementById("firstNameErrorMsg")
  // erreurPrenom.style.display = "none"
  // let erreurNom = document.getElementById("lastNameErrorMsg")
  // erreurNom.style.display = "none"
  // let erreuremail = document.getElementById("emailErrorMsg")
  // erreuremail.style.display = "none"
  modalbg.style.display = "none";
})
//Vérification prenom
const prenomInvalide = (e) => {
  let prenom = document.getElementById("first")
  let erreurPrenom = document.getElementById("firstNameErrorMsg")
  let regexPrenom = /^[a-z]{2}/gi
  if (!prenom.value) {
    e.preventDefault()
    erreurPrenom.innerHTML = "<font color='red'>Veuillez saisir votre prénom</font>"
    return false;
  }
  if (prenom.value.match(regexPrenom)) {
    erreurPrenom.innerHTML = ""
    return true
  }
  else {
    e.preventDefault()
    erreurPrenom.innerHTML = "<font color='red'>Le prénom doit contenir minimum 2 caractères </font>"
    return false
  }
}
//Vérification nom
const nomInvalide = (e) => {
  let nom = document.getElementById("last")
  let erreurNom = document.getElementById("lastNameErrorMsg")
  let regexNom = /^[a-z]{2}/gi
  if (!nom.value) {
    e.preventDefault()
    erreurNom.innerHTML = "<font color='red'>Veuillez saisir votre nom</font>"
    return false

  }
  if (nom.value.match(regexNom)) {
    erreurNom.innerHTML = ""
    return true
  }
  else {
    e.preventDefault()
    erreurNom.innerHTML = "<font color='red'>Le nom doit contenir minimum 2 caractères </font>"
    return false

  }
}
//Vérification email
const emailInvalide = (e) => {
  let email = document.getElementById("email")
  let erreurEmail = document.getElementById("emailErrorMsg")
  let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value) {
    e.preventDefault()
    erreurEmail.innerHTML = "<font color='red'>Veuillez saisir votre email</font>"
    return false
  }
  if (email.value.match(regexEmail)) {
    erreurEmail.innerHTML = ""
    return true
  }
  else {
    e.preventDefault()
    erreurEmail.innerHTML = "<font color='red'>L'adresse électronique est invalide </font>"
    return false

  }
}
//verification birthdate
const birthDateInvalid = (e) => {
  let date = document.getElementById("birthdate")
  let erreurDate = document.getElementById("birthdateErrorMsg")
  if (date.value) {
    erreurDate.innerHTML = ""
    return true
  } else {
    e.preventDefault()
    erreurDate.innerHTML = "<font color='red'>Vous devez entrer votre date de naissance</font>"
    return false

  }
}
//Vérification tournois number
const tournoiNbInvalide = (e) => {
  let nbTournois = document.getElementById("quantity")
  let erreurNbTournois = document.getElementById("nbTournoisErrorMsg")
  let regexNbTournois = /^[0-9]{1}/

  if (!nbTournois.value) {
    e.preventDefault()
    erreurNbTournois.innerHTML = "<font color='red'>Veuillez saisir à combien de tournois vous avez participé</font>"
    return false
  }
  if (nbTournois.value.match(regexNbTournois)) {

    erreurNbTournois.innerHTML = ""
    return true
  }
  else {
    e.preventDefault()
    erreurNbTournois.innerHTML = "<font color='red'>ce champs doit contenir une valeur numérique </font>"
    return false

  }
}
//Vérification tournois radios
//Vérification tournois radios
const tournoiInvalide = (e) => {
  let tournois = document.querySelectorAll('input[type="radio"]')
  let erreurTournois = document.getElementById("tournoisErrorMsg")
  let radioSelectionne = false;

  tournois.forEach((tournoi) => {
    if (tournoi.checked) {
      radioSelectionne = true;
      erreurTournois.innerHTML = ""
    } if (!radioSelectionne) {
      e.preventDefault()
      erreurTournois.innerHTML = "<font color='red'>Veuillez séléctionner un pays</font>"
      radioSelectionne = false;

    }
  })
  return radioSelectionne;

}
const condition = (e) => {
  let conditionGenerale = document.getElementById("checkbox1")
  let conditionError = document.getElementById("conditionErrorMsg")
  if (conditionGenerale.checked) {
    conditionError.innerHTML = ""
    return true

  } else {
    e.preventDefault()
    conditionError.innerHTML = "<font color='red'>Vous devez vérifier que vous acceptez les termes et conditions.</font>"
    return false

  }
}
function showConfirmMessageOK() {
  form.style.display = "none";
  let confirmMsgElement = document.getElementById("confirmation");
  confirmMsgElement.style.display = "block";
}
form.addEventListener('submit', (e) => {

  let isPrenomValid = prenomInvalide(e)
  let isNomValid = nomInvalide(e)
  let isEmailValid = emailInvalide(e)
  let isBirthDateValid = birthDateInvalid(e)
  let isTournoiNbValid = tournoiNbInvalide(e)
  let isTournoiValid = tournoiInvalide(e)
  let isConditionValid = condition(e)
  if (isPrenomValid && isNomValid && isEmailValid && isBirthDateValid && isTournoiNbValid && isTournoiValid && isConditionValid) {
    //closeeModal(e)
    showConfirmMessageOK(e)



  }

})
launchModal()



