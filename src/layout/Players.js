import React from 'react'
import { Stack } from '@mui/material';
import PlayerCard from '../components/PlayerCard';
import { useSelector } from 'react-redux';

const Players = () => {
    const players = useSelector(state => state.game.players);
    const { value } = useSelector(state => state.game.activePlayer);
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            {
                players.map((player, index) => <PlayerCard key={index} {...player} activeIndex={value} />)
            }
        </Stack>
    )
}

export default Players