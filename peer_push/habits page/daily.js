const habit = localStorage.getItem('selectedHabit') || "Coding";
document.getElementById('habitTitle').textContent = `Daily Tasks for ${habit}`;

const taskMap = {
  "Coding": {
    1: "Solve one coding problem",
    2: "Review yesterday’s code",
    3: "Push to GitHub",
    4: "Start a new coding project",
    5: "Complete a coding challenge",
    6: "Write code for a new feature",
    7: "Refactor existing code",
    8: "Learn a new algorithm",
    9: "Practice with data structures",
    10: "Contribute to an open-source project",
    11: "Write tests for your code",
    12: "Attend a coding webinar",
    13: "Code for 3 hours straight",
    14: "Write a blog post about coding",
    15: "Work on a collaborative project",
    16: "Debug an existing piece of code",
    17: "Research a new coding language",
    18: "Create a coding tutorial",
    19: "Learn about system design",
    20: "Work on your personal project",
    21: "Solve a problem from a coding contest",
    22: "Contribute to a GitHub repo",
    23: "Learn a new framework",
    24: "Write clean and optimized code",
    25: "Watch a tech talk on YouTube",
    26: "Create a personal portfolio website",
    27: "Debug a project you are working on",
    28: "Write code for a mobile app",
    29: "Work on your code efficiency",
    30: "Complete a side coding project"
  },
  "Cooking": {
    1: "Cook a simple breakfast",
    2: "Prepare a salad for lunch",
    3: "Try a new recipe for dinner",
    4: "Bake cookies from scratch",
    5: "Cook a vegetarian meal",
    6: "Make a smoothie",
    7: "Prepare a homemade soup",
    8: "Cook a full dinner for family",
    9: "Learn how to make sushi",
    10: "Try a new dessert recipe",
    11: "Make a pasta dish from scratch",
    12: "Prepare a homemade pizza",
    13: "Cook a traditional dish from another country",
    14: "Create a vegetarian pizza",
    15: "Experiment with spices",
    16: "Prepare a healthy smoothie bowl",
    17: "Make your own bread",
    18: "Create a healthy snack",
    19: "Try an international dish",
    20: "Cook a meal from a YouTube tutorial",
    21: "Make your own homemade pasta",
    22: "Cook a festive meal",
    23: "Prepare a quick dinner under 30 minutes",
    24: "Bake a cake",
    25: "Cook a meal using only five ingredients",
    26: "Make a delicious sandwich",
    27: "Prepare an exotic salad",
    28: "Cook dinner for your friends",
    29: "Make your own condiments",
    30: "Create a meal prep plan for the week"
  },
  "Exercise": {
    1: "Do a 10-minute stretching session",
    2: "Complete a 15-minute workout",
    3: "Walk for 30 minutes",
    4: "Do 20 push-ups",
    5: "Try yoga for 20 minutes",
    6: "Complete a 30-minute HIIT session",
    7: "Do a 10-minute ab workout",
    8: "Walk 10,000 steps today",
    9: "Run for 20 minutes",
    10: "Do 30 squats",
    11: "Complete a 15-minute full-body workout",
    12: "Do 30 minutes of strength training",
    13: "Try pilates for 30 minutes",
    14: "Go for a long walk",
    15: "Do a 10-minute core workout",
    16: "Take a bike ride for 30 minutes",
    17: "Dance for 30 minutes",
    18: "Complete a full-body stretch routine",
    19: "Do a 30-minute cardio workout",
    20: "Try a new sport",
    21: "Do a 10-minute cardio workout",
    22: "Complete a strength training session",
    23: "Stretch for 20 minutes",
    24: "Run for 30 minutes",
    25: "Do 15-minute yoga",
    26: "Take a 30-minute walk outside",
    27: "Try a new workout routine",
    28: "Do a full-body workout",
    29: "Stretch for 15 minutes",
    30: "Try swimming for 30 minutes"
  },
  "Reading": {
    1: "Read 10 pages of a book",
    2: "Finish a chapter from a novel",
    3: "Read an article on a new topic",
    4: "Read for 20 minutes",
    5: "Complete a short story",
    6: "Read a non-fiction book for 30 minutes",
    7: "Finish a book you've started",
    8: "Read a book on personal development",
    9: "Read a chapter from a biography",
    10: "Read a science fiction book for 30 minutes",
    11: "Explore a new genre of books",
    12: "Read a self-help book for 30 minutes",
    13: "Finish a book on your to-read list",
    14: "Read a blog post about productivity",
    15: "Read for 15 minutes before bed",
    16: "Start a new book you've been interested in",
    17: "Finish a book you started last month",
    18: "Read an inspirational article",
    19: "Read for 40 minutes",
    20: "Read a poetry collection",
    21: "Read a classic novel",
    22: "Explore a non-fiction book",
    23: "Read a biography of someone you admire",
    24: "Read a chapter on history",
    25: "Listen to an audiobook for 30 minutes",
    26: "Read a new fiction novel",
    27: "Review a book you recently read",
    28: "Read a personal development book",
    29: "Read a chapter on science",
    30: "Finish reading a book from your shelf"
  },
  "Writing": {
    1: "Write for 20 minutes on your blog",
    2: "Write a journal entry for today",
    3: "Write a 500-word short story",
    4: "Write an email to a friend",
    5: "Create a poem about your day",
    6: "Write a book review",
    7: "Write 10 lines of your novel",
    8: "Write a personal essay",
    9: "Create an outline for a new story",
    10: "Write a list of goals for the week",
    11: "Write a letter to yourself",
    12: "Create a to-do list for the month",
    13: "Write a creative story",
    14: "Write for 30 minutes on your current project",
    15: "Journal about your week",
    16: "Write a character profile for a story",
    17: "Write a reflective essay",
    18: "Create an outline for a new blog post",
    19: "Write a 1,000-word article",
    20: "Write an inspiring quote for yourself",
    21: "Create a vision board and write about it",
    22: "Write a gratitude list",
    23: "Write a scene for a story",
    24: "Write a review for a book or movie",
    25: "Write a letter to someone you admire",
    26: "Write a letter to your future self",
    27: "Write a blog post on a hobby you enjoy",
    28: "Write a fictional diary entry",
    29: "Write for 15 minutes before bed",
    30: "Finish writing a short story"
  }
};

