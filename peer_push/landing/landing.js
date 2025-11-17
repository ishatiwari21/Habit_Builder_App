const streakInput = document.getElementById('playerStreak');
const errorMsg = document.getElementById('errorMsg');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (event) {
  const streakValue = parseInt(streakInput.value);
  if (streakValue > 30) {
    errorMsg.style.display = 'block';
    event.preventDefault(); 
  } else {
    errorMsg.style.display = 'none';
  }
});
