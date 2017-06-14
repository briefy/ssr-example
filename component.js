const React = require('react');

module.exports = class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { me: 'breify' }
  }
  componentWillMount() {
    console.log('it will mount');
    this.setState({ me: 'breify-new' });
  }

  componentDidMount() {
    console.log('did mount');
  }

  randomMethod() {
    console.log(this.refs);
  }

  render() {
    let { me } = this.state;
    this.randomMethod();
    return React.createElement('div',
      {
        children: React.createElement('span', {
          ref: 'span',
          children: me,
        }),
        onClick: this.randomMethod
      });
  }
}