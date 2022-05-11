import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
   <div>
        <Box pt={10}>
      <BottomNavigation
      sx={{ backgroundColor:'#0baf9a!important',color:'white',p:2,position: 'fixed', bottom: 0, width: '42%' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon sx={{ fontSize: 30 }} />} />
        <BottomNavigationAction label="Category" icon={<GridViewIcon sx={{ fontSize: 30 }} />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon sx={{ fontSize: 30 }} />} />
        <BottomNavigationAction label="Offers" icon={<CardGiftcardOutlinedIcon sx={{ fontSize: 30 }} />} />
        <BottomNavigationAction label="Cart" icon={<Badge color="error" badgeContent={4}>
        <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
        </Badge>} />
      </BottomNavigation>
    </Box>
   </div>
  );
}
