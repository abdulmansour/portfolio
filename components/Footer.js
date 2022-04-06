import { Link } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const iconCss = {color:"primary", marginX: "5px", '&:hover': { backgroundColor: "grey.300", cursor: "pointer"}, display: "flex"};
  return (
    <footer id="footer">
      <div>
        <Link href="https://github.com/abdulmansour"><GitHubIcon sx={iconCss}/></Link>
        <Link href="https://www.linkedin.com/in/mansourabdulrahim/"><LinkedInIcon sx={iconCss}/></Link>
        <Link href="mailto:mansour.abdulrahim@gmail.com"><EmailIcon sx={iconCss}/></Link>
      </div>
    </footer>
  )
}
