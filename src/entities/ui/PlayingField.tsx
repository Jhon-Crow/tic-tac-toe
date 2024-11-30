import Box from "@mui/material/Box";
import {Cell} from "../../shared";
import {useState} from "react";
import IconSwitcher from "./IconSwitcher.tsx";
import Dialogue from "../../shared/ui/Dialogue.tsx";


interface playingFieldProps {
    fieldSize: number;
    cellSize: number;
    clickOnCell: (e: React.MouseEvent<HTMLButtonElement>) => void | string;
    checkGame: (gameState: Array<string>) => string | undefined;
    withModal?: boolean;
}

const PlayingField = (props: playingFieldProps) => {
    const {
        fieldSize,
        withModal,
        cellSize,
        checkGame,
        clickOnCell,
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
            if (withModal && result){
                setModalHeader(result === 'Ничья!' ? 'Ничья!' : `${result.toUpperCase()} выиграл!`);
                setIsOpen(true);
            } else if (!withModal && result){
                setTimeout(
                    () => setGameState(Array.from({ length: fieldSize * fieldSize })), 3000
                )
            }
            // TODO sand date func from props
            // if (setIsOpenModal && result){
            //     setIsOpenModal(true);
            // }

            return newState;
        });
    }

    const onAcceptCallback = () => {
        setGameState(Array.from({ length: fieldSize * fieldSize }));

        //todo
        // обращение к апи для сохранения истории
        // очищать стэйт
        // добавить открытие модалки с результатом при завершении партии
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