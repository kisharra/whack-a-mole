const { placeMoleRandomly } = require('../game');

test('placeMoleRandomly places mole in a cell', () => {
  document.body.innerHTML = '<div id="game"></div>';
  const board = document.getElementById('game');

  // Создаем 16 ячеек
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }

  placeMoleRandomly(board);
  const mole = document.getElementById('mole');
  expect(mole).not.toBeNull();
});