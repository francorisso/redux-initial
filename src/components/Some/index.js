import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './module';
import Some from './component';

function mapStateToProps() {
  return {
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Some);
