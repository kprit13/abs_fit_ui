import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import ReviewsView from "./ReviewsView";
import ProductModal from "./ProductModal";
import _get from "lodash/get";
import { CurrencyFormatter } from "../common/utils";

const Logo = styled((props) => {
  const { src } = props;
  return (
    <div>
      <img
        src={src}
        alt="brandlogo"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
})(({ theme }) => ({
  objectFit: "contain",
  borderRadius: "50%",
  height: "32px!important",
  width: "32px!important",
  maxWidth: 70,
  maxHeight: 50,
  [theme.breakpoints.up("lg")]: {
    height: "44px!important",
    width: "44px!important",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  aspectRatio: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  alignItems: "center",
  display: "flex",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const RibbonContainer = styled("div")({
  position: "relative",
  overflow: "visible",
  paddingLeft: "20px", // Add padding to the left of the container
});

const Ribbon = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "10%",
  left: "0", // Set left to 0
  transform: "translateY(-50%)",
  height: "fit-content",
  maxWidth: "75px",
  width: "auto",
  background: "#f44336!important",
  color: "#fff",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  borderRadius: "0 0 12px!important",
  zIndex: 998,
  padding: "0 18px!important",
  fontWeight: "bold",
  [theme.breakpoints.up("lg")]: {
    borderRadius: "4px",
    maxWidth: "106px",
    left: "-7px", // Adjust the left position
    fontSize: "16px!important",
    lineHeight: "24px!important",
  },
}));

const ActionContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const PriceView = styled("div")(({ theme }) => ({
  marginBottom: "0.5rem",
  alignItems: "flex-start",
  display: "flex",
  [theme.breakpoints.up("lg")]: {
    marginBottom: 0,
    flexDirection: "column",
  },
}));

const Text = styled("p")(({ theme }) => ({
  margin: "0 0.5rem",
  textDecoration: "line-through",
  fontWeight: 300,
}));

const ProductCard = ({ product }) => {
  const [count, setCount] = React.useState(0);
  const { buyPrice, onSalePrice } = _get(product, "productVariants[0]");

  const getDiscount = () => {
    return 100 - Math.round((onSalePrice / buyPrice) * 100);
  };

  const getButtonView = () => {
    if (count > 0) {
      return (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <Box mx={2} display="flex" alignItems="center">
            {count}
          </Box>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </ButtonGroup>
      );
    } else {
      return (
        <Button
          variant="contained"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <b>Add</b>
        </Button>
      );
    }
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            maxWidth: 345,
            border: "1px solid #e5e5e5",
            borderRadius: "6px",
          }}
        >
          <CardHeader
            avatar={
              <Logo
                src={
                  "https://dukaan.b-cdn.net/100x100/webp/upload_file_service/a69d7376-7b9a-402a-ab63-d376f81a3a85/download-4.png"
                }
              ></Logo>
            }
            title={product.productName}
          />
          <CardMedia component="div">
            <RibbonContainer>
              <StyledImage
                src={
                  "https://absolute-health.blr1.digitaloceanspaces.com/products/b48e95f7-4e66-44bd-b24d-deb2f4af17fc/variants/2fc1d001-d243-45bd-83dc-fe7af9cf3ca8/ON_Protein_Front_View.jpg"
                }
                alt={"prod-img"}
              />

              <Ribbon>{`${getDiscount()}% OFF`}</Ribbon>
            </RibbonContainer>
            <ReviewsView />
          </CardMedia>

          <div style={{ margin: "4px 20px" }}>
            <ActionContainer>
              <PriceView>
                <h3 style={{ margin: 0 }}>
                  <CurrencyFormatter amount={onSalePrice} currency="INR" />
                </h3>
                <div>
                  <Text>
                    <CurrencyFormatter amount={buyPrice} currency="INR" />
                  </Text>
                </div>
              </PriceView>
              {getButtonView()}
            </ActionContainer>
          </div>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
