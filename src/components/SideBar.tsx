import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const url = {
  youtube:process.env?.REACT_APP_YOUTUBE_URL||"/",
  twitter:process.env?.REACT_APP_TWITTER_URL||"/",
  github:process.env?.REACT_APP_GITHUB_URL||"/"
}

console.log(url.youtube);

export default function SideBar() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <CssBaseline />
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {makeSideBarIcon("Home","/Home",<OtherHousesOutlinedIcon/>)}
            {makeSideBarIcon("Archive","/Archive",<BorderColorIcon/>)}
            {makeSideBarIcon("Contact","/Contact",<ConnectWithoutContactIcon/>)}
           
          </List>
          <Divider />
          <List>
            {makeSideBarIcon("YouTube",url.youtube,<YouTubeIcon /> )}
            {makeSideBarIcon("Twitter",url.twitter,<TwitterIcon /> )}
            {makeSideBarIcon("GitHub",url.github,<GitHubIcon /> )}
          </List>
        </Box>
    </Box>
  );



}

const makeSideBarIcon = (name:string,href:string,iconComponent:JSX.Element)=>{
    return(
        <ListItem key={name} disablePadding>
                <ListItemButton href={href}>
                  <ListItemIcon>
                    {iconComponent}
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
        </ListItem>
        
    );
}

