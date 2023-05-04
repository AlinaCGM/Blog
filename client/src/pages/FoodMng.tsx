import AddFood from "../components/admin/addFood/AddFood";
import FoodInformation from "../components/admin/foodInformation/FoodInformation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const FoodMng = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state: RootState) => state.user.user);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  return (
    <div className="food-mng-page-container">
      {token && isLogin && user.isAdmin === true ? (
        <div className="food-mng-page">
          <AddFood />
          <FoodInformation />
        </div>
      ) : (
        <h2>You don't have access to this page!</h2>
      )}
    </div>
  );
};
export default FoodMng;