const taskList = document.getElementById('taskList');
const popup = document.getElementById('taskPopup');
const popupTitle = document.getElementById('popupTitle');
const popupTasks = document.getElementById('popupTasks');
const closePopup = document.getElementById('closePopup');
const checkbox = document.getElementById('completeCheckbox');
const progressText = document.getElementById('progressText');

const completedDaysKey = `completedDays_${habit}`;
let completedDays = JSON.parse(localStorage.getItem(completedDaysKey)) || [];

function updateProgressText() {
  progressText.textContent = `✅ You have completed ${completedDays.length} out of 30 days.`;
}

for (let i = 1; i <= 30; i++) {
  const li = document.createElement('li');
  li.textContent = `Day ${i}`;
  if (completedDays.includes(i)) {
    li.classList.add('completed');
  }

  li.addEventListener('click', () => {
    popup.classList.remove('hidden');
    popupTitle.textContent = `Tasks for Day ${i}`;
    popupTasks.innerHTML = '';

    const task = taskMap[habit][i];
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    popupTasks.appendChild(taskItem);

    checkbox.checked = completedDays.includes(i);

    checkbox.onchange = () => {
      if (checkbox.checked && !completedDays.includes(i)) {
        completedDays.push(i);
      } else if (!checkbox.checked && completedDays.includes(i)) {
        completedDays = completedDays.filter(day => day !== i);
      }
      localStorage.setItem(completedDaysKey, JSON.stringify(completedDays));
      updateProgressText();
      renderDayList(); 
    };
  });

  taskList.appendChild(li);
}

function renderDayList() {
  const items = taskList.querySelectorAll('li');
  items.forEach((li, index) => {
    const dayNum = index + 1;
    li.classList.toggle('completed', completedDays.includes(dayNum));
  });
}

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

updateProgressText();

