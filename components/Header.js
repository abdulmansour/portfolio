import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const pages = ["Projects"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" sx={{ "&:hover": { cursor: "pointer" } }}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                "&:hover": { backgroundColor: "primary.light" },
              }}
            >
              Abdulrahim Mansour
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link href="https://github.com/abdulmansour">
                  <GitHubIcon
                    sx={{
                      marginX: "5px",
                      "&:hover": { backgroundColor: "grey.300" },
                      display: { xs: "flex", md: "none" },
                    }}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/mansourabdulrahim/">
                  <LinkedInIcon
                    sx={{
                      marginX: "5px",
                      "&:hover": { backgroundColor: "grey.300" },
                      display: { xs: "flex", md: "none" },
                    }}
                  />
                </Link>
                <Link href="mailto:mansour.abdulrahim@gmail.com">
                  <EmailIcon
                    sx={{
                      marginX: "5px",
                      "&:hover": { backgroundColor: "grey.300" },
                      display: { xs: "flex", md: "none" },
                    }}
                  />
                </Link>
              </MenuItem>
              <Link href="static/pdf/cv.pdf" download>
                <MenuItem>
                  <Typography textAlign="center">Resume</Typography>
                </MenuItem>
              </Link>
              {pages.map((page) => (
                <Link href={`/${page.toLowerCase()}`}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Link href="/">
              <Typography
                variant="h5"
                noWrap
                component="span"
                sx={{ "&:hover": { backgroundColor: "primary.light" } }}
              >
                Abdulrahim Mansour
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "right",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link href="static/pdf/cv.pdf" download>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": { backgroundColor: "primary.light" },
                }}
              >
                Resume
              </Button>
            </Link>
            {pages.map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": { backgroundColor: "primary.light" },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ justifyContent: "right", display: "flex" }}>
            <Link href="https://github.com/abdulmansour">
              <GitHubIcon
                sx={{
                  marginX: "5px",
                  "&:hover": { backgroundColor: "primary.light" },
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/mansourabdulrahim/">
              <LinkedInIcon
                sx={{
                  marginX: "5px",
                  "&:hover": { backgroundColor: "primary.light" },
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Link>
            <Link href="mailto:mansour.abdulrahim@gmail.com">
              <EmailIcon
                sx={{
                  marginX: "5px",
                  "&:hover": { backgroundColor: "primary.light" },
                  display: { xs: "none", md: "flex" },
                }}
              />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
