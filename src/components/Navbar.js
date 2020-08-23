import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	ListItemIcon,
	Avatar,
	Divider,
	List,
	Typography,
	Box
} from '@material-ui/core';

import { 
	Menu,
	AssignmentInd,
	Home,
	Apps,
	ContactMail
} from '@material-ui/icons';
import Footer from './Footer';
import avatar from '../Togrul.jpg';

//Css Styles

const useStyles = makeStyles(theme => ({
	menuSliderContainer: {
		width: 250,
		backgroundColor: "#511",
		height: "100%"
	},

	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(13),
		height:theme.spacing(13)
	},
	ListItem: {
		color:"tan"
	}

}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: "Home",
		listPath: "/"
		
	},

	{
		listIcon: <AssignmentInd />,
		listText: "Resume",
		listPath: "/resume"
	},

	{
		listIcon: <Apps />,
		listText: "Portfolio",
		listPath: "/portfolio"
	},

	{
		listIcon: <ContactMail />,
		listText: "Contacts",
		listPath: "/contacts"
	}
	
	
]


const Navbar = () => {
	const [state, setState] = useState({
		right: false
	});

	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};


	const clases = useStyles();

	const sideList = slider => (
		<Box
			className={clases.menuSliderContainer} component="div"
			onClick={toggleSlider(slider, false)}
			
		>
			<Avatar className={clases.avatar} src={avatar} alt="Avatar" />
			<Divider />
			<List>
				{menuItems.map((lsItem, key) => (
					<ListItem button key={key} component={Link} to={lsItem.listPath}>
						<ListItemIcon className={clases.ListItem}>
							{lsItem.listIcon}
						</ListItemIcon>			
						<ListItemText className={clases.ListItem} primary={lsItem.listText} />
					</ListItem>
				))}		
			</List>		
		</Box>
		
	)

	return (
		<>
			<Box component="nav">
				<AppBar position="static" style={{backgroundColor:"#222"}}> 
					<Toolbar>
						<IconButton onClick={toggleSlider("right",true)}>
							<Menu style={{color:"white",fontSize:"38px",marginLeft:"15px"}}/>
						</IconButton>

						<Typography variant="h5" style={{color:"tan",marginLeft:"10px"}}>
							Togrul Salmanli (Portfolio)
								
						</Typography>
						
						<MobilRightMenuSlider
						anchor="right"	  
						open={state.right}
						onClose={toggleSlider("right",false)}
						>
							{sideList("right")}	

							<Footer/>
						</MobilRightMenuSlider>
					</Toolbar>
				</AppBar>	
			</Box>
		</>
	)
}

export default Navbar
