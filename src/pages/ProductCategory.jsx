import { Box, Container } from "@mui/material";
import BreadcrumbsCust from "../components/Breadcrumbs";
import styled from "@emotion/styled";

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: "0 4px 16px rgba(0,0,0,.04)",
  width: "100%",
  margin: "20px auto",
  backgroundColor: "#fff!important",
  borderRadius: "0.5rem!important",
  padding: "14px 21px",
}));

const StyledImage = styled("img")(({ theme }) => ({
  aspectRatio: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  alignItems: "center",
  display: "flex",
  margin: "8px auto",
}));

const ProductCategory = () => {
  return (
    <Container maxWidth="xl">
      <StyledBox>
        <BreadcrumbsCust links={["Dashboard", "Categories"]} text={"Product"} />
        <StyledImage
          src={
            "https://dukaan.b-cdn.net/1000x1000/webp/upload_file_service/225ee834-90b8-46f9-8ca7-185e5065c004/image.png"
          }
          alt={"prod-img"}
        />
      </StyledBox>
    </Container>
  );
};

export default ProductCategory;
