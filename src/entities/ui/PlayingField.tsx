import Box from "@mui/material/Box";
import {Cell} from "../../shared";

interface playingFieldProps {
    fieldSize: number;
    cellSize: number;
    clickOnCell: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PlayingField = (props: playingFieldProps) => {
    const {
        fieldSize,
        cellSize,
        clickOnCell
    } = props;
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            width={fieldSize * cellSize}
        >
            {Array.from({ length: fieldSize * fieldSize }, (_, index) => (
                <Cell
                    key={index}
                    color={index & 1 ? 'lightcoral' : 'lightblue'}
                    size={200}
                    onClick={clickOnCell}
                >
                </Cell>
            ))}
        </Box>
    );
};

export default PlayingField;