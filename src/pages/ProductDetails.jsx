import { Box, Container, Grid } from "@mui/material";
import BreadcrumbsCust from "../components/Breadcrumbs";

const ProductDetails = (props) => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "136px" }}>
      <BreadcrumbsCust links={["Dashboard", "Categories"]} text={"Product"} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box margin={2} style={{ border: "1px solid #e0e0e0" }}>
            <img
              src="https://dukaan.b-cdn.net/700x700/webp/media/7dbfa7e5-4390-4960-b755-766dbab0c869.jpg"
              alt="cat-img"
            ></img>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          details
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
