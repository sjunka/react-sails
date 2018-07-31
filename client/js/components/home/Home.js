// React imports
import React, { Component } from "react";

// Bootstrap imports
import {
  Jumbotron,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

// Redux imports
import { connect } from "react-redux";
import { createSelector } from "reselect";

// Redux actions
import { updateUser, apiRequest } from "../../actions/user-actions";

class Home extends Component {
  componentDidMount() {
    this.props.onApiRequest();
  }

  onUpdateUser = event => {
    // Call to mapActionsToProps
    this.props.onUpdateUser(event.target.value);
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">React Redux Sails</h1>
          <p className="lead">
            Redux flow starting with mapActionsToProps later on dispatching the
            actions to the reducers and getting them back with mapStateToProps.
            Selector library for encapsulation the state response in small
            selectors for increased perfomance
          </p>
          <hr className="my-2" />
          <p>Using React-Strap for UI library</p>
          <p>Using react-router for routing</p>
          <p className="lead">
            <Button color="primary">It works</Button>
          </p>

          <p> Input takes data from API via redux-thunk</p>

          <InputGroup>
            <Input placeholder="username" onChange={this.onUpdateUser} />
          </InputGroup>
          {this.props.user}
        </Jumbotron>
      </div>
    );
  }
}

const productsSelector = createSelector(
  state => state.products,
  products => products
);
const userSelector = createSelector(state => state.user, user => user);

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
);

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home);
