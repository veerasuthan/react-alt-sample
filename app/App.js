import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

import updateFeeds from './actions/feeds';

class App extends React.Component {
  componentDidMount() {

  }
  render() {
    const feedsListg =  (this.props.feeds);
    return (
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-md-12'}>
            <Button bsStyle="success" bsSize="small">
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  feeds: PropTypes.array.isRequired
};

function mapStateToProps({ feeds }) {
  return {
    feeds
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFeeds }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
