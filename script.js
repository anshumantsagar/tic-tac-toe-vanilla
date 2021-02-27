let allClicked = [];
let xOrO = 'x';
const winCom = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
let winData = {
    x : "",
    o : ""
}

const elementClick = (id) => {
    if (document.getElementById("winner").innerHTML == "") {
        if (allClicked.length == 0) {
            insertAndSwitch(id);
        }
        else {
            if (allClicked.includes(id)) {
                return 0;
            } else {
                insertAndSwitch(id);
            }
        }
    }
}

const insertAndSwitch = (id) => {
    allClicked.push(id)
    document.getElementById(id).innerHTML = xOrO;
    if (xOrO == 'x') {
        winData.x = winData.x.concat(String(Number(id)-1));
        xOrO = 'o';
        document.getElementById("turn").innerHTML = xOrO + "'s " + "turn";
    } else {
        winData.o = winData.o.concat(String(Number(id)-1));
        xOrO = 'x';
        document.getElementById("turn").innerHTML = xOrO + "'s " + "turn";
    }
    checkWinner();
}

const checkWinner = () => {
    if(allClicked.length > 8) {
        document.getElementById("winner").innerHTML = "It's A tie";
        document.getElementById("turn").innerHTML = '';
    }
    for (let i=0; i<winCom.length; i++) {
        if (winCom[i].every(elem => winData.x.includes(elem))) {
            document.getElementById("winner").innerHTML = "X is winner";
            document.getElementById('turn').innerHTML = '';
            return 0;
        }
        else if (winCom[i].every(elem => winData.o.includes(elem))) {
            document.getElementById("winner").innerHTML = "O is winner";
            document.getElementById('turn').innerHTML = '';
            return 0;
        }
    }
}

const reset = () => {
    winData.o = '';
    winData.x = '';
    xOrO = 'x';
    allClicked = [];
    for (let i=1; i<=9; i++) {
        document.getElementById(i).innerHTML =  '';
    }
    document.getElementById("turn").innerHTML = xOrO + "'s " + "turn";
    document.getElementById("winner").innerHTML = '';
}

