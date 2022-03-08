import { Grid, Typography, useMediaQuery, Hidden } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import technologyAnimation from "../../animation/landingPageCoder.json";
import DisplayLottie from '../displayLottie/DisplayLottie';
import Home2 from '../../assets/Home2.json'


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


function Skills(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));




  const Containerfirst = () => {
    return (
      <Grid item sm>
        <DisplayLottie animationData={Home2} style={{ maxWidth: "40em", margin: 0 }} />
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
        <Grid>
          <Typography
            align={matchesMD ? "center" : "left"}
            variant="h6"
            paragraph
          >
            ⚡ The main aim of our platform is to target  people with innovative ideas who wants to do startup but have lack of knowledge and resources to promote it.
          </Typography>
          <Typography
            align={matchesMD ? "center" : "left"}
            variant="h6"
            paragraph

          >
            ⚡ From our website we provide hiring facility to both skilled and unskilled workers who wants to join startup.

          </Typography>
          <Typography
            align={matchesMD ? "center" : "left"}
            variant="h6"
            paragraph
          >
            ⚡ From the govt. insight our sole aim is to recollect all the steps distributed to build a startup on one platform.

          </Typography>
          <Typography
            align={matchesMD ? "center" : "left"}
            variant="h6"
            paragraph
          >
            ⚡ Taking the investors back, the equity and profit from the startup will definitely going to help in flourishing their business and compensating the risk by indulging in other startups also.

          </Typography>
          <Typography
            align={matchesMD ? "center" : "left"}
            variant="h6"
            paragraph
          >
            ⚡ Govt. can also generate revenue from advertising/promoting Startups.

          </Typography>
        </Grid>
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
          <Containerfirst />
        </Hidden>

        <ContainerSecond />
        <Hidden mdUp>
          <Containerfirst />
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default Skills;


