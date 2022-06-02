import React from 'react'
import { Card, CardContent, Stack, Avatar, Typography } from '@mui/material';
import winner from '../assets/images/winner.png';
import failure from '../assets/images/failure.png';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { useSelector } from 'react-redux';

const StyledTyphography = styled((props) => <Typography {...props} />)({
    fontWeight: '800',
    fontFamily: 'Fredoka One',
    color: yellow[800],
    textShadow: '2px 5px 4px #2323237a'
});
const statusImg = {
    'winner': winner,
    'failure': failure
}
const Anouncement = () => {
    const { title, avatar, message } = useSelector(state => state.game.anouncement);
    const avtarSrc = statusImg[avatar];
    return (
        <Card
            variant='outlined'
            elevation={0}
            sx={{ borderRadius: 8 }}
        >
            <CardContent>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                    sx={{ borderRadius: 1, p: 2 }}
                >
                    <StyledTyphography variant='h4' component='h2'>{title}</StyledTyphography>
                    <Avatar
                        alt={'emotion'}
                        src={avtarSrc}
                        sx={{ width: 172, height: 172 }}
                    />
                    <Typography variant='body' component='h2' sx={{ color: yellow[800], }}>{message}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Anouncement;