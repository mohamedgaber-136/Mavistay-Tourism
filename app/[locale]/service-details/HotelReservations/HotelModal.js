'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HotelsSliders from "./HotelsSliders";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  height:'95%',
  overflowY:'scroll',
  borderRadius: 5,
};

export default function HotelModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} className='w-100'>
        <div className="thumb w-100 h-100 rounded-3">
          <img src={item.mainImg} alt="img" />
          <div className="hotelTitle" style={{zIndex:'1'}}>
            <h5 className="text-white">{item.title}</h5>
          </div>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HotelsSliders data={item.imgs} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
