// Toggle show/hide password
document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "👁️" : "🙈";
  });
  
  // Optional: form submit handling
  document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎉 Signup successful! (not really, it's just a demo 😉)");
  });
  