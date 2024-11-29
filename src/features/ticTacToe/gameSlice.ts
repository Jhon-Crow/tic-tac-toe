function addXOrOFactory(){
    var prev;
    return function addSomthing(e: React.MouseEvent<HTMLButtonElement>) {
        if(!e.currentTarget.innerText){
            e.currentTarget.innerText = prev ? 0 : 'x';
            prev = prev ? 0 : 'x';
            e.currentTarget.disabled = true;
            return String(prev);
        }
    };
}

export const addXOrO = addXOrOFactory();

export function checkGame(gameState){
    const size = Math.sqrt(gameState.length);

    function recHorCheck(i){
        if(gameState[i] === gameState[i+1]) {
            const full = !((i+2) % size);
            if (full) {
                return gameState[i]
            }
            recHorCheck(i+1);
        }
    }

    function recVertCheck(i){
        if (gameState[i]){
            if (gameState[i] === gameState[i + size]) {
                const full = (i / size) >= 2;
                if (full) {
                    return gameState[i];
                }
                recVertCheck(i + size);
                if (i > gameState.length) {
                    return;
                }
            }
        }
    }

    function recBaseDeagtCheck(i){
        if (i === gameState.length - 1) {

            return gameState[i];
        }
        if (gameState[i] === gameState[i + 1 + size]){
            recBaseDeagtCheck(i + 1 + size);
        }
    }

    function recLasrDeagtCheck(i){
        const full = (size * size) - size;
        if (full === i){
            return gameState[i];
        }

        if (gameState[i] === gameState[i + size - 1]){
            recLasrDeagtCheck((i + size - 1));
        }
    }

    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i*size]) {
            recHorCheck(i * size);
        }
        if (i < size && gameState[i]) {
            recVertCheck(i);
        }
        if (gameState[0] && (gameState[0] === gameState[gameState.length - 1])){
            recBaseDeagtCheck(0);
        }
        if (gameState[size-1] && (gameState[size-1] === gameState[size * (size - 1)])){
            recLasrDeagtCheck(size - 1);
        }
    }

    if (gameState.length === gameState.filter(item => item !== undefined).length){
        console.log('end')
        return false;
    }
}

