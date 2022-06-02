import React, { useEffect } from 'react'
import { Container, Stack } from '@mui/material';
import Logo from '../components/Logo';
import Players from './Players';
import Celebrate from '../components/Celebrate';
import PlayingBoard from './PlayingBoard';
import { useDispatch, useSelector } from 'react-redux';
import Anouncement from './Anouncement';
import { stopCelebration } from '../store/slices/GameSlice';

/**
 * 
 * @returns 
 */
const GameBoard = () => {
    const dispatch = useDispatch();
    const showCelebration = useSelector(state => state.game.showCelebration)
    const showAnnouncement = useSelector(state => state.game.showAnnouncement)

    useEffect(() => {
        if (showCelebration) {
            setTimeout(() => {
                dispatch(stopCelebration());
            }, 5000)
        }
    }, [showCelebration, dispatch]);
    return (
        <Container maxWidth="lg">
            <Celebrate show={showCelebration} />
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{ mx: '2px', transform: 'scale(0.8)' }}
            >
                <Logo />
                <Players />
                {
                    showAnnouncement ? <Anouncement /> : <PlayingBoard />
                }

            </Stack>
        </Container>
    )
}

export default GameBoard;
