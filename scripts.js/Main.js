// Hent HTML-elementene
const emailField = document.getElementById("email-field");
const emailError = document.getElementById("email-error");
const form = document.querySelector("form");

// Regex for å validere e-post
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Funksjon for å validere e-post
function validateEmail() {
  const emailValue = emailField.value.trim();

  if (!emailValue.match(emailRegex)) {
    emailField.classList.add("invalid");
    emailField.classList.remove("valid");
    emailError.textContent = "Valid email required";
    return false;
  }

  emailField.classList.remove("invalid");
  emailField.classList.add("valid");
  emailError.textContent = "";
  return true;
}

// Legg til sanntidsvalidering
emailField.addEventListener("input", validateEmail);

// Håndter innsending av skjema
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateEmail()) {
    // Simuler popup-visning eller annen handling ved suksess
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("userEmail").textContent = emailField.value.trim();
    const emailValue = emailField.value.trim();
    showPopup(emailValue);
  } else {
    emailError.textContent = "Valid email required";
  }
});

function showPopup(email) {
  const popup = document.getElementById("popup");
  const userEmail = document.getElementById("userEmail");

  userEmail.textContent = email;
  userEmail.style.fontWeight = "800";
  userEmail.style.color = "black";
  popup.classList.remove("hidden");
}

const dismissBtn = document.getElementById("dismissPopup");
dismissBtn.addEventListener("click", () => {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
});
