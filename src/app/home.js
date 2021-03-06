const loadStaticContent = () => {
  const staticContent = document.querySelector('#root');

  staticContent.innerHTML = `
  <h1 class='page-title'>Leaderboard</h1>
  <main class="main-section">
    <section class="section recent-scores-section">
      <h2 class="recent-scores-section__title">
        Recent scores
      </h2>
      <button class="recent-scores-section__refresh-btn btn" type='button'>
        Refresh
      </button>
      <ul class="recent-scores-section__scores">
      </ul>
    </section>
    <section class="section add-score-section">
      <h2 class="add-score-section__title">
        Add your score
      </h2>
      <form action="#" class="submit-score-form">
        <div class="submit-score-form__field-group">
          <input class="submit-score-form__field-group__input" type="text" class="submit-score-form__name"
            id="score-record-name" name="score-record-name" placeholder="Your name" required>
        </div>
        <div class="submit-score-form__field-group">
          <input class="submit-score-form__field-group__input" type="number" class="submit-score-form__score"
            id="score-record-score" name="score-record-score" placeholder="Your score" required>
        </div>
        <button class="submit-score-form__submit-btn btn" type="submit">Submit</button>
      </form>
    </section>
  </main>
    `;
};

export default loadStaticContent;
