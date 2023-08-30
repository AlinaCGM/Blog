import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import Button from "@mui/material/Button";
import { CommentType } from "../../types/commentType";
import { Box, Typography } from "@mui/material";

const StyledSnackbarContent = styled(SnackbarContent)(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  color: theme.palette.grey[500],
  textAlign: "center",
}));

type PropType = {
  comment: CommentType;
};

const CommentItem = ({ comment }: PropType) => {
  // console.log(comment, "userComment from CommentItem.ts");

  const action = (
    <Button color="secondary" size="small">
      {new Date(comment.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </Button>
  );

  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          sm: "60%",
          md: "50%",
          lg: "40%",
        },
        margin: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "right", color: "grey", marginBlock: "20px" }}
      ></Typography>

      <Stack spacing={2}>
        <StyledSnackbarContent message={comment.message} action={action} />
      </Stack>
    </Box>
  );
};

export default CommentItem;
