import {HistoryList, TicTacToeField} from "../wigets";

const Main = () => {
    return (
        <main>
            <TicTacToeField fieldSize={3} cellRelativeSize={200}/>
            <HistoryList/>
        </main>
    );
};

export default Main;