import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import Button from "@mui/material/Button";
import { CommentType } from "../../types/commentType";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./CommentItem.css";
import { Typography } from "@mui/material";
type PropType = {
  comment: CommentType;
};
const CommentItem = ({ comment }: PropType) => {
  console.log(comment, "userComment from CommentItem.ts");
  const userList = useSelector((state: RootState) => state.userList.usersData);
  const action = (
    <Button color="secondary" size="small">
      {comment.userId}
    </Button>
  );
  return (
    <div className="comment-item">
      <Typography>comment alina balerina</Typography>

      <Stack spacing={2} sx={{ maxWidth: 600, ml: 30 }}>
        <SnackbarContent message={comment.message} action={action} />
      </Stack>
    </div>
  );
};
export default CommentItem;
