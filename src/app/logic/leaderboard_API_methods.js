import EurekaGame from './eureka_gameClass';

export default class LeaderboardAPI {
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
}
