import Box from "@mui/material/Box";
import {Cell} from "../../shared";
import {useState} from "react";
import IconSwitcher from "./IconSwitcher.tsx";


interface playingFieldProps {
    fieldSize: number;
    cellSize: number;
    clickOnCell: (e: React.MouseEvent<HTMLButtonElement>) => void | string;
    checkGame: (gameState: Array<string>) => void;
}

const PlayingField = (props: playingFieldProps) => {
    const {
        fieldSize,
        cellSize,
        checkGame,
        clickOnCell
    } = props;

    const [gameState, setGameState] = useState<Array<string>>(Array.from({ length: fieldSize * fieldSize }));


    const clickOnCellHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = clickOnCell(e);
        if (value) setGameState(prevState => {
            const newState = [...prevState];
            newState[Number((e.target as Element).id)] = value;
            checkGame(newState);
            return newState;
        });
    }

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            width={fieldSize * cellSize}
        >
            {Array.from({ length: fieldSize * fieldSize }, (_, index) => (
                <Cell
                    id={`${index}`}
                    key={index}
                    color={index & 1 ? 'lightcoral' : 'lightblue'}
                    size={cellSize}
                    onClick={clickOnCellHandler}
                >
                    {gameState[index] && <IconSwitcher size={cellSize} key={index} caseStr={gameState[index]}/>}
                </Cell>
            ))}
        </Box>
    );
};

export default PlayingField;