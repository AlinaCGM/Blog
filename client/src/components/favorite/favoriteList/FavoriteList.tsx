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
} from "@mui/material";
import BookmarkFavorite from "@mui/icons-material/BookmarkAddOutlined";

const FavoriteList = () => {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favorites
  );

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

        // <Fragment>
        //   <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //       <TableHead>
        //         <TableRow sx={{ backgroundColor: "#e5e5e5" }}>
        //           <TableCell align="center">
        //             <strong>Food</strong>
        //           </TableCell>
        //           <TableCell align="center">
        //             <strong>Title</strong>
        //           </TableCell>
        //           <TableCell align="center">
        //             <strong>Category</strong>
        //           </TableCell>
        //           <TableCell align="center">
        //             <strong>Description</strong>
        //           </TableCell>
        //           <TableCell align="center">
        //             <strong>Remove</strong>
        //           </TableCell>
        //         </TableRow>
        //       </TableHead>
        //       {favoriteList.map((item, index) => {
        //         return <FavoriteItem key={item._id} favorite={item} />;
        //       })}
        //     </Table>
        //   </TableContainer>
        // </Fragment>
      )}
    </Box>
  );
};

export default FavoriteList;
