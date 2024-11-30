function addXOrOFactory(){
    var prev: number | string;
    return function addSomthing(e: React.MouseEvent<HTMLButtonElement>) {
        if (e.currentTarget.firstChild!.nodeName === 'svg') return;
            prev = prev ? 0 : 'x';
            return String(prev);
    };
}

export const addXOrO = addXOrOFactory();

export function checkGame(gameState: Array<string>) {
    const size = Math.sqrt(gameState.length);

    function recHorCheck(i: number): string | undefined {
        if (gameState[i] === gameState[i + 1]) {
            const full = !((i + 2) % size);
            if (full) {
                return gameState[i];
            }
            return recHorCheck(i + 1);
        }
        return;
    }

    function recVertCheck(i: number): string | undefined {
        if (gameState[i]) {
            if (gameState[i] === gameState[i + size]) {
                const full = (i + size) >= (size ** 2) - size;
                if (full) {
                    return gameState[i];
                }
                return recVertCheck(i + size);
            }
        }
        return;
    }

    function recBaseDeagtCheck(i: number): string | undefined {
        if (i === gameState.length - 1) {
            return gameState[i];
        }
        if (gameState[i] === gameState[i + 1 + size]) {
            return recBaseDeagtCheck(i + 1 + size);
        }
        return;
    }

    function recLastDeagtCheck(i: number): string | undefined {
        const full = (size * size) - size;
        if (full === i) {
            return gameState[i];
        }
        if (gameState[i] === gameState[i + size - 1]) {
            return recLastDeagtCheck(i + size - 1);
        }
        return;
    }

    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i * size]) {
            const result = recHorCheck(i * size);
            if (result) return result;
        }
        if (i < size && gameState[i]) {
            const result = recVertCheck(i);
            if (result) return result;
        }
        if (gameState[0] && (gameState[0] === gameState[gameState.length - 1])) {
            const result = recBaseDeagtCheck(0);
            if (result) return result;
        }
        if (gameState[size - 1] && (gameState[size - 1] === gameState[size * (size - 1)])) {
            const result = recLastDeagtCheck(size - 1);
            if (result) return result;
        }
    }

    if (gameState.length === gameState.filter((item: string) => item !== undefined).length) {
        return 'Ничья!';
    }

    return;
}
