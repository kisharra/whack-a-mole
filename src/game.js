import moleImg from './assets/mole.png';

export function createGameBoard() {
  const board = document.getElementById('game');
  board.style.display = 'grid';
  board.style.gridTemplateColumns = 'repeat(4, 100px)';
  board.style.gridGap = '10px';
  board.style.marginTop = '20px';

  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = '100px';
    cell.style.height = '100px';
    cell.style.border = '1px solid #ccc';
    cell.style.position = 'relative';
    board.appendChild(cell);
  }

  return board;
}

export function placeMoleRandomly(board) {
  const cells = Array.from(board.querySelectorAll('.cell'));
  const moleImage = document.querySelector('#mole');

  if (moleImage) {
    // Перемещаем существующую картинку в новый div
    const prevCell = moleImage.parentElement;
    prevCell.removeChild(moleImage); // это допустимо, т.к. мы не удаляем node из DOM, а просто перемещаем
  }

  const mole = document.createElement('img');
  mole.id = 'mole';
  mole.src = moleImg;
  mole.style.width = '90%';
  mole.style.height = '90%';
  mole.style.position = 'absolute';
  mole.style.top = '5px';
  mole.style.left = '5px';

  const randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].appendChild(mole);
}