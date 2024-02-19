import { styled } from "@mui/system";
import Rating from "@mui/material/Rating";

const StarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const CustomRating = styled(Rating)(({ theme }) => ({
  color: theme.palette.primary.main, // Light blue color
  marginRight: "4px",
}));

const Text = styled("div")(({ theme }) => ({
  color: "#1a181e",
  fontSize: "12px!important",
  lineHeight: "16px!important",
  fontWeight: "bold",
  zIndex: 998,
  [theme.breakpoints.up("lg")]: {
    fontSize: "14px!important",
    lineHeight: "20px!important",
    marginLeft: "6px",
  },
}));

const RatingStars = ({ rating, count }) => {
  return (
    <StarContainer>
      <CustomRating value={rating} precision={0.1} readOnly />
      <Text>{count} Reviews</Text>
    </StarContainer>
  );
};

const ReviewsView = (props) => {
  const { rating, count } = props;
  return (
    <div style={{ marginLeft: "20px" }}>
      <RatingStars rating={4.6} count={50} />
    </div>
  );
};

export default ReviewsView;
