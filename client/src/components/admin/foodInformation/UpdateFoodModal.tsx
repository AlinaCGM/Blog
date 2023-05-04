import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import UpdateFood from "../updateFood/UpdateFood";
import { FoodType } from "../../../types/foodType";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type PropType = {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  foodToModal:FoodType | undefined
};

export default function UpdateFoodModal({ open, setOpenModal,foodToModal }: PropType) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <UpdateFood foodToUpdate={foodToModal} setOpenModal={setOpenModal}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
