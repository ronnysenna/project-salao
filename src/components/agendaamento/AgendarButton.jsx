import React, { useState } from "react"
import { Button, Modal, Box, Typography, TextField } from "@mui/material"
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300, // Aumentei a largura do modal para evitar quebra
  bgcolor: "background.paper",
  border: "none", // Removi a borda preta
  borderRadius: "8px", // Bordas arredondadas
  boxShadow: 24,
  p: 4, // Padding interno do modal
}

const AgendarButton = () => {
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [selectedTime, setSelectedTime] = useState(dayjs())

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue)
  }

  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue)
  }

  const handleAgendar = () => {
    console.log("Data selecionada:", selectedDate.format("DD/MM/YYYY"))
    console.log("Horário selecionado:", selectedTime.format("HH:mm"))
    handleClose()
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Agendar
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="agendar-modal-title"
      >
        <Box sx={style}>
          <Typography
            id="agendar-modal-title"
            variant="h5"
            component="h2"
            gutterBottom
          >
            Agendar Data e Horário
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Selecione a Data"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal" // Usei 'normal' para garantir espaçamento suficiente
                />
              )}
            />
            <TimePicker
              label="Selecione o Horário"
              value={selectedTime}
              onChange={handleTimeChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal" // Usei 'normal' para garantir espaçamento suficiente
                />
              )}
            />
          </LocalizationProvider>

          <Button
            variant="contained"
            color="primary"
            onClick={handleAgendar}
            sx={{ mt: 2, width: "100%" }}
          >
            Agendar
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default AgendarButton
