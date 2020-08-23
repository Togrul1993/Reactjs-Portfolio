import React from 'react';
import Navbar from './Navbar';
import Headr from './Headr';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	particlesCanva: {
		position: "absolute",
		opacity:"0.3"
	}
})
const Home = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Headr />

			<Particles canvasClassName={classes.particlesCanva}
				params={{
					particles: {
						number: {
							value: 50,
							density: {
								enable: true,
								value_area:900
							}	
						},
						shape: {
							type: "circle",
							stroke: {
								width: 1,
								color:"tomato"
							}
						},
						size: {
							value: 10,
							random: true,
							anim: {
								enable: true,
								speed: 6,
								size_min: 0.1,
								sync:true,
								
							}
						},
						opacity: {
							value: 1,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.1,
								sync:true
							}
						}
					}
				}}
			/>

		</>
	)
}

export default Home;
