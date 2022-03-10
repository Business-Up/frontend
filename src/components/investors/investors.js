import { Grid, Typography, useMediaQuery, Hidden, Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import technologyAnimation from "../../animation/landingPageCoder.json";
import DisplayLottie from '../displayLottie/DisplayLottie';
import Home3 from '../../assets/Home3.json'
import Home4 from '../../assets/Home4.json'
import Home5 from '../../assets/Home5.json'
const data = [
   {
      logo: Home3,
      title: "Invest Instantly",
      desc: "From discovery to signing the term sheet, it's completely online and seamless"
   },
   {
      logo: Home4,
      title: "KPI Tracking",
      desc: "Review, Monitor & Track your consolidated portfolio via an easy-to-use dashboard"
   },
   {
      logo: Home5,
      title: "Exclusive Community",
      desc: "An exclusive space created to empower our users to have an enriching investment experience"
   }
];
const useStyles = makeStyles(theme => ({
   rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("sm")]: {
         paddingLeft: "1.5em",
         paddingRight: "1.5em"
      },
      [theme.breakpoints.down("xs")]: {
         paddingLeft: "1em",
         paddingRight: "1em"
      }
   },
   iconContainer: {
      "&:hover $icon": {
         color: '#1976D2',
      }
   },
   icon: {
      color: '#868E96',
      "&:hover": {
         color: '#1976D2'
      }
   }
}));


function Investors(props) {
   const classes = useStyles();
   const theme = useTheme();
   const matchesMD = useMediaQuery(theme.breakpoints.down("md"));




   const Containerfirst = ({ item }) => {
      return (
         <Grid item sm >
            <DisplayLottie animationData={item.logo} style={{ maxWidth: "15em", padding: 3, maxHeight: '15em' }} />
            <Grid item sm style={{
               maxWidth: "15em", padding: 3,
               maxHeight: '15em', marginLeft: '7em'
            }} >
               <h2 style={{ fontWeight: 'bold', textAlign: 'center' }} >{item.title}</h2>
               <h5 style={{ textAlign: 'center' }} >{item.desc}</h5>
            </Grid>
         </Grid>
      )
   }
   const ContainerSecond = () => {
      return (
         <Grid item container direction="column" sm style={{ maxWidth: "40em" }}>
            <Grid item>
               <Typography
                  align={matchesMD ? "center" : "left"}
                  variant="h3"
                  style={{ fontFamily: "Pacifico" }}
                  gutterBottom
               >
                  What We Do
               </Typography>
            </Grid>
            <Grid item>
               {/* <Typography
            align={matchesMD ? "center" : "left"}
            variant="body1"
            paragraph
          >
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </Typography> */}
            </Grid>
            {/* <Grid item style={{marginBottom:'1em'}}>
            <SkillsIcon />
          </Grid> */}

         </Grid>
      )
   }

   return (
      <Grid container direction="column" id='skills'>

         <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            alignItems="center"
            className={classes.rowContainer}
            style={{ marginTop: "2em" }}
         >
            <Hidden mdDown>
               {data.map((p) => (<Containerfirst item={p} />))}
            </Hidden>
            <Hidden mdUp>
               {data.map((p) => (<Containerfirst item={p} />))}
            </Hidden>
         </Grid>
         <Button>Learn More</Button>
      </Grid>
   );
}

export default Investors;


