// script.js
function selectLevel(level) {
  localStorage.setItem('userLevel', level);

  const startArea = document.getElementById('start-area');
  const startLink = document.getElementById('startLink');

  startArea.classList.remove('hidden');
  startLink.href = `lessons/${level}/index.html`;
}

// При загрузке можно также автоматически перенаправить, если уровень уже выбран
window.addEventListener('DOMContentLoaded', () => {
  const savedLevel = localStorage.getItem('userLevel');
  if (savedLevel) {
    document.getElementById('start-area').classList.remove('hidden');
    document.getElementById('startLink').href = `lessons/${savedLevel}/index.html`;
  }
});
