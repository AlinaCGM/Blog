import AddFood from "../components/admin/addFood/AddFood";
import FoodInformation from "../components/admin/foodInformation/FoodInformation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box } from "@mui/material";

const FoodMng = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state: RootState) => state.user.user);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  return (
    <div className="food-mng-page-container">
      {token && isLogin && user.isAdmin === true ? (
        <Box className="food-mng-page">
          <AddFood />
          <FoodInformation />
        </Box>
      ) : (
        <h2>You don't have access to this page!</h2>
      )}
    </div>
  );
};
export default FoodMng;
