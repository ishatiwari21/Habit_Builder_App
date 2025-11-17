document.getElementById("backBtn").addEventListener("click", function(e) {
  e.preventDefault();
  history.back();
});

document.getElementById("signupForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.querySelector('input[placeholder="Username"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const password = document.getElementById("password").value;

  const res = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });

  if (res.ok) {
    alert("Yay! You are signed up 🎉");
    window.location.href = "signin.html";
  } else {
    const data = await res.json();
    alert(data.message);
  }
});
