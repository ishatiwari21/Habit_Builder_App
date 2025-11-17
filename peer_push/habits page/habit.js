const buttons = document.querySelectorAll('.btn.select');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const habit = e.target.parentElement.querySelector('h3').textContent;
    localStorage.setItem('selectedHabit', habit);
    window.location.href = 'daily-tasks.html';
  });
});
