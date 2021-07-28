import { expect } from '@jest/globals';
import EurekaGame from '../logic/eureka_gameClass';

describe('EurekaGame class', () => {
  describe('object instantiation', () => {
    test('constructor instantiates game object', () => {
      // Arrange
      const gameName = 'my new Game';

      // Act
      const MY_NEW_GAME = new EurekaGame(gameName);

      // Assert
      expect(MY_NEW_GAME).toBeInstanceOf(EurekaGame);
    })

    test('can create game with chosen game name', () => {
      const gameName = 'my new Game';

      const MY_NEW_GAME = new EurekaGame(gameName);

      expect(MY_NEW_GAME.name).toBe('my new Game');
    })

    test('can create game with an empty array for scores', () => {
      const gameName = 'my new Game';

      const MY_NEW_GAME = new EurekaGame(gameName);

      expect(MY_NEW_GAME).not.toHaveProperty('manyScores');
      expect(MY_NEW_GAME).toHaveProperty('scores');
      expect(MY_NEW_GAME.scores).toHaveLength(0);
    })
  });

  describe('object methods', () => {
    test('getName() gets name of game', () => {
      const GAME_NAME = 'my new Game';

      const MY_NEW_GAME = new EurekaGame(GAME_NAME);

      const GET_GAME_NAME = MY_NEW_GAME.getName();

      expect(GET_GAME_NAME).toBe('my new Game');
    })

    test('addScores(newScore) adds a new score to game object', () => {
      // Arrange
      const MY_NEW_GAME = new EurekaGame('My Game');
      const NEW_SCORE = { name: 'James', score: '10' };
      const OTHER_SCORE = { name: 'Wes', score: '20' };

      // Act
      MY_NEW_GAME.addScore(NEW_SCORE);

      expect(MY_NEW_GAME.scores).toHaveLength(1);
      expect(MY_NEW_GAME.scores[0]).toBe(NEW_SCORE);
      expect(MY_NEW_GAME.scores[0]).not.toBe(OTHER_SCORE);
    })
  });
});
