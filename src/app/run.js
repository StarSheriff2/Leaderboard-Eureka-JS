import ScoresRenderer from './DOM/dom_functions';
import loadStaticContent from './home';

export default async function run() {
  loadStaticContent();
  const scoresRenderer = new ScoresRenderer();
  scoresRenderer.addListener();
}
