import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import Button from "@mui/material/Button";
import { CommentType } from "../../types/commentType";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./CommentItem.css";
import { Typography } from "@mui/material";
type PropType = {
  userComment: CommentType;
};
const CommentItem = ({ userComment }: PropType) => {
  console.log(userComment, "userComment from CommentItem.ts");
  const user = useSelector((state: RootState) => state.user.user);
  const action = (
    <Button color="secondary" size="small">
      {user.firstName}
    </Button>
  );
  return (
    <div className="comment-item">
      <Typography>comment alina balerina</Typography>
      <Stack spacing={2} sx={{ maxWidth: 600, ml: 30 }}>
        <SnackbarContent message={userComment.message} action={action} />
      </Stack>
    </div>
  );
};
export default CommentItem;
