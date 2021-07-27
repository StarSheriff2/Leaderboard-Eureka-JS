const loadStaticContent = () => {
  const staticContent = document.querySelector('#root');

  staticContent.innerHTML = `
    <h1>Leaderboard</h1>
    <main class="main-section">
      <section class="section recent-scores-section">
        <h2 class="recent-scores-section__title">
          Recent scores
        </h2>
      </section>
      <section class="section add-score-section">
        <h2 class="add-score-section__title">
          Add your score
        </h2>
      </section>
    </main>
    `;
}

export default loadStaticContent;
