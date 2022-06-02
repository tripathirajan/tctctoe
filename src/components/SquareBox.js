import React from 'react'
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { yellow, red, green } from '@mui/material/colors';

const _textColorPrimary = yellow;
const _textColorSecondary = red;

const StyledTyphographyInpt = styled((props) => <Typography {...props} />)({
    fontWeight: '800',
    fontFamily: 'Fredoka One',
    textTransform: 'uppercase'
});
const _textColor = {
    'X': _textColorPrimary[800],
    'O': _textColorSecondary[800]
}
const SquareBox = ({ value, row, col, handleBoxClick }) => {
    const winningBoxes = useSelector(state => state.game.winningBoxes);
    const textColor = _textColor[value || 'X'];
    const isWinner = winningBoxes.some(box => box[0] === row && box[1] === col);
    // console.info('SquraBox', row, col);

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 0.5,
                    minWidth: 110,
                    minHeight: 110,
                }
            }}
        >
            <Paper
                elevation={0}
                variant='outlined'
                onClick={(e) => handleBoxClick(e, row, col)}
                sx={{
                    cursor: 'pointer',
                    backgroundColor: isWinner ? green[400] : 'background.default',
                    borderRadius: 8
                }}
            >
                <StyledTyphographyInpt variant='h1' component="h2" align='center' sx={{ color: textColor }}>{value}</StyledTyphographyInpt>
            </Paper>
        </Box>
    )
}

SquareBox.propTypes = {
    value: PropTypes.string
}

export default React.memo(SquareBox);