import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';
// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
// Custom components
import {
  Toffences,
  UOffences,
  Agencies,
  Incidents,
  LattestArrestChart,
  IncidentsChart,
  ClearanceChart,
  OffenceChart,
  ClearanceClosureChart
} from './components';

import {getData} from './components/LattestArrestChart/chart';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  }
});


  


class Dashboard extends Component {
  render() {
    getData();
    const { classes } = this.props;
    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid
            alignItems="stretch"
            justify="center"
            container
            spacing={4}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
           <Toffences className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <UOffences className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Agencies className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Incidents className={classes.item} />
            </Grid>




            <Grid 
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
            <LattestArrestChart className={classes.item} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <IncidentsChart className={classes.item} />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={5}
              xs={6}
            >
              <ClearanceChart className={classes.item} />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={5}
              xs={6}
            >
              <OffenceChart className={classes.item} />
            </Grid>
            <Grid
              item
              lg={8}
              sm={12}
              xl={9}
              xs={12}
            >
           <ClearanceClosureChart className={classes.item} />
            </Grid>
          </Grid>
        </div>
        
      </DashboardLayout>
      
    );
    
  }
}
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Dashboard);

/*

lg={4}
              md={6}
              xl={3}
              xs={12}


<Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
           <Budget className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Users className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Progress className={classes.item} />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Profit className={classes.item} />
            </Grid>




            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <ProductList className={classes.item} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <OrdersTable className={classes.item} />
            </Grid>
*/