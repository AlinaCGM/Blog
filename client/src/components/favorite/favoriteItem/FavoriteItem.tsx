import { FoodType } from "../../../types/foodType";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { favoriteActions } from "../../../redux/slice/favorite";

type PropType = {
  favorite: FoodType;
};

const FavoriteItem = ({ favorite }: PropType) => {
  const dispatch = useDispatch();
  return (
    <TableBody className="cart-item">
      <TableRow
        key={favorite._id}
        sx={{
          "&:last-child td, &:last-child th": {
            borderBottom: "1px solid lightgrey",
          },
          bgColor: "none",
        }}
      >
        <TableCell align="center">
          <img src={favorite.image} height={80} alt={favorite.title} />
        </TableCell>
        <TableCell align="center">{favorite.title}</TableCell>
        <TableCell align="center">
          {favorite.description.slice(0, 200)} ...
        </TableCell>
        <TableCell align="center">
          <IconButton
            onClick={() =>
              dispatch(favoriteActions.removeFromFavorite(favorite))
            }
          >
            <FavoriteIcon sx={{ color: "red" }} />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default FavoriteItem;
