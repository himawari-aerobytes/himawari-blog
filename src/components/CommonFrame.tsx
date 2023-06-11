import React from "react"
import Box from '@mui/material/Box';
import SideBar from "../components/SideBar";
import NavigationBar from "../components/NavigationBar";



const CommonFrame = (component : React.JSX.Element) => {
  return (
    <>
    <NavigationBar/>
    <Box sx={{display:'flex',flexDirection:'row'}}>
      <SideBar/>
      <Box sx={{mx:5}}>
        {component}
    </Box>
    </Box>
    </>
  )
};


export default CommonFrame

