import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Rating,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  ButtonGroup,
} from "@mui/material";
import BreadcrumbsCust from "../components/Breadcrumbs";

// Mock data for the product
const productData = {
  name: "Ultimate Nutrition ISO Sensation 93 with Glutamine, Whey Protein Isolate Powder, 30 Grams of Protein, Low Carb Protein Shakes, Keto Friendly, 5 lbs, 2.27 kg",
  price: "₹6,599",
  originalPrice: "₹10,999",
  rating: 4.5,
  reviewCount: 9,
  availability: "In stock",
  flavors: ["Chocolate Fudge", "Vanilla Bean", "Strawberry"],
  images: [
    "https://dukaan.b-cdn.net/700x700/webp/media/7dbfa7e5-4390-4960-b755-766dbab0c869.jpg",
    "https://dukaan.b-cdn.net/700x700/webp/media/bd1e1a96-6efa-409a-8c50-3dc219314b48.jpg",
    "https://dukaan.b-cdn.net/700x700/webp/media/7830a831-ff73-4e7a-92ad-8ddcd17beaea.jpg",
    "https://dukaan.b-cdn.net/700x700/webp/media/4c98df3f-5786-4118-8811-bbda08208ded.jpg",
  ],
  tags: [
    {
      url: "https://dukaan.b-cdn.net/100x100/webp/upload_file_service/7250c3c6-c01d-436e-9e1a-f33bd17bfe73/Frame%2039292.png",
      text: "Authenticity Guaranteed",
    },
    {
      url: "https://dukaan.b-cdn.net/100x100/webp/upload_file_service/b01708b8-44fc-407c-b553-202f457d926e/Frame39293.png",
      text: "Free Shipping",
    },
    {
      url: "https://dukaan.b-cdn.net/100x100/webp/upload_file_service/dd947d5a-9814-42a2-aa43-23ff0f4f293a/Frame39294.png",
      text: "Cash On Delivery",
    },
  ],
};

const ProductDetails = () => {
  // Local state for selected flavor
  const [selectedFlavor, setSelectedFlavor] = React.useState(
    productData.flavors[0]
  );
  const [selectedImage, setSelectedImage] = React.useState(
    productData.images[0]
  );
  const [count, setCount] = React.useState(0);
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const getButtonView = () => {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        height="100%"
      >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          // Remove fullWidth if the buttons are too stretched
        >
          <Button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
            // Remove the width if it's causing misalignment
          >
            -
          </Button>
          <Box
            mx={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            // Remove the width if it's causing misalignment
          >
            {count}
          </Box>
          <Button
            onClick={() => setCount(count + 1)}
            // Remove the width if it's causing misalignment
          >
            +
          </Button>
        </ButtonGroup>
      </Box>
    );
  };

  return (
    <Container maxWidth={"xl"}>
      <BreadcrumbsCust links={["Dashboard", "Categories"]} text={"Product"} />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Box>
              <img
                src={selectedImage}
                alt="Product"
                style={{ width: "100%", maxWidth: "500px", height: "500px" }}
              />
            </Box>
            {/* Image gallery slider goes here */}
            {/*<img src="https://dukaan.b-cdn.net/700x700/webp/media/7dbfa7e5-4390-4960-b755-766dbab0c869.jpg" alt="Product" style={{ width: '100%', height: 'auto' }} />*/}
            {/* Thumbnails or slider for additional images */}
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              {productData.images.map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={image}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleThumbnailClick(image)}
                  sx={{
                    width: "60px",
                    height: "60px",
                    marginRight: "10px",
                    cursor: "pointer",
                    border: selectedImage === image ? "2px solid #1976d2" : "",
                  }}
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h1" gutterBottom>
              {productData.name}
            </Typography>
            <Rating name="read-only" value={productData.rating} readOnly />
            <Typography variant="body2" gutterBottom>
              {`${productData.reviewCount} Customer ratings`}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              {productData.originalPrice}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {productData.price}{" "}
              <Typography variant="subtitle1" component="span">
                (40% OFF)
              </Typography>
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                  Availability: {productData.availability}
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="flavor-select-label">
                    Select Flavor
                  </InputLabel>
                  <Select
                    labelId="flavor-select-label"
                    id="flavor-select"
                    value={selectedFlavor}
                    label="Select flavor"
                    onChange={(event) => setSelectedFlavor(event.target.value)}
                  >
                    {productData.flavors.map((flavor) => (
                      <MenuItem key={flavor} value={flavor}>
                        {flavor}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                  Quantity
                </Typography>
                {getButtonView()}
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={4}>
              <Grid item xs={12} md={6} fullWidth>
                <Button
                  disabled={count < 1}
                  variant="contained"
                  color="primary"
                >
                  Buy Now
                </Button>
              </Grid>
              <Grid item xs={12} md={6} fullWidth>
                <Button
                  disabled={count < 1}
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
            <section style={{ width: "100%", marginTop: "20px" }}>
              <div
                style={{
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                {productData.tags.map((tag, index) => {
                  return (
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        display: "flex",
                      }}
                    >
                      <Box
                        key={index}
                        component="img"
                        src={tag.url}
                        alt={`Tags ${index}`}
                        sx={{
                          width: "60px",
                          height: "60px",
                          marginRight: "10px",
                          cursor: "pointer",
                          objectFit: "contain",
                        }}
                      />
                      <Typography variant="h6" gutterBottom>
                        {tag.text}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </section>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;
