import styled from '@emotion/styled';
import { Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center', // Center items vertically
  padding: '0px',
  '& .MuiListItemText-root': {
    marginLeft: theme.spacing(2), // Adjust the left margin as needed
  },
}));

const CircleIconStyled = styled(CircleIcon)({
  fontSize: 10,
});

const StaticContent = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ margin: '32px 0px' }}>
        <div
          sx={{
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{
              marginBottom: '0.5rem',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            Bodybuilding, Fitness, Health & Nutritional Supplements Online Store
          </Typography>
          <Typography fontWeight={400}>
            Being fit requires more than exercise/workout. You need proper
            nutrition and supplement to keep up with your fitness goals along
            with the time constraints. All you need is a one-stop-shop where
            it's more than just buying and HealthXP is one solution to your many
            problems. Right from guiding on personal fitness training to
            consulting about necessary supplements and protein, it keeps you at
            ease in buying 100% genuine and authentic health supplements.
            <br />
            We cater to all your fitness needs through our online channel across
            all cities in India. HealthXP works as your nutritionist,
            supplement/protein expert, and provider of all the necessary tools
            and products you need to stay fit.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: '32px' }}>
        <div
          sx={{
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{
              marginBottom: '0.5rem',
              fontSize: '18px',
              lineHeight: '26px',
            }}
          >
            Our Speciality
          </Typography>
          <Typography fontWeight={400} sx={{ marginBottom: '0.5rem' }}>
            HealthXP entered the fitness world with a pledge to deliver
            authenticity. From whey protein, mass gainers, pre/post workout
            essentials, to any other nutritional supplement/product you need,
            HealthXP is your go-to fitness expert. Apart from this, there are
            other features that make HealthXP one of the best websites to buy
            supplements, such as:
          </Typography>
          <List padding={0}>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                Wide range of product categories with top brands like Optimum
                Nutrition, GAT sports, Muscletech, Isopure, etc.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                Fitness plans with in-depth video material on different
                exercises and forms, workouts, nutrition data, and much more.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                Comparison and Consultation about the right product for your
                fitness goal.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Exciting discounts & offers</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                100% authentic online protein supplements
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Easy Delivery and Return Policy</ListItemText>
            </StyledListItem>
          </List>
        </div>
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: '32px' }}>
        <div sx={{ flexDirection: 'column', display: 'flex' }}>
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{
              fontSize: '18px',
              lineHeight: '26px',
              marginBottom: '0.5rem',
            }}
          >
            Products we offer
          </Typography>
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{
              fontSize: '18px',
              lineHeight: '26px',
              marginBottom: '0.5rem',
            }}
          >
            1. Sports Nutrition Supplements
          </Typography>
          <Typography
            fontSize='14px'
            lineHeight='20px'
            fontWeight={400}
            sx={{ marginBottom: '0.5rem' }}
          >
            If you’re a hustler and you live for sports and fitness, then don’t
            just rely on a normal diet plan. With us, you could add:
          </Typography>
          <List
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              listStyle: 'inside !important',
            }}
          >
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Whey Protein</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Mass gainers</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Pre/post workout essentials</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>General wellness</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                Protein foods/drinks to maintain your fitness.
              </ListItemText>
            </StyledListItem>
          </List>
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{
              fontSize: '18px',
              lineHeight: '26px',
              marginBottom: '0.5rem',
            }}
          >
            2. Buy Vitamins &amp; Supplements
          </Typography>
          <Typography
            fontSize='14px'
            lineHeight='20px'
            fontWeight={400}
            sx={{ marginBottom: '0.5rem' }}
          >
            Thinking of which supplement and vitamin you need for your fitness
            plan? HealthXP's range of Multivitamins ( men, women, children),
            antioxidant extracts, omega 3/ fish oil, speciality supplements
            would make you a fitter and better you.
          </Typography>

          <Typography
            variant='h6'
            fontWeight={700}
            sx={{
              fontSize: '18px',
              lineHeight: '26px',
              marginBottom: '0.5rem',
            }}
          >
            3. Buy Ayurveda &amp; Herbs
          </Typography>
          <Typography
            fontSize='14px'
            lineHeight='20px'
            fontWeight={400}
            sx={{ marginBottom: '0.5rem' }}
          >
            If you want to get fit organically, then check out these products on
            our portal.
          </Typography>
          <List
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              listStyle: 'inside !important',
            }}
          >
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Herbal Gainers</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Weight loss herbs</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Herbal Extracts</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Hair growth herbs</ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>Digestive care herbs</ListItemText>
            </StyledListItem>
          </List>
          <Typography
            fontSize='14px'
            lineHeight='20px'
            fontWeight={400}
            sx={{ marginBottom: '0.5rem' }}
          >
            And once you’re on it, you’d want to come back for more ayurvedic
            and herbal products.
          </Typography>
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{
              fontSize: '18px',
              lineHeight: '26px',
              marginBottom: '0.5rem',
            }}
          >
            4. Buy Fitness Apparel &amp; Accessories
          </Typography>
          <Typography
            fontSize='14px'
            lineHeight='20px'
            fontWeight={400}
            sx={{ marginBottom: '0.5rem' }}
          >
            The most exciting part of our brand apart from proteins and
            supplements is our fitness apparel and accessories section. If you
            love running gym clothes errands, then stop by and grab the best
            ones for your gym looks.
          </Typography>
          <Typography
            variant='h6'
            fontWeight={700}
            sx={{
              fontSize: '18px',
              lineHeight: '26px',
              marginBottom: '0.5rem',
            }}
          >
            Why choose HealthXP?
          </Typography>
          <Typography
            fontSize='14px'
            lineHeight='20px'
            fontWeight={400}
            sx={{ marginBottom: '0.5rem' }}
          >
            As a large lot is into fitness and wellness, we vow to deliver them
            authenticity. You must be wondering how do we keep a check on it.
            Here's why you should rely upon HealthXP:
          </Typography>
          <List
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              listStyle: 'inside !important',
            }}
          >
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                Authentic Online Protein Supplements: Healthxp has reduced the
                gap between the importer and the customer, which keeps the
                products away from adulteration in terms of quality and
                quantity.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                You can check our authenticity page for more details.You can
                check our authenticity page for more details.You can check our
                authenticity page for more details.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                Affordable Rates: Buy genuine, stay fit is our motto, which
                applies to everything in terms of affordable pricing, superior
                quality, and quantity.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                Top authentic brands: HealthXP has tied up with around 100
                renowned and genuine fitness brands to cater to your fitness
                goals. To find more about our top 15 brands, check our brand's
                page.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                {' '}
                Detailed information on every product: Before you buy a product
                say, whey protein then we make sure that you're well
                knowledged/aware with the features and usage instructions of the
                product.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                {' '}
                Consultation with health experts: If you need information other
                than what's there on the product, we have certified fitness
                experts who could guide you on your nutritional and diet plan.
                You could connect with them through SMS or emails to answer your
                query at no cost.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                {' '}
                Easy delivery and return at your doorstep: From remote areas
                like North East to A-1 metros, we are always at your service
                delivering product in safe-packaging.
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                {' '}
                Top Brands: HealthXP | Dymatize | Optimum Nutrition | Muscletech
                | Isopure | Scivation | Labrada | EVL | Rule1
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <CircleIconStyled />
              <ListItemText>
                {' '}
                Top Categories: Whey Protein | Whey Protein Isolate | Mass
                Gainer | Protein Bars | Hydrolyzed Whey | Multivitamins Tablets
                | Apple Cider Vinegar
              </ListItemText>
            </StyledListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

export default StaticContent;
