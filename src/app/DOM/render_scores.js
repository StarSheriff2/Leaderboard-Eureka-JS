import LB from '../logic/leaderboard_API_methods';

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

  refreshButtonEventHandler = async () => {
    const SCORES = await LB.getGameScores(LB.games[0].id);
    this.updateLeaderBoard(SCORES);
  }

  addListener = () => {
    this.refreshBtn.addEventListener('click', this.refreshButtonEventHandler);
  }
}
