// src/App.jsx
import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);
  const [compliment, setCompliment] = useState("");

  const handleComplimentClick = (clickedCompliment) => {
    setCompliment(clickedCompliment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>丁寧に相手を貶そう</h1>
      <Button onClick={() => handleComplimentClick("素晴らしい！")}>褒め言葉を表示</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>褒め言葉</DialogTitle>
        <DialogContent>
          <DialogContentText>{compliment}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;