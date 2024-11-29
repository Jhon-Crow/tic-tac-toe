function addXOrOFactory(){
    var prev: number | string;
    return function addSomthing(e: React.MouseEvent<HTMLButtonElement>) {
            prev = prev ? 0 : 'x';
            e.currentTarget.disabled = true;
            return String(prev);
    };
}

export const addXOrO = addXOrOFactory();

export function checkGame(gameState: Array<string>){
    const size = Math.sqrt(gameState.length);

    function recHorCheck(i: number){
        if(gameState[i] === gameState[i+1]) {
            const full = !((i+2) % size);
            if (full) {
                return gameState[i]
            }
            recHorCheck(i+1);
        }
    }

    function recVertCheck(i: number){
        if (gameState[i]){
            if (gameState[i] === gameState[i + size]) {
                const full = (i + size) >= (size**2) - size;
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

    function recBaseDeagtCheck(i: number){
        if (i === gameState.length - 1) {
            return gameState[i];
        }
        if (gameState[i] === gameState[i + 1 + size]){
            recBaseDeagtCheck(i + 1 + size);
        }
        return;
    }

    function recLastDeagtCheck(i: number){
        const full = (size * size) - size;
        if (full === i){
            return gameState[i];
        }
        if (gameState[i] === gameState[i + size - 1]){
            recLastDeagtCheck((i + size - 1));
        }
        return;
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
            recLastDeagtCheck(size - 1);
        }
    }

    if (gameState.length === gameState.filter((item: string) => item !== undefined).length){
        console.log('end')
        return false;
    }
}

