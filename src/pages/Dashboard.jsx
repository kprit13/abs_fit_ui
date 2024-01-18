import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { Box, Container, Grid, Typography } from '@mui/material';
import api from '../infra/api';
import Footer from '../components/Footer';
import StaticContent from '../components/StaticContent';

const StyledBox = styled(Box)(({ theme }) => ({
  boxShadow: '0 4px 16px rgba(0,0,0,.04)',
  width: '100%',
  margin: '0 auto',
  backgroundColor: '#fff!important',
  borderRadius: '0.5rem!important',
  padding: '14px 21px',
}));

const Dashboard = () => {
  useEffect(() => {
    api('GET', 'catalog/product/listproducts?page=0&size=3').then((resp) => {
      console.log(resp);
    });
  }, []);
  return (
    <>
      <Carousel />
      <Container maxWidth='xl'>
        <StyledBox>
          <Typography variant='h4' mb={'14px'}>
            Products
          </Typography>
          <Grid container spacing={2}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </StyledBox>
        <StaticContent />
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
