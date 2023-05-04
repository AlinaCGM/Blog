
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/store';
import FoodDetail from './../components/food/foodDetail/FoodDetail';
import { fetchFoodDetail } from './../redux/thunk/foodDetail';

const DetailedFood = () => {
  const { id } = useParams();
  const foodDetail = useSelector(
    (state: RootState) => state.food.foodDetail
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFoodDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <FoodDetail food={foodDetail} />
    </div>
  );
};
export default DetailedFood;