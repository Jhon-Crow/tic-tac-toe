import {PlayingField} from "../../entities";
import {addXOrO, checkGame} from "../../features";

interface TicTacToeFieldProps {
    fieldSize: number;
    cellRelativeSize: number;
}

const TicTacToeField = (props:TicTacToeFieldProps) => {
    const {
        fieldSize,
        cellRelativeSize,
    } = props;
    const cellSize = cellRelativeSize / (fieldSize / 3);

    return (
        <PlayingField
            withModal={true}
            checkGame={checkGame}
            fieldSize={fieldSize}
            cellSize={cellSize}
            clickOnCell={addXOrO}
        /*    todo функ. для взаим с апи */
        />
    );
};

export default TicTacToeField;