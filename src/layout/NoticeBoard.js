import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const NoticeBoard = () => {
    const status = useSelector(state => state.game.noticeBoard);

    return (
        <Card
            variant='outlined'
            elevation={0}
        >
            <CardContent><Typography variant='h6' align="center" >{status}</Typography></CardContent>
        </Card>
    )
}

export default NoticeBoard