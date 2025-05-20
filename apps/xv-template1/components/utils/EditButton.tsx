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

interface EditButtonProps<T extends Record<string, string | number>> {
  label: string;
  props: T;
  updateFunction: (props: T) => Promise<void>;
  enableColorPicker?: boolean;
  enableTextField?: boolean

}

const EditButton = <T extends Record<string, string | number>>({
  label,
  props,
  updateFunction,
  enableColorPicker = false,
  enableTextField= true
}: EditButtonProps<T>) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(label);
  const [color, setColor] = useColor("#ffffff");
  const [isPending, startTransition] = useTransition();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editableKey = Object.keys(props).find((key) => key !== "id");

  const handleSave = async () => {
    if (!editableKey) return;

    const updatedProps = { ...props, [editableKey]: value };
    startTransition(() => updateFunction(updatedProps));
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen} color="primary">
        <EditIcon sx={{ color: "grey" }} />
      </IconButton>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Editar: {value}</DialogTitle>
        <DialogContent>
          {enableColorPicker && <Box className="custom-layout" mb={2}>
            <Saturation height={300} color={color} onChange={setColor} />
            <Hue color={color} onChange={setColor} />
            <TextField
              value={color.hex}
              onChange={(e) => setValue(e.target.value)}
              fullWidth
              variant="outlined"
              label="Edit Text"
            />
          </Box>}
{     enableTextField&&     <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            variant="outlined"
            label="Edit Text"
          />}
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
          >
            {isPending ? "Saving..." : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditButton;
