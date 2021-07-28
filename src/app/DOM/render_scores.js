export default class ScoresRenderer {
  constructor() {
    this.leaderboard = document.querySelector('.recent-scores-section__scores');
    this.refreshBtn = document.querySelector('.recent-scores-section__refresh-btn');
  }

  loadScore = (score) => {
    this.leaderboard.insertAdjacentHTML('afterbegin', `
      <li class="recent-scores-section__scores__score">
        <p class="recent-scores-section__scores__score__entry">${score.name}: ${score.score}</p>
      </li>
    `);
  }

  updateLeaderBoard = (latestScores) => {
    latestScores.forEach((score) => this.loadScore(score));
  }

  addListener = () => {
    this.refreshBtn.addEventListener('click', () => {
      const SAMPLE_SCORES = [ // this is temporary input to populate the leaderboard
        { name: 'Carlos', score: 70 },
        { name: 'Andrew', score: 100 },
      ];
      this.updateLeaderBoard(SAMPLE_SCORES);
    });
  }
}
