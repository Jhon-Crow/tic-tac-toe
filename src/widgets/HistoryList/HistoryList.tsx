import { useEffect, useRef } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import O from "../../shared/assets/icons/components/o.tsx";
import X from "../../shared/assets/icons/components/x.tsx";
import { dataItem } from "../../pages/Main.tsx";

interface HistoryListProps {
    state?: dataItem[];
}

const HistoryList = ({ state }: HistoryListProps) => {
    const listRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = -listRef.current.scrollHeight;
        }
    }, [state]);

    return (
        <List
            ref={listRef}
            sx={{
                width: '100%',
                bgcolor: 'lightgray',
                maxHeight: '280px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
            }}
        >
            {state?.length && state.map(({ date, cross, circle }, index) => (
                <ListItem key={date + index} sx={{ border: '1px solid grey' }}>
                    <ListItemAvatar>
                        {cross && <X height={20} width={20} />}
                        {circle && <O height={20} width={20} />}
                    </ListItemAvatar>
                    <ListItemText
                        primary={!cross && !circle ? 'Ничья!' : cross ? 'Крестики победили!' : 'Нолики победили!'}
                        secondary={date}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default HistoryList;
