export default class EurekaGame {
  constructor(name = undefined, id = undefined) {
    if (id === undefined || name === undefined) throw new Error('Missing parameter');
    this.name = name;
    this.id = id;
    this.scores = [];
  }

  getName = () => this.name;

  getScores = () => this.scores;

  addScore = (newScore) => {
    this.scores = this.scores.concat(newScore);
  }

  updateScores = (APIScores) => {
    this.scores = APIScores;
  }
}
