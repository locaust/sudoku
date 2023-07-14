var Table = require('cli-table');
var table = new Table({
    head: ['^^', 1, 2, 3, 4, 5, 6, 7, 8, 9],
    chars: {
        top: '═',
        'top-mid': '╤',
        'top-left': '╔',
        'top-right': '╗',
        bottom: '═',
        'bottom-mid': '╧',
        'bottom-left': '╚',
        'bottom-right': '╝',
        left: '║',
        'left-mid': '╟',
        mid: '─',
        'mid-mid': '┼',
        right: '║',
        'right-mid': '╢',
        middle: '│',
    },
});
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function isSolved() {}

function prettyBoard(solvedArr) {
    solvedArr.forEach((el, i) => {
        table.push({ [i + 1]: el });
    });

    console.log(table.toString());
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
    solve,
    isSolved,
    prettyBoard,
};
