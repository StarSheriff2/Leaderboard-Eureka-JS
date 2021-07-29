import ScoresRenderer from './DOM/dom_functions';
import loadStaticContent from './home';
import LeaderboardAPI from './logic/leaderboard_API_methods';

export default async function run() {
  loadStaticContent();
  const scoresRenderer = new ScoresRenderer();
  scoresRenderer.addListener();
  const NEW_SCORE_PULL = { name: 'Nacho', score: 200 }; // this is temporary input to populate the leaderboard
  scoresRenderer.loadScore(NEW_SCORE_PULL);

  const LB = new LeaderboardAPI('https://us-central1-js-capstone-backend.cloudfunctions.net/api');

  const NEW_GAME = await LB.createNewGame('my game');
  LB.addGame(NEW_GAME);

  console.log(LB.games);

  /* LB.addGame('cars');
  console.log(LB.games); */
}
