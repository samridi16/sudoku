var u;

function add(difficulty) {
    var a = [
        ['', '', 9, 6, '', 8, 5, '', ''],
        [1, '', '', 4, '', '', 9, 3, ''],
        [4, 6, '', '', 3, 1, '', '', ''],
        [3, '', 1, 7, 8, 9, '', '', ''],
        ['', 7, 8, '', '', 4, '', 5, 9],
        ['', '', 4, '', 6, '', 1, '', 7],
        [8, 4, 2, 5, '', '', '', 1, ''],
        [5, '', '', 1, 2, '', 4, 6, ''],
        ['', 1, '', '', '', '', '', '', 5]
    ];
    var b = [
        [8, '', '', 7, 3, '', '', 1, ''],
        ['', '', 5, '', '', '', 2, '', 6],
        [1, 4, '', '', '', '', '', '', ''],
        ['', '', '', 2, '', 7, '', '', ''],
        ['', '', 8, 9, '', '', 4, '', 3],
        ['', '', '', '', 4, '', '', '', ''],
        ['', '', 6, '', '', '', '', '', ''],
        ['', 1, '', 4, '', '', 9, '', 8],
        [9, 7, '', 8, '', '', '', 6, '']
    ];
    var h = [
        ['', 5, '', '', '', '', 4, '', ''],
        [1, 6, '', 8, '', '', 7, '', 5],
        [4, '', '', '', '', '', '', 2, 6],
        ['', 4, 9, '', '', '', '', '', ''],
        [8, '', 5, 6, '', '', '', '', 1],
        ['', '', '', '', '', '', 8, 7, ''],
        ['', '', '', 3, 9, '', '', 6, 4],
        ['', '', '', '', '', 6, '', 1, ''],
        [9, '', '', '', 2, '', '', '', '']
    ];
    if (difficulty == 1) {

        clear();
        renderBoard(a);
    } else if (difficulty == 2) {
        clear();
        renderBoard(b);
    } else {

        clear();

        renderBoard(h);
    }

}

function clear() {
    var c = 0;
    for (var i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {

            document.querySelector(`#cell-${c} input`).value = '';
            document.querySelector(`#cell-${c} input`).disabled = false;
            document.querySelector(`#cell-${c}`).classList.remove("color");
            document.querySelector(`#cell-${c}`).classList.remove("red");
            document.querySelector(`#cell-${c}`).classList.remove("blue");
            document.querySelector(`#cell-${c}`).classList.remove("blue");
            document.querySelector(`#cell-${c} input`).classList.remove("color");
            document.querySelector(`#cell-${c} input`).classList.remove("red");
            document.querySelector(`#cell-${c} input`).classList.remove("blue");
            document.querySelector(`#cell-${c} input`).classList.remove("light");
            document.querySelector(`#cell-${c} input`).classList.remove("light");
            c++;

        }
    }
}



function renderBoard(board) {
    clear();
    var c = 0;
    for (var i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (board[i][j] != '') {
                document.querySelector(`#cell-${c} input`).value = board[i][j];
                document.querySelector(`#cell-${c} input`).disabled = true;
                document.querySelector(`#cell-${c}`).classList.add("color");


            }
            c++;
        }
    }
    u = board.slice();

}

function check(r, c) {



    var d = 0;
    var e = document.querySelector(`#cell-${r*9+c} input`).value;
   color(r, c);
    instance(e);
    for (var j = 0; j < 9; j++) {
        if (u[r][j] == e && e != '' && j != c) {

            d++;

        } else {
            document.querySelector(`#cell-${r*9+j} input`).classList.add("light");
        }
    }
    for (var j = 0; j < 9; j++) {
        if (u[j][c] == e && e != '' && j != r) {

            d++;

        } else {
            document.querySelector(`#cell-${j*9+c} input`).classList.add("light");
        }
    }

   x = r;
    y = c;

    var startY = Math.floor(y / 3) * 3;
    for (var y2 = startY; y2 < startY + 3; ++y2) {
        var startX = Math.floor(x / 3) * 3;
        var f = 0;
        for (x2 = startX; x2 < startX + 3; ++x2) {

            if (  u[x2][y2] == e && e != '' && x2 != r && y2 != c) {
                d++;
                f = 1;
            } else {
                document.querySelector(`#cell-${x2*9+y2} input`).classList.add("light");

            }
        }

    }

    if (d >= 1) {

        document.querySelector(`#cell-${r*9+c} input `).setAttribute("class", "red");
        document.querySelector(`#cell-${r*9+c} input`).value = '';
        return false;
    } else {
        u[r][c] = e;

        return true;
    }


}


function validate() {

    var f = 0;
    var o = 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            o++;
            if (!check(i, j)) {
                f = 1;
                break;
            }
        }
        if (f == 1) {
            alert("wrong");
            break;
        }
    }
    document.querySelector(`#cell-${8} input`).removeAttribute("class");
    var d = 0;
    for (var i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (u[i][j] !== '') {
                d++;
            }
        }
    }
    if (d == 81) {

alert("Congratulation you solved the sudoku puzzle!");
    } else {
        alert("Complete it! you are going in right direction");
    }
}

function color(r, c) {
    var d = r * 9 + c;

    for (var i = 0; i < 81; i++) {
        var z = document.querySelector(`#cell-${i} input`);
        if (i == d) {
            z.setAttribute("class", "blue");

        } else {
            z.removeAttribute("class", "blue");
            z.removeAttribute("class", "red");
            z.removeAttribute("class", "light");
            z.removeAttribute("class", "light");
        }
    }
}

function instance(e) {

    for (var i = 0; i < 81; i++) {
        var z = document.querySelector(`#cell-${i} input`).value;
        if (z == e && e != '') {
            document.querySelector(`#cell-${i} input`).classList.add("light");
        }
    }
}
window.onload = () => {
    add(1);
}
