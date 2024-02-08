import { Typography, Container, Box, Grid } from '@mui/material';
import TitleAnimation from './TitleAnimation/TitleAnimation.js';
import '../App.css';
import Colors from '../colors/colors.js';
import ContactSites from './ContactSites/ContactSites.js';
import Spline from '@splinetool/react-spline';

export default function PageContents() {
	return (
		<Grid container>
			<Grid item sm={6} xs={12}>
				<Box style={{ overflow: 'visible', marginLeft: '40%', marginTop: '25%' }}>
					<p style={{ fontWeight: '100', fontSize: '2.5em', marginBottom: '-10px' }}>Hello, I'm</p>
					<p style={{ fontWeight: '900', fontSize: '4em' }}>JUSTINAS;</p>
					<p style={{ fontWeight: '700', fontSize: '2.5em', marginTop: '1em', whiteSpace: 'nowrap' }}>
						Need a <TitleAnimation />?
					</p>
					<ContactSites />
				</Box>
			</Grid>
			<Grid item sm={6} xs={12}>
				<Box
					// style={{
					// 	marginTop: '-20%',
					// 	zIndex: 2,
					// 	justifyContent: 'flex-end',
					// 	right: 0,
					// 	float: 'right',
					// 	position: 'sticky',
					// 	scale: '0.6',
					// }}
					style={{ scale: '0.6', marginTop: '-20%', marginLeft: '-20%', overflow: 'hidden' }}
				>
					<Spline scene='https://prod.spline.design/0II-GlA-x7RnDXuK/scene.splinecode' />
				</Box>
			</Grid>
		</Grid>
	);
}
