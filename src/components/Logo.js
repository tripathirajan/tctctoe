import React from 'react'
import { Stack, Typography } from '@mui/material';
import { yellow, red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
const _textColorPrimary = yellow;
const _textColorSecondary = red;

const StyledTyphographyLogo = styled((props) => <Typography {...props} />)({
    fontWeight: '800',
    fontFamily: 'Fredoka One',
    textTransform: 'uppercase',
    color: _textColorPrimary[800]
});
const Logo = () => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <StyledTyphographyLogo variant='h2' align='center'>
                Tic
            </StyledTyphographyLogo>
            <StyledTyphographyLogo variant='h2' align='center' sx={{ color: _textColorSecondary[800] }}>
                Tac
            </StyledTyphographyLogo>
            <StyledTyphographyLogo variant='h2' align='center'>
                Toe
            </StyledTyphographyLogo>
        </Stack>
    )
}

Logo.propTypes = {}

export default Logo