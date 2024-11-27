//      Email Onchange function
const email = document.getElementById("email")
const emailerror = document.getElementById("emailError")

email.addEventListener("input", function emailValid() {
  const emailValue = email.value;

  if(emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
    emailerror.textContent = '';
  }
  else
  {
    emailerror.textContent = 'Make sure email is more than 3 characters and has @ and a .'
  }
})


//       Password onchange function
const password = document.getElementById("password")
const passworderror = document.getElementById("passwordError")
const passwordsuccess = document.getElementById("passwordSuccess")

password.addEventListener("input", function passwordValid() {
  const passwordValue = password.value

  if(passwordValue.length >= 8)
  {
    passworderror.textContent = ""
    passwordsuccess.style.display = "block"
  }
  else
  {
    passworderror.textContent = "Make sure password is more than 8 characters."
    passwordsuccess.style.display = "none"
  }
})


//   Confirmation window / Submit
const submit = document.getElementById("btn")

submit.addEventListener("click", () => {
  const Validemail = emailValid
  const Validpassword = passwordValid
  if(Validemail && Validpassword)
  {
    const confirm = window.confirm("Confirm to submit.")
    if(confirm)
    {
      alert("Successful Signup!")
    }
    else
    {
      
    }
  }
})
