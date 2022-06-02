import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Stack } from '@mui/material';
import SquareBox from '../components/SquareBox';
import { useDispatch, useSelector } from 'react-redux';
import { markCell, setNextActivePlayer } from '../store/slices/GameSlice';

const PlayingBoard = () => {
    const dispatch = useDispatch();
    const board = useSelector(state => state.game.playingBoard);
    const winner = useSelector(state => state.game.winner);
    const handleBoxClick = (e, row, col) => {
        if (winner) {
            e.preventDefault();
        }
        dispatch(markCell({ row, col }));
        dispatch(setNextActivePlayer());
    }

    return (
        <Card
            variant='outlined'
            elevation={0}
            sx={{ mx: 2, borderRadius: 8 }}
        >
            <CardContent>

                <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={1}
                >
                    {
                        board.map((rows, rowNumber) => (<Stack key={`${rowNumber}`}
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                            spacing={1}
                        >
                            {
                                rows.map((value, colNumber) =>
                                    <SquareBox key={`${rowNumber}-${colNumber}`} value={value} row={rowNumber} col={colNumber} handleBoxClick={handleBoxClick} />
                                )
                            }
                        </Stack>)
                        )
                    }
                </Stack>
            </CardContent>
        </Card>
    )
}

PlayingBoard.propTypes = {
    handleBoxClick: PropTypes.func
}

export default PlayingBoard;