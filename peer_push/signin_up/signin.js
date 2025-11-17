document.getElementById("backBtn").addEventListener("click", function(e) {
  e.preventDefault();
  history.back();
});

document.getElementById("signinForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.querySelector('input[placeholder="Username or email"]').value;
  const password = document.getElementById("password").value;

  const res = await fetch('/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (res.ok) {
    window.location.href = "/landing/landing.html";
  } else {
    const data = await res.json();
    alert(data.message);
  }
});

//http://localhost:3000/signin_up/signup.html