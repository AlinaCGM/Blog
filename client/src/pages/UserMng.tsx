import { Box } from "@mui/material";
import UserManagement from "../components/admin/userMng/UserManagement";

function UserMng() {
  return (
    <Box style={{ width: "90%", marginInline: "auto" }}>
      <UserManagement />
    </Box>
  );
}

export default UserMng;
