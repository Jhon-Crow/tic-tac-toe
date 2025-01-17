import { Suspense, useCallback, useEffect, useState } from "react";
import {HistoryList, TicTacToeField} from "../widgets";
import { fetchHistory } from "../features";
import { isMobile } from 'react-device-detect';

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
        setState(prev => prev.length ? [...prev, dataItem] : [dataItem]);
    }, [setState])


    useEffect(() => {
        fetchHistoryApi()
    }, [fetchHistoryApi])

    const size = isMobile ? 90 : 200;

    return (
        <main>
            <TicTacToeField addToHistory={addToHistory} fieldSize={3} cellRelativeSize={size}/>
            <Suspense fallback="Загрузка...">
                <HistoryList state={state}/>
            </Suspense>
        </main>
    );
};

export default Main;