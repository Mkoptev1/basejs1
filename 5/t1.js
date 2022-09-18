const chess = {
    gameNode: document.getElementById('game'),
    renderGame() {
        const rows = [-1, 8, 7, 6, 5, 4, 3, 2, 1, -1];
        const cols = [-1, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', -1];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameNode.appendChild(tr);

            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (rows[row] === -1 && cols[col] !== -1) {
                    // Выводим буквы с ячейки строки
                    td.textContent = cols[col];
                } else if (cols[col] === -1 && rows[row] !== -1) {
                    // Выводим цифры в ячейки колонки
                    td.textContent = rows[row].toString();
                }

                if (this.isDarkCell(row, rows.length - 1, col, cols.length - 1)) {
                    td.style.backgroundColor = '#8b4d17';
                }
            }
        }
    },
    isDarkCell(rowIdx, rowLength, colIdx, colLength) {
        if (rowIdx === 0 || colIdx === 0 || rowIdx === rowLength || colIdx === colLength) {
            return false;
        }
        return (rowIdx + colIdx) % 2 === 1;
    }
}

chess.renderGame();