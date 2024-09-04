import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import ContactBtn from "./ContactBtn";
const ContactModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
        xs: 300, // 0px to 425px
        sm: 500 // 426px and above
      },
          bgcolor: "background.paper",
    border: "0px solid #000",
    boxShadow: 24,
borderRadius:5,
    p: 4,
  };
  return (
    <div className="contactBtn float-bob-y ">
      <a href="https://wa.me/905540172222" target="_blank">
        <ContactBtn />
      </a>
    </div>
  );
};

export default ContactModal;
