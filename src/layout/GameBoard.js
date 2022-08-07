import React, { useEffect } from 'react'
import { Container, Stack, IconButton } from '@mui/material';
import Logo from '../components/Logo';
import Players from './Players';
import Celebrate from '../components/Celebrate';
import PlayingBoard from './PlayingBoard';
import { useDispatch, useSelector } from 'react-redux';
import Anouncement from './Anouncement';
import { stopCelebration, resetGame } from '../store/slices/GameSlice';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const RestartButton = styled(IconButton)({
    color: yellow[800],
    fontSize: '1.5rem',
    fontWeight: '800'
});

/**
 * 
 * @returns 
 */
const GameBoard = () => {
    const dispatch = useDispatch();

    const showCelebration = useSelector(state => state.game.showCelebration)
    const showAnnouncement = useSelector(state => state.game.showAnnouncement)
    const [showBoard, setShowBoard] = React.useState(false);
    useEffect(() => {
        if (showCelebration) {
            setTimeout(() => {
                dispatch(stopCelebration());
            }, 5000)
        }
    }, [showCelebration, dispatch]);

    useEffect(() => {
        if (showAnnouncement) {
            setTimeout(() => {
                setShowBoard(true)
            }, 1000)
        }
    }, [showAnnouncement])
    const handleRestart = () => {
        window.location.reload();
    }

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
                    showBoard ? (<><Anouncement />
                        <RestartButton
                            onClick={handleRestart}
                            variant="contained"
                            color="secondary">
                            <RestartAltIcon sx={{ fontSize: '5rem' }} />
                        </RestartButton></>)
                        : <PlayingBoard />
                }

            </Stack>
        </Container>
    )
}

export default GameBoard;
