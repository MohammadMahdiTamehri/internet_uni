const submit = document.getElementById("submit");
const success = document.getElementById("success");

function validateInput(input, regex) {
  const name = input.name;
  const message = document.getElementById(name + "Message");
  const value = input.value.trim();
  if (regex.test(value)) {
    input.setCustomValidity("");
    message.textContent = "";
    submit.disabled = false;
  } else {
    input.setCustomValidity("Invalid " + name);
    if (name == "password") {
      message.textContent =
        "At least 8 characters long.Contains at least one uppercase letter.Contains at least one lowercase letter.Contains at least one number." +
        name;
    } else {
      message.textContent = "Invalid " + name;
    }
    message.style = "color: red;";
    submit.disabled = true;
  }
}
function validatePassword(repeatPasswordInput) {
  const password = document.getElementById("input3").value;
  const repeatPassword = repeatPasswordInput.value;
  const message = document.getElementById("repeatPasswordMessage");

  if (password !== repeatPassword) {
    repeatPasswordInput.setCustomValidity("");
    message.textContent = "Passwords are not matches";
    message.style = "color: red;";
    submit.disabled = true;
  } else {
    repeatPasswordInput.setCustomValidity("");
    message.textContent = "";
    submit.disabled = false;
  }
}

function submitForm(event) {
  event.preventDefault();
  success.style.display = "block";
  setTimeout(() => {
    success.style.display = "none";
    for (let i = 0; i <= 4; i++) {
      const input = document.getElementById("input" + i);
      input.value = "";
    }
    submit.disabled = true;
  }, 3000);
}
