import Box from "@mui/material/Box";
import {Cell} from "../../shared";
import {useState} from "react";

interface playingFieldProps {
    fieldSize: number;
    cellSize: number;
    clickOnCell: (e: React.MouseEvent<HTMLButtonElement>) => void | string;
    checkGame: (gameState: unknown[]) => void;
}

const PlayingField = (props: playingFieldProps) => {
    const {
        fieldSize,
        cellSize,
        checkGame,
        clickOnCell
    } = props;

    const [gameState, _] = useState(Array.from({ length: fieldSize * fieldSize }));


    const clickOnCellHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = clickOnCell(e);
        if (value) gameState[e.target.id] = value;
        checkGame(gameState);
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
                </Cell>
            ))}
        </Box>
    );
};

export default PlayingField;