import {PlayingField} from "../../entities";
import {addXOrO, checkGame, sendData} from "../../features";
import { dataItem } from "../../pages/Main";


interface TicTacToeFieldProps { 
    fieldSize: number;
    cellRelativeSize: number;
    addToHistory: (dataItem: dataItem) => void;
}

const TicTacToeField = (props:TicTacToeFieldProps) => {
    const {
        fieldSize,
        cellRelativeSize,
        addToHistory
    } = props;
    const cellSize = cellRelativeSize / (fieldSize / 3);

    return (
        <PlayingField
            addToHistory={addToHistory}
            withModal={true}
            checkGame={checkGame}
            fieldSize={fieldSize}
            cellSize={cellSize}
            clickOnCell={addXOrO}
            sendToServer={sendData}
        />
    );
};

export default TicTacToeField;