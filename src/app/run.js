
import { ScoresRenderer } from "./DOM/dom_functions.js";
import loadStaticContent from "./home";


export default function run() {
  loadStaticContent();

  const SAMPLE_SCORES = [
    { name: 'Carlos', score: 70, },
    { name: 'Andrew', score: 100, },
  ];
  const scoresRenderer = new ScoresRenderer();
  SAMPLE_SCORES.forEach((score) => scoresRenderer.loadScore(score));
  const NEW_SCORE_PULL = { name: 'Nacho', score: 200, };
  scoresRenderer.loadScore(NEW_SCORE_PULL);

}
