import LeaderboardAPI from '../logic/leaderboard_API_methods';

describe('LeaderBoardAPI class', () => {
  describe('object methods', () => {
    test('creates new game by passing a name as parameter', () => {
      // Arrange
      const GAME_NAME = 'my game';
      const LEADERBOARD_API = new LeaderboardAPI('https://jsonplaceholder.typicode.com/posts');

      // Act
      // LEADERBOARD_API.createNewGame(GAME_NAME);

      // Assert
      expect(LEADERBOARD_API.createNewGame(GAME_NAME)).toBe( { name: 'my game' } );
    })
  });
});

