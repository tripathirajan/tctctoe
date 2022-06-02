import { Stack, Card, Avatar, Typography } from '@mui/material'
import React from 'react'
import Player1 from '../assets/images/player1.png';
import Player2 from '../assets/images/player2.png';
import { yellow, red, green } from '@mui/material/colors';

const _textColorPrimary = yellow;
const _textColorSecondary = red;
const _activeCard = green;

const _playerImg = {
    'X': Player1,
    'O': Player2
}
const _textColor = {
    'X': _textColorPrimary[800],
    'O': _textColorSecondary[800]
}

const PlayerCard = ({ name, value, activeIndex }) => {
    const avatar = _playerImg[value || 'X'];
    const textColor = _textColor[value || 'X'];
    const activeCardSx = activeIndex === value ? { backgroundColor: _activeCard[400] } : null;
    return (
        <Card
            sx={{
                borderRadius: 2,
                p: 1,
                ...activeCardSx
            }}
        >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
                sx={{ backgroundColor: 'background.default', borderRadius: 1, p: 2 }}
            >
                <Avatar
                    alt={`Player: ${value}`}
                    src={avatar}
                    sx={{ width: 56, height: 56 }}
                />
                <Typography variant='body' component='h2' align='center'>{name}</Typography>
                <Typography variant='h4' component='h2' sx={{ color: textColor, fontWeight: '800' }}>{value}</Typography>
            </Stack>
        </Card>
    )
}

export default PlayerCard