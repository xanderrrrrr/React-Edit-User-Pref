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
  title,
  ingredients,
  href,
  ID,
  name
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>ID: {ID}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
