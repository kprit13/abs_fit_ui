import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import api from "../infra/api";
import StaticContent from "../components/StaticContent";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/slices/ProductCatalogSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import _get from "lodash/get";

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: "0 4px 16px rgba(0,0,0,.04)",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#fff!important",
  borderRadius: "0.5rem!important",
  padding: "14px 21px",
}));

const Dashboard = () => {
  const [page, setPage] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(true);
  const products = useSelector((state) => state.ProductCatalog.products);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    dispatch(actions.RESET_PRODUCTS());
    api("GET", `catalog/product/listproducts?page=${page}&size=10`).then(
      (resp) => {
        const newProducts = resp.content;
        dispatch(actions.SET_PRODUCTS(newProducts));
        setPage((prevPage) => prevPage + 1);
        setHasMore(false);
      }
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Carousel />
      <Container maxWidth="xl">
        <StyledBox>
          <Typography variant="h4" mb={"14px"}>
            Products
          </Typography>
          <InfiniteScroll
            dataLength={1}
            next={fetchProducts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollThreshold="80%"
          >
            <Grid container spacing={2}>
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </Grid>
          </InfiniteScroll>
        </StyledBox>
        <StaticContent />
      </Container>
    </>
  );
};

export default Dashboard;
