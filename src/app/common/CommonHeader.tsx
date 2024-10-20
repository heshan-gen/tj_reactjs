//CommonHeader.tsx
"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import router from 'next/router';

const pages = [
	{ name: 'Post Your Vacancy', route: '/post-your-vacancy' },
	{ name: 'Happy Customers', route: '/happy-customers' },
	{ name: 'Top Employers', route: '/top-employers' },
	{ name: 'Contact Us', route: '/contact-us' },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const bannerImages = [
	{ id: 1, imageUrl: "https://www.topjobs.lk/banner/EXT0000000116/BAN0000000917.gif", link: "https://www.uas.org.uk/" },
	{ id: 2, imageUrl: "https://www.topjobs.lk/banner/EXT0000000116/BAN0000000917.gif", link: "https://www.uas.org.uk/" },
	{ id: 3, imageUrl: "https://www.topjobs.lk/banner/EXT0000000116/BAN0000000917.gif", link: "https://www.uas.org.uk/" },
];

function CommonHeader() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
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

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handlePageClick = (route: string) => {
		router.push(route);  // Use router to navigate
		handleCloseNavMenu();  // Close the menu after navigation
	};

	return (
		<AppBar position="fixed">
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'Verdana, sans-serif',
							fontWeight: 700,
							fontSize: 30,
							color: '#8A2621',
							letterSpacing: 0,
							textDecoration: 'none',
						}}
						className='brandttl'
					>
						topjobs <span>recruitment made easy</span>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
							className='btn-comm-right'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							{pages.map((page) => (
								<MenuItem key={page.name} onClick={() => handlePageClick(page.route)}>
									<Typography className='btn-comm' sx={{ textAlign: 'center' }}>{page.name}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'Verdana, sans-serif',
							fontSize: 30,
							fontWeight: 700,
							color: '#8A2621',
							letterSpacing: 0,
							textDecoration: 'none',
						}}
						className='brandttl'
					>
						topjobs <span>recruitment made easy</span>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								className='btn-comm-main'
								key={page.name}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page.name}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<IconButton aria-label="delete" className='btn-comm-right' onClick={handleLogin}>
							<LoginIcon />
						</IconButton>
						<IconButton aria-label="delete" className='btn-comm-right' sx={{ml: 1}}>
							<PersonAddIcon />
						</IconButton>
						{isLoggedIn && (
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
									<Avatar alt="Heshan Pramith" src="../images/user.jpg" />
								</IconButton>
							</Tooltip>
						)}
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography className='btn-comm' sx={{ textAlign: 'center' }}>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 0, ml: 2, display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
						<div className="image-slider-container">
							<Slider {...sliderSettings}>
								{bannerImages.map((banner) => (
									<Box key={banner.id}>
										<a href={banner.link} target='_blank'>
											<Image
												src={banner.imageUrl}
												alt={`Banner ${banner.id}`}
												layout="responsive"
												width={427}
												height={60}
												quality={80}
											/>
										</a>
									</Box>
								))}
							</Slider>
						</div>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default CommonHeader;
