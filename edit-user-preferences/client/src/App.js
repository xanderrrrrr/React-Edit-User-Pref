import React, { Component } from "react";
import Nav from "./components/Nav";
// import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { UserPrefList, UserPrefListItem } from "./components/UserPrefList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: [],
    preferences: []
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getUserPreferences(this.state.preferences)
      .then(res => this.setState({ preferences: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      {/* <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      /> */}
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.preferences.length ? (
                <h1 className="text-center">Nothing to display</h1>
              ) : (
                <UserPrefList>
                  {this.state.preferences.map(recipe => {
                    return (
                      <UserPrefListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                        userID={recipe.userID}
                      />
                    );
                  })}
                </UserPrefList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
