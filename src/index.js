import { createGameBoard, placeMoleRandomly } from './game';

document.addEventListener('DOMContentLoaded', () => {
  const board = createGameBoard();
  placeMoleRandomly(board);

  setInterval(() => {
    placeMoleRandomly(board);
  }, 1000);
});
