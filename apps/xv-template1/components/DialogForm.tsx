import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  createTheme,
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { VisuallyHiddenInput } from "./styled/VisuallyHiddenInput";
import { SketchPicker } from 'react-color';
interface DialogFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: { [key: string]: string }) => void;
}

const DialogForm: React.FC<DialogFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: "",
    parents: "",
    godparents: "",
    eventDate: "",
    heroImage: "",
    gallery: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };
  const [primaryColor, setPrimaryColor] = useState('#2196f3');

  const theme = createTheme({
    palette: {
      primary: { main: primaryColor },
    },
  });

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      
    </Dialog>
  );
};

export default DialogForm;