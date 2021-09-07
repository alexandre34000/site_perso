
const modalbg = document.querySelector("#container-main__formulaire");
const modalBtnClose = document.querySelectorAll(".close");
const submitBtn = document.querySelector("#submit");
const modalBody = document.querySelector(".modal-body");
const msgBox = document.querySelector("#container-msg");
const spinner = document.querySelector("#container-spinner");

// close modal event
modalBtnClose.forEach((btnClose) => btnClose.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

async function sendFormData() {
  spinner.style.display = "initial";
//  modalBody.style.visibility = "hidden";
  let textResponse;
  let response = await simulResponseServeur();
  if(response){
    modalBody.style.visibility = "hidden";
    spinner.style.display ="none";
    textResponse = (response == "200" ? " Thanks you for submitting your registration details" : " We have a probleme Houston !! please try again !");
  }
  document.getElementById("content-msg__serveur").textContent = textResponse;
  msgBox.style.display = "block";
}

const simulResponseServeur = () => {
  return new Promise(resolve => {
    setTimeout(() => { resolve("200"); }, 2000);
  });
}

function validate() {
  const errorObject = toCheckErrors();
  if (Object.keys(errorObject).length != 0) {
    submitBtn.disabled = true;
    Object.entries(errorObject).forEach(([key, value]) => {
      displayErrorMessage(key, value);
      toAddListener(key, value);
    });
  }
  else {
    sendFormData();
  }
  return false;
}

const displayErrorMessage = (key, value) => {
  let currentDiv = document.getElementById(key).parentElement;
  currentDiv.setAttribute('data-error-message', `${value}`);
  currentDiv.setAttribute('data-error', 'true');
}

const checkMsgWarningInDom = () => {
  const error = document.querySelectorAll("div[data-error='true']");
  if (error.length == 0) {
    submitBtn.disabled = false;
  }
}

const toRemoveMsgError = (key) => {
  let parent = document.getElementById(key).parentElement;
  parent.setAttribute('data-error', 'false')
  checkMsgWarningInDom();
}

const toAddListener = (key, value) => {
  let id = document.getElementById(key);
  id.addEventListener("input", function valideConstrainst(e) {
    var errorMsg = valide(id, formConstraints[key]);
    if (errorMsg == "") {
      id.removeEventListener("input", valideConstrainst);
      toRemoveMsgError(key);
    }
  });
}

// Valid inputField with his constraints
const valide = (element, vali) => {
  return vali.map((validator) => validator(element));//.filter((error) => error);
}

// validators return message if entry don't pass the validator
const validators = {
  minLength: (expectedMinLength) => (element) => {
    if (element.value.trim().length < expectedMinLength) {
      return ` ${expectedMinLength} lettres au minimum `;
    }
  },
  email: (element) => {
    var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!reg.test(element.value)) {
      return 'Email non conforme';
    }
  }
}

const formConstraints = {
  first: [validators.minLength(2)],
  last: [validators.minLength(2)],
  email: [validators.email]
}

function toCheckErrors() {
  const formErrors = {
    first: valide(document.getElementById("first"), formConstraints.first),
    last: valide(document.getElementById("last"), formConstraints.last),
    email: valide(document.getElementById("email"), formConstraints.email),
  }
  // Select only the error by filter if message exist
  const removeEmptyValues = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v != ""));
  }
  return removeEmptyValues(formErrors);
}


/* async function simulSendData() {
  await new Promise(r => setTimeout(r, 2000));
  let response = "200";
  return response;
} */