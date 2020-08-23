import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import avatar from '../Togrul.jpg';

//Css Styles
const useStyles = makeStyles(theme => ({
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin:theme.spacing(1)
	},
	title: {
		color:"tomato"
	},
	subtitle: {
		color: "tan",
		marginBottom:"3rem"
	},
	typedContainer:{
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		width: "100vw",
		textAlign: "center",
		zIndex:1
	}
}))

const Headr = () => {
	const classes = useStyles();
	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center">
				<Avatar src={avatar} alt="Avatar" className={classes.avatar}/>
			</Grid>
			<Typography variant="h4" className={classes.title}>
				<Typed strings={["Togrul Salmanli"]} typeSpeed={40} />
			</Typography>

			<Typography variant="h5" className={classes.subtitle}>
				<Typed strings={["FrontEnd Developer","React Js / Hooks / Contaxt Api","ES6","Jqurey","Css3/Scss/Sass","Html5","Bootstrap 4/5","Git/GitHub","..."]} typeSpeed={40}
					backSpeed={60}
				loop/>	
			</Typography>
			
		</Box>
	)
}

export default Headr
