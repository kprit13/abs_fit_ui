import { Breadcrumbs, Link, Typography } from "@mui/material";

const BreadcrumbsCust = (props) => {
  const { links, text } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {links.map((link) => (
        <Link underline="hover" color="inherit" href="/">
          {link}
        </Link>
      ))}
      <Typography color="text.primary">{text}</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsCust;
