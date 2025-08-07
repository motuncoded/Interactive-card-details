"use strict";

const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const expiryMonth = document.getElementById("expiry__month");
const expiryYear = document.getElementById("expiry__year");
const cvc = document.getElementById("cvc");
const cardDetailsNumber = document.querySelector(".details__number");
const cardDetailsName = document.querySelector(".details__name");
const cardExpiryMonth = document.querySelector(".details__expiry--month");
const cardExpiryYear = document.querySelector(".details__expiry--year");
const backCardCvc = document.querySelector(".back__number");
const errorName = document.querySelector(".error__name");
const errorNameShort = document.querySelector(".error__name-short");
const errorNumber = document.querySelector(".error__number");
const errorNumberIncomplete = document.querySelector(".error__num");
const errorMonth = document.querySelector(".error__month");
const errorYear = document.querySelector(".error__year");
const errorCvc = document.querySelector(".error__cvc");
const errorCvcNum = document.querySelector(".error__cvc-num");
const form = document.querySelector(".form");
const formBox = document.querySelector(".form__box");
const success = document.querySelector(".success");
const continueBtn = document.querySelector(".continue");
const detailsNumber = cardDetailsNumber.textContent;
const detailsName = cardDetailsName.textContent;
const monthContent = cardExpiryMonth.textContent;
const YearContent = cardExpiryYear.textContent;
const cvcContent = backCardCvc.textContent;

// THIS IS FOR THE CARD NAME
cardName.addEventListener("input", function (e) {
  if (cardName.value === "") {
    cardDetailsName.textContent = detailsName;
  } else {
    cardDetailsName.textContent = cardName.value;
  }
});

// THIS IS FOR THE CARD NUMBER
cardNumber.addEventListener("input", function () {
  if (cardNumber.value === "") {
    cardDetailsNumber.textContent = detailsNumber;
  } else {
    // errorMessage.style.display = "none";
    const num = `${cardNumber.value.slice(0, 4)} ${cardNumber.value.slice(
      4,
      8,
    )} ${cardNumber.value.slice(8, 12)} ${cardNumber.value.slice(12, 16)}`;
    cardDetailsNumber.textContent = num;
  }

  // if (isNaN(cardNumber.value)) {
  //   errorMessage.style.display = "block";
  //   cardNumber.innerText = "";
  // } else {
  //   errorMessage.style.display = "none";

  // }
});

// THIS IS FOR THE CARD EXPIRY MONTH
expiryMonth.addEventListener("input", function () {
  if (expiryMonth.value === "") {
    cardExpiryMonth.textContent = monthContent;
  } else {
    cardExpiryMonth.textContent = expiryMonth.value;
  }
});

// THIS IS FOR THE CARD EXPIRY YEAR
expiryYear.addEventListener("input", function () {
  if (expiryYear.value === "") {
    cardExpiryYear.textContent = YearContent;
  } else {
    cardExpiryYear.textContent = expiryYear.value;
  }
});

// THIS IS FOR THE CARD CVC
cvc.addEventListener("input", function () {
  if (cvc.value === "") {
    backCardCvc.textContent = cvcContent;
  } else {
    backCardCvc.textContent = cvc.value;
  }
});

// THIS IS FOR THE CARD VALIDATION

function validateForm(e) {
  const nameCard = cardName.value.trim();
  if (!/^[a-zA-z\s]*$/.test(nameCard) || nameCard === "") {
    errorName.style.display = "block";
    cardName.style.border = "1px solid #ff5252";
    return false;
  } else if (nameCard.length < 7) {
    errorName.style.display = "none";
    errorNameShort.style.display = "block";
    cardName.style.border = "1px solid #ff5252";
    return false;
  } else {
    // CHANGING THE STYLES BACK TO NORMAL
    errorName.style.display = "none";
    errorNameShort.style.display = "none";
    cardName.style.border = "1px solid #0000003b";
  }

  // VALIDATNG THE NUMBERS TO CONTAIN ONLY NUMBERS
  const numberCard = cardNumber.value.trim();
  if (!/^\d+$/.test(numberCard)) {
    errorNumber.style.display = "block";
    cardNumber.style.border = "1px solid #ff5252";
    return false;
  } else if (numberCard.length !== 16) {
    errorNumber.style.display = "none";
    errorNumberIncomplete.style.display = "block";
    cardNumber.style.border = "1px solid #ff5252";
    return false;
  } else {
    // CHANGING THE STYLES BACK TO NORMAL
    errorNumber.style.display = "none";
    errorNumberIncomplete.style.display = "none";
    cardNumber.style.border = "1px solid #0000003b";
  }

  //

  // VALIDATNG THE YEAR TO CONTAIN ONLY NUMBERS
  const monthExpiry = Number(expiryMonth.value.trim());
  const yearExpiry = Number(expiryYear.value.trim());

  if (!/^\d+$/.test(monthExpiry) || !/^\d+$/.test(yearExpiry)) {
    errorMonth.style.display = "block";
    errorYear.style.display = "block";
    expiryMonth.style.border = "1px solid #ff5252";
    expiryYear.style.border = "1px solid #ff5252";
    console.log(monthExpiry > 45);
    return false;
  } else if (monthExpiry < 1 || monthExpiry > 12) {
    errorYear.style.display = "none";
    errorMonth.style.display = "block";
    expiryMonth.style.border = "1px solid #ff5252";
    expiryYear.style.border = "1px solid #14141456";
    return false;
  } else if (yearExpiry < 23 || yearExpiry > 28) {
    errorMonth.style.display = "none";
    errorYear.style.display = "block";
    expiryMonth.style.border = "1px solid #14141456";
    expiryYear.style.border = "1px solid #ff5252";
    return false;
  } else {
    // CHANGING THE STYLES BACK TO NORMAL
    errorMonth.style.display = "none";
    errorYear.style.display = "none";
    expiryMonth.style.border = "1px solid #0000003b";
    expiryYear.style.border = "1px solid #0000003b";
  }

  // VALIDATNG THE cvc TO CONTAIN ONLY NUMBERS
  const cvcNumber = cvc.value.trim();

  if (!/^\d+$/.test(cvcNumber)) {
    errorCvc.style.display = "block";
    cvc.style.border = "1px solid #ff5252";

    return false;
  } else if (cvcNumber.length !== 3) {
    errorCvc.style.display = "none";
    errorCvcNum.style.display = "block";
    return false;
  } else {
    // CHANGING THE STYLES BACK TO NORMAL
    errorCvc.style.display = "none";
    errorCvcNum.style.display = "none";

    cvc.style.border = "1px solid #0000003b";
  }

  //

  // IF ALL FIELDS ARE VALID
  formBox.style.display = "none";
  success.style.display = "flex";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

continueBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
