export type FoodType = {
  _id: string;
  title: string;
  category: string;
  description: {
    ingredients: string[];
    instructions: string[];
  };
  image: string;
  status: boolean;
  rate: number;
};
