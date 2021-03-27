import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both UserPreflist and UserPrefListItem from this file

// UserPrefList renders a bootstrap list item
export function UserPrefList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// UserPrefListItem renders a bootstrap list item containing data from the recipe api call
export function UserPrefListItem({
  thumbnail = "https://placehold.it/300x300",
  userID,
  name,
  value
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h4>{value}</h4>
            <p>Name: {name}</p>
            <p>Value: {userID}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
