import React, { Component } from 'react';

// Externals
import { Doughnut } from 'react-chartjs-2';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { IconButton} from '@material-ui/core';

// Material icons
import {Refresh as RefreshIcon} from '@material-ui/icons';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletToolbar,
  PortletContent
} from 'components';

// Chart configuration
import { data, options } from './chart';

// Component styles
import styles from './styles';

class DevicesChart extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader noDivider>
          <PortletLabel title="Incidents from 2001 to 2017" />
          <PortletToolbar>
            <IconButton
              className={classes.refreshButton}
              onClick={this.handleRefresh}
              variant="text"
            >
              <RefreshIcon />
            </IconButton>
          </PortletToolbar>
        </PortletHeader>
        <PortletContent>
          <div className={classes.chartWrapper}>
            <Doughnut
              data={data}
              options={options}
            />
          </div>
        </PortletContent>
      </Portlet>
    );
  }
}

DevicesChart.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DevicesChart);
