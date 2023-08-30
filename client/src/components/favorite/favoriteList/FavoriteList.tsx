import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { RootState } from "../../../redux/store";
import FavoriteItem from "../favoriteItem/FavoriteItem";

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import BookmarkFavorite from "@mui/icons-material/BookmarkAddOutlined";

const FavoriteList = () => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favorites
  );

  if (!isLogin) {
    return (
      <Box sx={{ width: "90%", marginInline: "auto", textAlign: "center" }}>
        <Typography variant="h6">
          Please log in to view your favorites!
        </Typography>
        <Link to="/logIn">
          <Button sx={{ textAlign: "center" }}>
            <Typography>LOG IN</Typography>
          </Button>
        </Link>
        {/* You can add a button/link here to direct the user to the login page if needed */}
      </Box>
    );
  }

  return (
    <Box sx={{ width: "90%", marginInline: "auto" }}>
      {favoriteList.length === 0 ? (
        <div>
          <Tooltip title="Back to products">
            <Link to="/products">
              <IconButton>
                <BookmarkFavorite sx={{ fontSize: "50px" }} />
              </IconButton>
            </Link>
          </Tooltip>
          <em>Please add food recipe to the Favourites!</em>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {favoriteList.map((item, index) => {
            return <FavoriteItem key={item._id} favorite={item} />;
          })}
        </Box>
      )}
    </Box>
  );
};

export default FavoriteList;
