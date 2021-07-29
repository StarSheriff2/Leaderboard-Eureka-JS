import LB from '../logic/leaderboard_API_methods';

export default class SubmitScoreForm {
  constructor() {
    this.submitScoreForm = document.querySelector('.submit-score-form');
  }

  submitButtonEventHandler = async (e) => {
    e.preventDefault();
    const username = e.target.childNodes[1].childNodes[1].value;
    const score = e.target.childNodes[3].childNodes[1].value;
    const confirmation = await LB.submitGameScore(LB.games[0].id, username, score);
    console.log(confirmation);
  }

  addListener = () => this.submitScoreForm.addEventListener('submit', this.submitButtonEventHandler);
}
