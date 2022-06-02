import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from '@mui/material';

const MsgBox = ({ open, title, msg, handleClose }) => {

    return (
        <Dialog
            fullScreen={false}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {msg}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Start again
                </Button>
            </DialogActions>
        </Dialog>
    )
}


export default MsgBox