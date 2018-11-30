var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return React.DOM.li(null, itemText);
    };
    return React.DOM.lu(null, this.props.items.map(createItem));
  }
});
var TodoApp = React.createClass({
  getInitialState : function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      React.DOM.div(null,
        React.DOM.h3(null, "TODO"),
        TodoList( {items: this.state.items} ),
        React.DOM.form( {onSubmit:this.handleSubmit},
          React.DOM.input( {onChange:this.state.onChange, value:this.state.text} ),
          React.DOM.button(null, 'Add #' + (this.state.items.length + 1))
        )
      )
    );
  }
});
React.renderComponent(TodoApp(null), mountNode);

// Link Click and count goes down
var Clicker = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },
  handleClick: function() {
    this.setState({count: this.state.count + 1});
  },
  render: function() {
    return React.DOM.a(
      {onClick: this.handleClick},
      'You have clicked ' + this.state.clount + ' times'
    );
  }
});
React.renderComponent(Clicker(), mountNode);