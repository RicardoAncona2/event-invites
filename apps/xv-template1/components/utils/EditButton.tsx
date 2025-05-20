"use client";

import React, { useState, useTransition } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Saturation, Hue, useColor } from "react-color-palette";
import "react-color-palette/css";

interface EditButtonProps<T> {
  label: string;
  props: T;
  updateFunction: (props: T) => Promise<void>;
}

const EditButton = <T extends Record<string, string | number>,>({
  label,
  props,
  updateFunction,
}: EditButtonProps<T>) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(label);
  const [isPending, startTransition] = useTransition();
  const [color, setColor] = useColor("black");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    const key = Object.keys(props)[1];
    const updatedProps = { ...props, [key]: value };

    startTransition(() => {
      updateFunction(updatedProps);
    });

    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen} color="primary">
        <EditIcon sx={{ color: "grey" }} />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <form action={handleSave}>
          <DialogTitle>{label}</DialogTitle>
          <DialogContent>
            <Box className="custom-layout">
              <Saturation height={300} color={color} onChange={setColor} />
              <Hue color={color} onChange={setColor} />
            </Box>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              fullWidth
              variant="outlined"
              label="Edit"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              disabled={isPending}
              type="submit"
            >
              {isPending ? "Saving..." : "Save"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default EditButton;