import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectStyles from 'react-jss';

import styles from './app.style';

class App extends Component {
  static defaultProps = {}

  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    body: 'empty',
  }

  componentWillMount() {
    this.setState({
      body: 'It functioned in willmount'
    });
  }

  componentDidMount() {
    this.setState({
      body: 'briefy'
    })
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.header}>
          header
         </div>
        <div className={classes.body}>
          <div className={classes.aside}>
            aside
          </div>
          <div className={classes.board}>
            {this.state.body}
          </div>
        </div>
        <div className={classes.footer}>
          footer-
         </div>
      </div>
    )
  }
}

export default injectStyles(styles)(App);

