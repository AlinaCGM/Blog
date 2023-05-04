import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import Button from "@mui/material/Button";
import { CommentType } from "../../../types/commentType";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type PropType = {
  comment: CommentType;
};
const CommentItem = ({ comment }: PropType) => {
  const user = useSelector((state: RootState) => state.user.user);
  const action = (
    <Button color="secondary" size="small">
      {user.firstName}
    </Button>
  );
  return (
    <div>
      <h1>comment</h1>
      <Stack spacing={2} sx={{ maxWidth: 600, ml: 30 }}>
        <SnackbarContent message={comment.message} action={action} />
      </Stack>
    </div>
  );
};
export default CommentItem;
