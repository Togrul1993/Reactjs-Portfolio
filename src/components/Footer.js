import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
	
	icon: {
		color: "tan",
		"&:hover": {
			color: "tomato",
			fontSize:"1.8rem"
		}
	}
})

const Footer = () => {
	const classes = useStyles();
	return (
		<BottomNavigation width="100px" style={{backgroundColor:"#222"}}>
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0}}
				icon={<FacebookIcon className={classes.icon}/>} />
			
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0}}
				icon={<LinkedInIcon className={classes.icon} />} />
			
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0}}
				icon={<GitHubIcon className={classes.icon}/>} />
			
		</BottomNavigation>
	)
}

export default Footer
