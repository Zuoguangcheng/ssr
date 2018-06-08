import React from 'react';

export default class Main extends React.Component {
  render() {
    return <div onClick={ () => alert('hello world') }>hello world</div>
  }
}