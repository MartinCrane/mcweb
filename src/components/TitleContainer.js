import React from 'react';
import Title from './Title'
import { Row, Grid } from 'react-bootstrap';

export default class TitleContainer extends React.Component {

  render() {
    return (
      <div className="TitleContainer container">
      <Grid>
          <Row className="show-grid ">
            < Title key={1}/>
            < Title key={2}/>
            < Title key={3}/>
            < Title key={4}/>
            < Title key={5}/>
            < Title key={6}/>
            < Title key={7}/>
            < Title key={8}/>
            < Title key={9}/>
            < Title key={10}/>
          </Row>
        </Grid>
      </div>
    );
  }
}
