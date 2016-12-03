document.addEventListener("DOMContentLoaded", (event) => {
  let signUpButton = document.querySelector("#sign_up");
  let signInButton = document.querySelector("#sign_in");

  signInButton.addEventListener("click", (e) => {
    window.location = "/sign-in";
  });

  signUpButton.addEventListener("click", (e) => {
    window.location = "/user/new";
  });
});
