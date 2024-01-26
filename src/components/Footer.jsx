import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton,
  useTheme,
  styled,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const theme = useTheme();

  // Replace these with your own social media URLs
  const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 3,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent='space-between'>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Brand Name
            </Typography>
            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant='subtitle1' color='text.primary' gutterBottom>
              PRODUCT
            </Typography>
            <Link href='#' color='inherit' display='block'>
              Features
            </Link>
            <Link href='#' color='inherit' display='block'>
              Integrations
            </Link>
            <Link href='#' color='inherit' display='block'>
              Pricing
            </Link>
            <Link href='#' color='inherit' display='block'>
              FAQ
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant='subtitle1' color='text.primary' gutterBottom>
              COMPANY
            </Typography>
            <Link href='#' color='inherit' display='block'>
              About Us
            </Link>
            <Link href='#' color='inherit' display='block'>
              Careers
            </Link>
            <Link href='#' color='inherit' display='block'>
              Privacy Policy
            </Link>
            <Link href='#' color='inherit' display='block'>
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant='subtitle1' color='text.primary' gutterBottom>
              DEVELOPERS
            </Typography>
            <Link href='#' color='inherit' display='block'>
              Public API
            </Link>
            <Link href='#' color='inherit' display='block'>
              Documentation
            </Link>
            <Link href='#' color='inherit' display='block'>
              Guides
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant='subtitle1' color='text.primary' gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <SocialMediaIconButton
              aria-label='Facebook'
              component='a'
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon />
            </SocialMediaIconButton>
            <SocialMediaIconButton
              aria-label='Twitter'
              component='a'
              href={socialMediaLinks.twitter}
            >
              <TwitterIcon />
            </SocialMediaIconButton>
            <SocialMediaIconButton
              aria-label='Instagram'
              component='a'
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon />
            </SocialMediaIconButton>
          </Grid>
        </Grid>
        <Typography
          variant='body2'
          color='text.secondary'
          align='center'
          sx={{ pt: 4 }}
        >
          © {new Date().getFullYear()} Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
