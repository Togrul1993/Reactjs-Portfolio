import React from 'react';
import Navbar from './Navbar';
import {
	Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import project1 from '../image/Proje1.jpg';
import project2 from '../image/Proje2.jpg';
import project3 from '../image/Proje3.jpg';
import project4 from '../image/Proje4.jpg';
import project5 from '../image/Proje5.jpg';
import project6 from '../image/Proje6.jpg';

const useStyles = makeStyles({
	mainContainer: {
		backgroundColor: "#233",
		height:"100%"
		
	},
	cardContainer: {
		maxWidth: 345,
		margin:"2rem auto"
	}
})

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.mainContainer}>
			<Navbar />
			<Grid container justify="center">
				{/*Project 1 */}
				<Grid item xs={12} sm={8} md={5} lg={4}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia component="img" alt="Project 1" height="135" image={project1} />
							<CardContent>
								<Typography gutterBottom variant="h5">
									Project 1
								</Typography>
								
								<Typography variant="body2" color="textSecondary" component="p">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
								</Typography>
							</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								
								<Button 
									size="small" 
									color="primary">	
								Live Demo
								</Button>
							</CardActions>
						
					</Card>
				</Grid>


				<Grid item xs={12} sm={8} md={5} lg={4}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia component="img" alt="Project 2" height="135" image={project2} />
						<CardContent>
							<Typography gutterBottom variant="h5">
								Project 2
							</Typography>
							
							<Typography variant="body2" color="textSecondary" component="p">
								Lorem Ipsum is simply dummy text of the printing and 
								typesetting industry. 
							</Typography>
							</CardContent>
							</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
							
							<Button 
								size="small" 
								color="primary">	
							Live Demo
							</Button>
						</CardActions>
					
				</Card>
				</Grid>
				

			<Grid item xs={12} sm={8} md={5} lg={4}>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardMedia component="img" alt="Project 3" height="135" image={project3} />
					<CardContent>
						<Typography gutterBottom variant="h5">
							Project 3
						</Typography>
						
						<Typography variant="body2" color="textSecondary" component="p">
							Lorem Ipsum is simply dummy text of the printing and 
							typesetting industry. 
						</Typography>
							</CardContent>
							</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						
						<Button 
							size="small" 
							color="primary">	
						Live Demo
						</Button>
					</CardActions>
				
			</Card>
				</Grid>
				

			<Grid item xs={12} sm={8} md={5} lg={4}>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardMedia component="img" alt="Project 4" height="135" image={project4} />
					<CardContent>
						<Typography gutterBottom variant="h5">
							Project 4
						</Typography>
						
						<Typography variant="body2" color="textSecondary" component="p">
							Lorem Ipsum is simply dummy text of the printing and 
							typesetting industry. 
						</Typography>
							</CardContent>
							</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						
						<Button 
							size="small" 
							color="primary">	
						Live Demo
						</Button>
					</CardActions>
				
			</Card>
				</Grid>
				

			<Grid item xs={12} sm={8} md={5} lg={4}>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardMedia component="img" alt="Project 5" height="135" image={project5} />
					<CardContent>
						<Typography gutterBottom variant="h5">
							Project 5
						</Typography>
						
						<Typography variant="body2" color="textSecondary" component="p">
							Lorem Ipsum is simply dummy text of the printing and 
							typesetting industry. 
						</Typography>
							</CardContent>
							</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						
						<Button 
							size="small" 
							color="primary">	
						Live Demo
						</Button>
					</CardActions>
				
			</Card>
				</Grid>
				

			<Grid item xs={12} sm={8} md={5} lg={4}>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardMedia component="img" alt="Project 6" height="135" image={project6} />
					<CardContent>
						<Typography gutterBottom variant="h5">
							Project 6
						</Typography>
						
						<Typography variant="body2" color="textSecondary" component="p">
							Lorem Ipsum is simply dummy text of the printing and 
							typesetting industry. 
						</Typography>
							</CardContent>
							</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						
						<Button 
							size="small" 
							color="primary">	
						Live Demo
						</Button>
					</CardActions>
				
			</Card>
				</Grid>				
			</Grid>
		</Box>
	)
}

export default Portfolio;
