import React, { Component } from 'react';
export default class Nav extends React.Component {
  constructor() {
    super();
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return <div>Nav</div>;
  }
}
