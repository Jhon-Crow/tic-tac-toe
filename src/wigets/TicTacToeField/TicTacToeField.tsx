import {PlayingField} from "../../entities";
import {addXOrO, checkGame} from "../../features";

interface TicTacToeFieldProps {
    fieldSize: number;
    setIsOpenModal?: (arg: boolean) => void;
    cellRelativeSize: number;
}

const TicTacToeField = (props:TicTacToeFieldProps) => {
    const {
        fieldSize,
        cellRelativeSize,
        setIsOpenModal
    } = props;
    const cellSize = cellRelativeSize / (fieldSize / 3);

    return (
        <PlayingField
            setIsOpenModal={setIsOpenModal}
            checkGame={checkGame}
            fieldSize={fieldSize}
            cellSize={cellSize}
            clickOnCell={addXOrO}
        />
    );
};

export default TicTacToeField;