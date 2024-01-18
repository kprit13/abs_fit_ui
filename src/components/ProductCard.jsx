import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import ReviewsView from './ReviewsView';
import ProductModal from './ProductModal';

const Logo = styled((props) => {
  const { src } = props;
  return (
    <div>
      <img
        src={src}
        alt='brandlogo'
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
})(({ theme }) => ({
  objectFit: 'contain',
  borderRadius: '50%',
  height: '32px!important',
  width: '32px!important',
  maxWidth: 70,
  maxHeight: 50,
  [theme.breakpoints.up('lg')]: {
    height: '44px!important',
    width: '44px!important',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  aspectRatio: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  display: 'flex',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const RibbonContainer = styled('div')({
  position: 'relative',
  overflow: 'visible',
  paddingLeft: '20px', // Add padding to the left of the container
});

const Ribbon = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '10%',
  left: '0', // Set left to 0
  transform: 'translateY(-50%)',
  height: 'fit-content',
  maxWidth: '75px',
  width: 'auto',
  background: '#f44336!important',
  color: '#fff',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  borderRadius: '0 0 12px!important',
  zIndex: 999,
  padding: '0 18px!important',
  fontWeight: 'bold',
  [theme.breakpoints.up('lg')]: {
    borderRadius: '4px',
    maxWidth: '106px',
    left: '-7px', // Adjust the left position
    fontSize: '16px!important',
    lineHeight: '24px!important',
  },
}));

const ActionContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const PriceView = styled('div')(({ theme }) => ({
  marginBottom: '0.5rem',
  alignItems: 'flex-start',
  display: 'flex',
  [theme.breakpoints.up('lg')]: {
    marginBottom: 0,
    flexDirection: 'column',
  },
}));

const Text = styled('p')(({ theme }) => ({
  margin: '0 0.5rem',
  textDecoration: 'line-through',
  fontWeight: 300,
}));

const ProductCard = () => {
  const [showProductModal, setShowProductModal] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const closeProductModal = () => {
    setShowProductModal(false);
  };
  const openProductModal = () => {
    setShowProductModal(true);
  };

  const getButtonView = () => {
    if (count > 0) {
      return (
        <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
        >
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <Box mx={2} display='flex' alignItems='center'>
            {count}
          </Box>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </ButtonGroup>
      );
    } else {
      return (
        <Button
          variant='contained'
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
      {showProductModal && (
        <ProductModal
          open={showProductModal}
          closeHandler={closeProductModal}
        />
      )}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            maxWidth: 345,
            border: '1px solid #e5e5e5',
            borderRadius: '6px',
          }}
        >
          <CardHeader
            avatar={
              <Logo
                src={
                  'https://dukaan.b-cdn.net/100x100/webp/upload_file_service/a69d7376-7b9a-402a-ab63-d376f81a3a85/download-4.png'
                }
              ></Logo>
            }
            title='Ultimate Nutrition Prostar 100% Whey Protein, 5.28 lbs, 2.39 kg'
          />
          <CardMedia component='div'>
            <RibbonContainer>
              <StyledImage
                src={
                  'https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp'
                }
                alt={'prod-img'}
              />

              <Ribbon>{'45% OFF'}</Ribbon>
            </RibbonContainer>
            <ReviewsView />
          </CardMedia>

          <div style={{ margin: '4px 20px' }}>
            <ActionContainer>
              <PriceView>
                <h3 style={{ margin: 0 }}>₹5,549</h3>
                <div>
                  <Text>₹9,499</Text>
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
