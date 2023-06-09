import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";

export const Copyright = (props?: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright ©"}
      <Link color="inherit" href="https://github.com/g-code99" variant="body2">
        g-code99<span> </span>
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};
