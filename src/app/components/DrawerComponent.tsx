import React from "react";
import { Box, Drawer} from "@mui/material";
import DrawerMenuItems from "../widgets/DrawerMenuItems";

const drawerWidth = 320;

interface DrawerComponentProps {
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerToggle: () => void;
  container?: () => Window;
  onTransitionEnd?: () => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ mobileOpen, handleDrawerClose, onTransitionEnd }) => {
  
  return (
    <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} aria-label="mailbox folders">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerClose}
        onTransitionEnd={onTransitionEnd}
        className="mob-draw"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerMenuItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        className="desk-draw"
        open
      >
        <DrawerMenuItems />
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
