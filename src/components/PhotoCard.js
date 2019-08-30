import React from 'react';
import './PhotoCard.scss'
import { Card } from 'semantic-ui-react';

function PhotoCard(props) {
  console.log(props)
  return(
    <Card className="photo-card">
      <Card.Content>
        <h2>{props.title}</h2>
        <img src={props.url} />
        <Card.Description className="content">
          {props.explanation}
        </Card.Description>
        </Card.Content>
    </Card>
  );
}

export default PhotoCard;