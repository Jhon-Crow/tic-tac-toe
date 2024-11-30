import {fetchHistory} from "../../features";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import O from "../../shared/assets/icons/components/o.tsx";
import X from "../../shared/assets/icons/components/x.tsx";
import {useEffect, useState} from "react";

interface dataItem {
    cross: boolean,
    circle: boolean,
    date: string
}

const HistoryList = () => {
    const [state, setState] = useState<Array<dataItem>>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHistory();
                setState(data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <List sx={{
            width: '100%',
            bgcolor: 'lightgray',
            maxHeight: '400px',
            overflowY: 'auto'
        }}>
            {state && state.map(({date, cross, circle}, index) => {
                    return (<ListItem key={date + index} sx={{border: '1px solid grey'}}>
                        <ListItemAvatar>
                            {cross && <X height={20} width={20}/>}
                            {circle && <O height={20} width={20}/>}
                        </ListItemAvatar>
                        <ListItemText primary={!cross && !circle && 'Ничья!' || cross ? 'Крестики победили!' : 'Нолики победили!'} secondary={date}/>
                    </ListItem>)
                }
            )}
        </List>
    );
};

export default HistoryList;