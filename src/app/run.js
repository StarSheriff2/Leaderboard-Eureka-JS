import ScoresRenderer from './DOM/dom_functions';
import SubmitScoreForm from './DOM/submit_score';
import loadStaticContent from './home';

export default async function run() {
  loadStaticContent();
  const scoresRenderer = new ScoresRenderer();
  scoresRenderer.addListener();
  const submitScoreForm = new SubmitScoreForm();
  submitScoreForm.addListener();
  scoresRenderer.checkForScores();
}
