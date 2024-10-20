import React, { useState } from "react";
import { Button, Grid2, Input, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const menuItems = [
  'IT-Sware/DB/QA/Web/Graphics/GIS',
  'IT-HWare/Networks/Systems',
  'Accounting/Auditing/Finance',
  'Banking & Finance/Insurance',
  'Sales/Marketing/Merchandising',
  'HR/Training',
  'Corporate Management/Analysts',
  'Office Admin/Secretary/Receptionist',
  'Civil Eng/Interior Design/Architecture',
  'IT-Telecoms',
  'Customer Relations/Public Relations',
  'Logistics/Warehouse/Transport',
  'Eng-Mech/Auto/Elec',
  'Manufacturing/Operations',
  'Media/Advert/Communication',
  'Hotel/Restaurant/Hospitality',
  'Travel/Tourism',
  'Sports/Fitness/Recreation',
  'Hospital/Nursing/Healthcare',
  'Legal/Law',
  'Supervision/Quality Control',
  'Apparel/Clothing',
  'Ticketing/Airline/Marine',
  'Education',
  'R&D/Science/Research',
  'Agriculture/Dairy/Environment',
  'Security',
  'Fashion/Design/Beauty',
  'International Development',
  'KPO/BPO',
  'Imports/Exports',
  'All Vacancies'
];

const DrawerMenuItems: React.FC = () => {

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setActiveItem(item === activeItem ? null : item); // Toggle the active class
  };

  return (
    <>
      <div className="searchForm">
        <Input aria-label="Demo input" fullWidth placeholder="Search by keywords" className="homeSearchField" sx={{mb: 1,}} />
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <Input aria-label="Demo input" fullWidth placeholder="Search by Job Ref Number" className="homeSearchField" />
          </Grid2>
          <Grid2 size={4}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              size="small"
              className="homeSearchBtn"
            >
              Search
            </Button>
          </Grid2>
        </Grid2>
      </div>
      <div className="faList">
        <List>
          {menuItems.map((text) => (
            <ListItem 
              key={text} 
              disablePadding
              className={text === activeItem ? 'active' : ''} // Add active class conditionally
              onClick={() => handleItemClick(text)} // Handle item click
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default DrawerMenuItems;
