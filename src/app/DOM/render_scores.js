export default class ScoresRenderer {
  constructor() {
    this.leaderboard = document.querySelector('.recent-scores-section__scores');
  }

  loadScore = (score) => {
    this.leaderboard.insertAdjacentHTML('afterbegin', `
      <li class="recent-scores-section__scores__score">
        <p class="recent-scores-section__scores__score__entry">${score.name}: ${score.score}</p>
      </li>
    `);
  }
}

