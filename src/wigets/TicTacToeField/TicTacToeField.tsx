import {PlayingField} from "../../entities";
import {addXOrO, checkGame} from "../../features";

interface TicTacToeFieldProps {
    fieldSize: number;
}

const TicTacToeField = (props:TicTacToeFieldProps) => {
    const {fieldSize} = props;
    const cellSize = 200 / (fieldSize / 3);

    return (
        <PlayingField checkGame={checkGame} fieldSize={fieldSize} cellSize={cellSize} clickOnCell={addXOrO}/>
    );
};

export default TicTacToeField;