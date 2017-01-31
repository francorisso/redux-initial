import React from 'react';
import { Link } from 'react-router';

const App = props => (
  <section className="container">
    {!!props.children && React.cloneElement(props.children, props)}
  </section>
);

export default App;
