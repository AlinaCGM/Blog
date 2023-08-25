import { url } from "../../App";
import { AppDispatch } from "../store";
import { foodActions } from "./../slice/food";

export function fetchFoodDetail(id: string | undefined) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${url}/food/get/${id}`);
    const data = await response.json();
    dispatch(foodActions.getFoodDetail(data));
  };
}
