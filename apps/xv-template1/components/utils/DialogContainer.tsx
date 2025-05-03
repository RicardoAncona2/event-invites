"use client"

import { Box, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react"

const DialogContainer = () => {
    const [dialogStatus, setDialogStatus] = useState(false);
    const closeDialog = () => { setDialogStatus(false) }
    return (<Dialog open={dialogStatus} onClose={closeDialog} fullWidth maxWidth="sm">
        <DialogTitle>Edit Invitation</DialogTitle>
        <form onSubmit={() => { }}>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2}>
                </Box>
            </DialogContent>
        </form>
    </Dialog>)
}
export default DialogContainer