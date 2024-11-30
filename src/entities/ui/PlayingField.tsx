import Box from "@mui/material/Box";
import {Cell, Dialogue} from "../../shared";
import {useState} from "react";
import IconSwitcher from "./IconSwitcher.tsx";


interface playingFieldProps {
    fieldSize: number;
    cellSize: number;
    clickOnCell: (e: React.MouseEvent<HTMLButtonElement>) => void | string;
    checkGame: (gameState: Array<string>) => string | undefined;
    withModal?: boolean;
    sendToServer?: (result: string) => void;
}

const PlayingField = (props: playingFieldProps) => {
    const {
        fieldSize,
        withModal,
        cellSize,
        checkGame,
        clickOnCell,
        sendToServer
    } = props;

    const [gameState, setGameState] = useState<Array<string>>(Array.from({ length: fieldSize * fieldSize }));
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalHeader, setModalHeader] = useState<string>('Начать сначала?');

    const clickOnCellHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = clickOnCell(e);
        if (value) setGameState(prevState => {
            const newState = [...prevState];
            newState[Number((e.target as Element).id)] = value;
            const result = checkGame(newState);
            if (result && sendToServer) sendToServer(result);
            if (withModal && result){
                setModalHeader(result === 'Ничья!' ? 'Ничья!' : `${result.toUpperCase()} выиграл!`);
                setIsOpen(true);
            } else if (!withModal && result){
                setTimeout(
                    () => setGameState(Array.from({ length: fieldSize * fieldSize })), 3000
                )
            }
            return newState;
        });
    }

    const onAcceptCallback = () => {
        setGameState(Array.from({ length: fieldSize * fieldSize }));
    }

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            width={fieldSize * cellSize}
        >
            {withModal && <Dialogue onAcceptCallback={onAcceptCallback} setIsOpen={setIsOpen} isOpen={isOpen}
                       header={modalHeader}/>}

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