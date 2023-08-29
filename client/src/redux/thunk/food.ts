import { foodActions } from "../slice/food";
import { AppDispatch } from "../store";
import { url } from "../../App";
// import axios from "axios";

export function fetchFoodData() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${url}/food`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(foodActions.getFoodList(data));
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        (error as Error).message
      );
    }
  };
}
