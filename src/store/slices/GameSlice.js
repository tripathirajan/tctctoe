
import { createSlice } from '@reduxjs/toolkit'
import { calculateWinner, get2DEmptyMatrix, checkForDraw } from '../../helper'
import {
    GAME_STATUS_PLAYING,
    GAME_STATUS_WINNER,
    GAME_STATUS_DRAW,
    PLAYER_X, PLAYER_O,
    WINNER_IMAGE
} from '../constants';

const emptyMatrix = get2DEmptyMatrix();

const initialState = {
    players: [
        {
            avatar: '',
            name: 'Player 1',
            value: PLAYER_X
        },
        {
            avatar: '',
            name: 'Player 2',
            value: PLAYER_O
        }
    ],
    playingBoard: emptyMatrix,
    activePlayer: {
        avatar: '',
        name: 'Player 1',
        value: PLAYER_X
    },
    winner: null,
    showAnnouncement: false,
    showCelebration: false,
    gameStatus: GAME_STATUS_PLAYING,
    winningBoxes: [],
    anouncement: {
        title: '',
        avatar: '',
        message: ''
    }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        markCell: (state, action) => {
            const { row, col } = action.payload;
            const { playingBoard, activePlayer, players } = state;
            const { value } = activePlayer;
            const matrixClone = [...playingBoard];
            matrixClone[row][col] = value;
            const winningPlayer = calculateWinner(matrixClone);
            if (winningPlayer) {
                const { winningValue, winningBoxes } = winningPlayer;
                state.winningBoxes = winningBoxes;
                const winnerPlayer = players.find(player => player.value === winningValue.toString());
                state.winner = winnerPlayer;
                state.showAnnouncement = true;
                state.gameStatus = GAME_STATUS_WINNER;
                state.anouncement = {
                    title: 'Congratulation!',
                    avatar: WINNER_IMAGE,
                    message: `${winnerPlayer.name} won!`
                };
                state.showCelebration = true;
            } else {
                const isDraw = checkForDraw(playingBoard);
                if (isDraw) {
                    state.showAnnouncement = true;
                    state.gameStatus = GAME_STATUS_DRAW;
                    state.anouncement = {
                        title: 'Draw!',
                        avatar: 'failure',
                        message: 'No one won!'
                    };
                    state.showCelebration = false;
                }
            }
            state.playingBoard = matrixClone;
        },
        setNextActivePlayer: (state) => {
            const { players, activePlayer } = state;
            const { value } = activePlayer;
            const nextPlayer = players.find(player => player.value !== value.toString());
            state.activePlayer = nextPlayer;
        },
        resetGame: (state, action) => {
            return initialState;
        },
        stopCelebration: (state) => {
            state.showCelebration = false;
        }

    }
})

// Action creators are generated for each case reducer function
export const { markCell, setNextActivePlayer, stopCelebration, resetGame } = gameSlice.actions

export default gameSlice.reducer