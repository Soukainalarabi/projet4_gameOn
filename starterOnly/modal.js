// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let form = document.querySelector("form")
let modalBody = document.querySelector(".modal-body")
let closeModal = document.querySelector(".close")
let confirmMsgElement = document.getElementById("confirmation");
let prenom = document.getElementById("first")
let erreurPrenom = document.getElementById("firstNameErrorMsg")
let nom = document.getElementById("last")
let erreurNom = document.getElementById("lastNameErrorMsg")
let email = document.getElementById("email")
let erreurEmail = document.getElementById("emailErrorMsg")
let date = document.getElementById("birthdate")
let erreurDate = document.getElementById("birthdateErrorMsg")
let nbTournois = document.getElementById("quantity")
let erreurNbTournois = document.getElementById("nbTournoisErrorMsg")
let selectedLocation = null;
let locations = document.querySelectorAll('input[name="location"]')
let erreurLocation = document.getElementById("tournoisErrorMsg")
let conditionGenerale = document.getElementById("checkbox1")
let conditionError = document.getElementById("conditionErrorMsg")
//responsive menu burger
function editNav() {
  const x = document.getElementById("myTopnav");
  const y = document.querySelector(".main-navbar")
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
//tournois radio event
locations.forEach(e => e.addEventListener("click", (e) => {
  selectedLocation = e.target.value

}))

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  form.style.display = "block";
  confirmMsgElement.style.display = "none";
  modalbg.style.display = "block";
}
//close Modal avec le bouton fermer
function closeeModal() {
  modalbg.style.display = "none";
}
//close Modal icon
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
})
//V??rification Pr??nom
const prenomInvalide = () => {//retourne un boolean
  let regexPrenom = /^[a-z]{2}/gi
  if (!prenom.value) {//prenom est vide 
    erreurPrenom.textContent = "Veuillez saisir votre pr??nom"
    return false;
  }
  if (prenom.value.match(regexPrenom)) { //v??rifier si le regex est pri en charge a l'aide de la methode match()
    erreurPrenom.textContent = ""
    return true
  }
  else {
    erreurPrenom.textContent = "Le pr??nom doit contenir minimum 2 caract??res"
    return false
  }
}
//V??rification Nom
const nomInvalide = () => {//retourne un boolean
  let regexNom = /^[a-z]{2}/gi
  if (!nom.value) {//nom est vide 
    erreurNom.textContent = "Veuillez saisir votre nom"
    return false
  }
  if (nom.value.match(regexNom)) {//v??rifier si le regex est pri en charge a l'aide de la methode match()
    erreurNom.textContent = ""
    return true
  }
  else {
    erreurNom.textContent = "Le nom doit contenir minimum 2 caract??res "
    return false
  }
}
//V??rification Email
const emailInvalide = () => {//retourne un boolean
  let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.value) {//email est vide 
    erreurEmail.textContent = "Veuillez saisir votre email"
    return false
  }
  if (email.value.match(regexEmail)) {//v??rifier si le regex est pri en charge a l'aide de la methode match()
    erreurEmail.textContent = ""
    return true
  }
  else {
    erreurEmail.textContent = "L'adresse ??lectronique est invalide "
    return false
  }
}
//Soustraire 10 ans de la date actuelle
function subtractYears(date, years) {
  date.setFullYear(date.getFullYear() - years); // setFullYear() : d??finit l'ann??e compl??te pour une date, d'apr??s l'heure locale
  return date;
}
//verification Birthdate
const birthDateInvalid = () => { //retourne un boolean
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
//V??rification tournois number
const tournoiNbInvalide = () => {//retourne un boolean
  let regexNbTournois = /^[0-9]{1}/
  if (!nbTournois.value) { //nbTournois est vide
    erreurNbTournois.textContent = "Veuillez saisir ?? combien de tournois vous avez particip??"
    return false
  }
  if (nbTournois.value.match(regexNbTournois)) { //v??rifier si le regex est pri en charge a l'aide de la methode match()

    erreurNbTournois.textContent = ""
    return true
  }
  else {
    erreurNbTournois.textContent = "Ce champs doit contenir une valeur num??rique"
    return false
  }
}
//V??rification tournois radio
const tournoiInvalide = () => {//retourne un boolean
  let radioSelectionne = false;
  if (selectedLocation) {
    radioSelectionne = true;
    erreurLocation.textContent = ""
  } else {
    erreurLocation.textContent = "Veuillez s??l??ctionner un pays"
    radioSelectionne = false;
  }
  return radioSelectionne;
}
//V??rification condition g??n??rale
const condition = () => { //retourne un boolean
  if (conditionGenerale.checked) {
    conditionError.textContent = ""
    return true
  } else {
    conditionError.textContent = "Vous devez v??rifier que vous acceptez les termes et conditions."
    return false
  }
}

//la modale de confirmation de l'inscription
function showConfirmMessageOK() {
  form.style.display = "none";
  confirmMsgElement.style.display = "block";
}
//event form
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
    showConfirmMessageOK()
    let formValue = {
      prenom: prenom.value,
      nom: nom.value,
      email: email.value,
      birthdate: date.value,
      quantity: nbTournois.value,
      selectedLocation: selectedLocation,
    }
    console.log(formValue);
    document.forms['reserve'].reset(); //le contenue du formulaire sera initialis??
    selectedLocation = null; //reinitialiser la location pour les prochains formulaires

  }

})

