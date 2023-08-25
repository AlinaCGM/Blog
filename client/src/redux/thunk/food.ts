import { foodActions } from "../slice/food";
import { AppDispatch } from "../store";
import { url } from "../../App";
// import axios from "axios";

export function fetchFoodData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${url}/food`);
    const data = await response.json();
    dispatch(foodActions.getFoodList(data));
  };
}
// export function fetchRateByFoodId(foodId: string) {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const response = await axios.get(`${url}/getRate/${foodId}`);
//       const data = await response.data;
//       console.log(data.rate, "rate in thunk"); // Log the retrieved rate
//       dispatch(foodActions.addRate({ foodId, rate: data.rate }));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
