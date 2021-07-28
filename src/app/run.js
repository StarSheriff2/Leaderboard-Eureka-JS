
import { ScoresRenderer } from "./DOM/dom_functions.js";
import loadStaticContent from "./home";


export default function run() {
  loadStaticContent();
  const scoresRenderer = new ScoresRenderer();
  scoresRenderer.addListener();
  const NEW_SCORE_PULL = { name: 'Nacho', score: 200, }; // this is temporary input to populate the leaderboard
  scoresRenderer.loadScore(NEW_SCORE_PULL);
}
