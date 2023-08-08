import { FoodType } from "../../../types/foodType";

import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { favoriteActions } from "../../../redux/slice/favorite";

type PropType = {
  favorite: FoodType;
};

const FavoriteItem = ({ favorite }: PropType) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, position: "relative" }}
        image={favorite.image}
        title="dish"
      >
        {" "}
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            border: "1px solid white",
            backgroundColor: "white",
          }}
          onClick={() => dispatch(favoriteActions.removeFromFavorite(favorite))}
        >
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {favorite.title}
        </Typography>

        <Typography>{favorite.category}</Typography>
        <Typography variant="body2" color="text.secondary">
          {favorite.description.slice(0, 200)}
        </Typography>
      </CardContent>
    </Card>

    // <TableBody
    //   className="cart-item"
    //   sx={{ border: "1px solid green", width: "90%" }}
    // >
    //   <TableRow
    //     key={favorite._id}
    //     sx={{
    //       "&:last-child td, &:last-child th": {
    //         borderBottom: "1px solid lightgrey",
    //       },
    //       bgColor: "none",
    //     }}
    //   >
    //     <TableCell align="center">
    //       <img src={favorite.image} height={80} alt={favorite.title} />
    //     </TableCell>
    //     <TableCell align="center">{favorite.title}</TableCell>
    //     <TableCell align="center">{favorite.category}</TableCell>
    //     <TableCell align="center">
    //       {favorite.description.slice(0, 200)} ...
    //     </TableCell>
    //     <TableCell align="center">
    //       <IconButton
    //         onClick={() =>
    //           dispatch(favoriteActions.removeFromFavorite(favorite))
    //         }
    //       >
    //         <FavoriteIcon sx={{ color: "red" }} />
    //       </IconButton>
    //     </TableCell>
    //   </TableRow>
    // </TableBody>
  );
};

export default FavoriteItem;
