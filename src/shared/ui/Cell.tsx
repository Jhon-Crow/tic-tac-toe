import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import {memo, ReactNode} from 'react';

interface CellProps {
    id: string;
    color: string;
    size: number;
    children?: ReactNode;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ColorBox = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    '&:hover': {
        opacity: 0.8,
    },
}));

const Cell = memo((props: CellProps) => {
    const {
        id,
        color,
        size,
        children,
        disabled,
        onClick,
    } = props;

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => onClick(e);

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            <ColorBox
                disabled={disabled}
                style={{
                    backgroundColor: color,
                    height: size,
                    width: size,
                    fontSize: size,
                }}
                onClick={onClickHandler}
                id={id}
            >
                {children}
            </ColorBox>
        </Box>
    );
});

export default Cell;
