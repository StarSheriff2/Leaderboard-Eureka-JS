export default class EurekaGame {
  constructor(name) {
    this.name = name;
    this.scores = [];
  }

  getName = () => this.name;

  getScores = () => this.scores;

  addScore = (newScore) => {
    this.scores = this.scores.concat(newScore);
  }
}
