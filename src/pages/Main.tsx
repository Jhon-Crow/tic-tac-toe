import { Suspense, useCallback, useEffect, useState } from "react";
import {HistoryList, TicTacToeField} from "../widgets";
import { fetchHistory } from "../features";


export interface dataItem {
    cross: boolean,
    circle: boolean,
    date: string
}

const Main = () => {
    const [state, setState] = useState<Array<dataItem>>([]);

    const fetchHistoryApi = useCallback(async () => {
        setState(await fetchHistory());
    }, [setState]);

    const addToHistory = useCallback((dataItem: dataItem) => {
        setState(prev => [...prev, dataItem]);
    }, [setState])


    useEffect(() => {
        fetchHistoryApi()
    }, [fetchHistoryApi])
    return (
        <main>
            <TicTacToeField addToHistory={addToHistory} fieldSize={3} cellRelativeSize={200}/>
            <Suspense fallback="Загрузка...">
                <HistoryList state={state}/>
            </Suspense>
        </main>
    );
};

export default Main;