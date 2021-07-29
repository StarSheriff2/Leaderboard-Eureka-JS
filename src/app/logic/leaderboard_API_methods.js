import EurekaGame from './eureka_gameClass';

class LeaderboardAPI {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.games = [];
  }

  createNewGame = async (gameName) => {
    const response = await (await fetch(`${this.baseURL}/games/`, {
      method: 'POST',
      body: JSON.stringify({
        name: `${gameName}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })).json();
    const game = new EurekaGame(gameName, this.parseId(response));
    return game;
  }

  parseId = (newGame) => newGame.result.split(' ')[3];

  addGame = (newGameObj) => {
    this.games = this.games.concat(newGameObj);
  }

  getGameScores = async (gameId) => {
    const response = await (await fetch(`${this.baseURL}/games/${gameId}/scores/`, { method: 'GET' })).json();
    return response.result;
  }

  submitGameScore = async (gameId, username, score) => {
    const response = await (await fetch(`${this.baseURL}/games/${gameId}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: `${username}`,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })).json();
    return response.result;
  }

  loadGame = async (gameIndex) => {
    const LATEST_SCORES = await this.getGameScores(this.games[gameIndex].id);
    this.games[gameIndex].updateScores(LATEST_SCORES);
  }
}

const LB = new LeaderboardAPI('https://us-central1-js-capstone-backend.cloudfunctions.net/api');
const NEW_GAME = new EurekaGame('Hacker Olympics', '19oARhSmgbuqKfc4VzKI');
LB.addGame(NEW_GAME);

export default LB;
