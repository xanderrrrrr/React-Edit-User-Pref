import React, { Component } from "react";
import Nav from "./components/Nav";
import API from "./utils/API";
import { UserPrefList, UserPrefListItem } from "./components/UserPrefList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    preferences: [],
    requestURL: window.location.href
  };

  componentDidMount = event => {
      // When the page is loaded, get userPreferences  via API and update the preferences state
      // I'm actually hardcoding the browsers URL to the requestURL react state

      API.getUserPreferences(this.state.requestURL)
        .then(res => this.setState({ preferences: res.data }))
        .catch(err => console.log(err));
  }


  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get userPreferences update the preferences state
  //   event.preventDefault();
  //   API.getUserPreferences(this.state.preferences)
  //     .then(res => this.setState({ preferences: res.data }))
  //     .catch(err => console.log(err));
  // };

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
                    {/* <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col> */}
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
                  {this.state.preferences.map(preference => {
                    return (
                      <UserPrefListItem
                        key={preference.name}
                        thumbnail={preference.thumbnail}
                        userID={preference.userID}
                        name={preference.name}
                        value={preference.value}
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
