import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';
import '../App.css';

const useStyles = makeStyles(theme => ({
	form: {
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-99%)",
		position: "absolute",
		
		
		
	},
	button: {
		marginTop: "1rem",
		color: "tomato",
		borderColor:"tomato"
	},
	hadding: {
		color: "tomato",
		textAlign: "center",
		textTransform: "uppercase",
		fontSize:"21px",
		width:"100%"
	},


}))

const InputField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "tomato",
		},

		"& label": {
			color:"tan",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor:"tan",
			},
			"&:hover fieldset": {
				borderColor:"tan"
			},
			"&.Mui-focused fieldset": {
				borderColor:"tan"
			}
		}

	},
})(TextField); 

const Contacts = () => {
	const classes = useStyles();
	return (
		<Box component="div" className="box">
			<Navbar />
			<Grid container justify="center">
				<Box component="form" className={classes.form}>
					<Typography variant="h5" className={classes.hadding}>
						hire or contact me...
					</Typography>
					
					<InputField
						fullWidth={true}
						label="Name"
						variant="outlined"
						margin="dense"
						size="medium"
						inputProps={{style:{color:"white"}}}

					/>
					<br/>
					<InputField
						fullWidth={true}
						label="Email"
						variant="outlined"
						margin="dense"
						size="medium"
						inputProps={{style:
						{color:"white"}}}
					/>
					
					<InputField
						fullWidth={true}
						label="Company Name"
						variant="outlined"
						margin="dense"
						size="medium"
						inputProps={{style:
						{color:"white"}}}
					/>
					<br />
					<Button variant="outlined" fullWidth="true" endIcon={<SendIcon/>} className={classes.button}>
					Contact me
					</Button>
					

				</Box>
			</Grid>
			
			
		</Box>
	)
}

export default Contacts;
