//home.tsx
"use client"
import { Box, Grid, IconButton, Link, Tooltip, Typography } from "@mui/material";
import AgentAdminHeader from "../common/AgentAdminHeader";
import CommonHeader from "../common/CommonHeader";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from "../components/DrawerComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { jobList } from "../mock/jobList";
import CommonFooter from "../common/CommonFooter";

const drawerWidth = 320;

interface Props {
  window?: () => Window;
}

const bannerImagesHomeRight = [
	{ id: 1, imageUrl: "https://www.topjobs.lk/banner/EXT0000000109/BAN0000000588.gif", link: "https://www.uas.org.uk/" },
	{ id: 2, imageUrl: "https://www.topjobs.lk/banner/EXT0000000109/BAN0000000588.gif", link: "https://www.uas.org.uk/" },
	{ id: 3, imageUrl: "https://www.topjobs.lk/banner/EXT0000000109/BAN0000000588.gif", link: "https://www.uas.org.uk/" },
];

export default function MainPage(props: Props) {
  // Assume this condition is determined dynamically (e.g., from authentication, user role, or URL)
  const isAgentOrAdmin = true; // Set this based on your logic
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen((prev) => !prev); // toggle the state
    }
  };

  const sliderSettings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

  return (
    <div className="mainWrapper">
      {isAgentOrAdmin ? <CommonHeader /> : <AgentAdminHeader />}
      <div className="mainWrapperInner">
        <Box sx={{ display: 'flex' }}>
          <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
          >
          <DrawerComponent 
            mobileOpen={mobileOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerToggle={handleDrawerToggle}
            container={window}
            onTransitionEnd={handleDrawerTransitionEnd}
          />
          </Box>
          <Box
            component="main"
            sx={{ display: 'flex', flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Box sx={{ flexGrow: 1, marginRight: { xs: 0, sm: 0, md: 2 } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <div className="hotJobList">
                <Typography variant="h6" component="div" className="hotJobListTtl">
                  Hot Jobs: {jobList.length} new hot jobs and 1000+ more jobs
                </Typography>
                <Grid container spacing={2} className="hotJobListLoad">
                  {jobList.map((job) => (
                    <Grid item xs={6} sm={6} md={6} lg={3} xl={2} key={job.id} className="hotEachJobWrp">
                      <Link>                        
                        <div className="hotEachJob" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                          <Tooltip title={job.title} arrow placement="left">
                            <Typography variant="body1" component="h1">{job.title}</Typography>
                          </Tooltip>
                          <Typography variant="body2" color="textSecondary">{job.company}</Typography>
                        </div>                        
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Box>
            <Box sx={{ width: 161, display: { xs: 'none', sm: 'none', md: 'block' } }}>
              <div className="image-slider-container-rmargin">
                <Slider {...sliderSettings}>
                  {bannerImagesHomeRight.map((banner) => (
                    <Box key={banner.id}>
                      <a href={banner.link} target='_blank'>
                        <Image
                          src={banner.imageUrl}
                          alt={`Banner ${banner.id}`}
                          layout="responsive"
                          width={161}
                          height={440}
                          quality={80}
                        />
                      </a>
                    </Box>
                  ))}
                </Slider>
              </div>
            </Box>
          </Box>
        </Box>
      </div>
      <CommonFooter/>
    </div>
  );
}
