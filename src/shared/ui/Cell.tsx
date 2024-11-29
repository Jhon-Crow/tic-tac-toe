import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import {ReactNode} from "react";

interface cellProps {
    color: string;
    size: number;
    children?: ReactNode;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Cell(props: cellProps) {
    const {
        color,
        size,
        children,
        disabled,
        onClick
    } = props;

    const ColorBox = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: size,
        width: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
        '&:hover': {
            opacity: 0.8,
        },
    }));

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => onClick(e);


    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
        }}>
                <ColorBox
                    disabled={disabled}
                    style={{
                        backgroundColor: color,
                    }}
                    onClick={onClickHandler}
                >
                    {children}
                </ColorBox>
        </Box>
    );
}

export default Cell