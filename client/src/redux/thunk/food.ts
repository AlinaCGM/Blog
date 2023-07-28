import { foodActions } from "../slice/food";
import { AppDispatch } from "../store";
import { url } from "../../App";

export function fetchFoodData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${url}/food`);
    const data = await response.json();
    dispatch(foodActions.getFoodList(data));
  };
}
