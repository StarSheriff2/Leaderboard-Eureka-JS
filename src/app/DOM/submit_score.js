import LB from '../logic/leaderboard_API_methods';

export default class SubmitScoreForm {
  constructor() {
    this.submitScoreForm = document.querySelector('.submit-score-form');
  }

  submitButtonEventHandler = async (e) => {
    e.preventDefault();
    const username = e.target.childNodes[1].childNodes[1].value;
    const score = parseInt(e.target.childNodes[3].childNodes[1].value, 10);
    e.target.reset();
    const confirmation = await LB.submitGameScore(LB.games[0].id, username, score);
    return confirmation;
  }

  addListener = () => this.submitScoreForm.addEventListener('submit', this.submitButtonEventHandler);
}
