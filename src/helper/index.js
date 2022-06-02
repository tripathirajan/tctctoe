
export const calculateWinner = (squares) => {
    const winningLines = [
        [[0, 0], [0, 1], [0, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 1], [1, 1], [2, 1]],
        [[1, 0], [1, 1], [1, 2]]
    ];
    let firstCell = null, secondCell = null, thirdCell = null;
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        firstCell = squares[a[0]][a[1]];
        secondCell = squares[b[0]][b[1]];
        thirdCell = squares[c[0]][c[1]];
        if (firstCell && firstCell === secondCell && firstCell === thirdCell) {
            return { winningValue: firstCell, winningBoxes: winningLines[i] };
        }
    }
    return null;
}
export const createArray = (rows = 1, cols = 1, defaultValue = null) => {
    var arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(cols).fill(defaultValue);
    }
    return arr;
}

export const get2DEmptyMatrix = (rows = 3, cols = 3) => {
    return createArray(rows, cols, null);
}

export const checkForDraw = (squares) => {
    return squares.every(row => row.every(cell => cell !== null));
}

