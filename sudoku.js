/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function checkColumn(n, arr, j) {
    const tempArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        tempArr.push(arr[i][j]);
    }
    return tempArr.includes(n.toString());
}

function checkSquare(r, c, n, arr) {
    const arrSquare = [];
    const column = Math.floor(c / 3);
    const row = Math.floor(r / 3);

    for (let i = row * 3; i < (row + 1) * 3; i += 1) {
        for (let j = column * 3; j < (column + 1) * 3; j += 1) {
            arrSquare.push(arr[i][j]);
        }
    }
    return arrSquare.includes(n.toString());
}

function solve(boardString) {
    const sudo = [];
    const boardArray = boardString.split('');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 9; i += 1) {
        sudo.push(boardArray.splice(0, 9));
    }
    search(sudo, numbers);

    function search(sudo, numbers) {
        let arrOfCandidates = [];

        for (let j = 0; j < sudo.length; j += 1) {
            for (let i = 0; i < sudo[j].length; i += 1) {
                if (!Number(sudo[j][i])) {
                    for (let index = 0; index < numbers.length; index += 1) {
                        if (
                            !sudo[j].includes(numbers[index].toString()) &&
                            !checkColumn(numbers[index], sudo, i) &&
                            !checkSquare(j, i, numbers[index], sudo)
                        ) {
                            arrOfCandidates.push(numbers[index]);
                        }
                    }
                    if (arrOfCandidates.length === 1) {
                        sudo[j][i] = arrOfCandidates[0].toString();
                        search(sudo, numbers);
                    } else {
                        arrOfCandidates = [];
                    }
                }
            }
        }
    }
    console.table(sudo);
    return sudo;
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
    console.table(board);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
    solve,
    isSolved,
    prettyBoard,
};
