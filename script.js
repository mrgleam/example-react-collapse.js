var Collapse = ReactCollapse;

var Hidden = React.createClass({
  render: function() {
    return (
      <Collapse isOpened={this.props.localIsOpened}>
        <div>Hidden content</div>
      </Collapse>    
    );
  }
});

var App = React.createClass({
  getInitialState() {
    return {isOpened: false};
  },
  render: function() {
    const {isOpened} = this.state;
    return (
      <div>
        <button onClick={() => this.setState({isOpened: !isOpened})}>Toggle</button>
        <Hidden localIsOpened={this.state.isOpened}/>
      </div>
    );
  }
});
ReactDOM.render(
  <App />,
  document.getElementById('content')
);
