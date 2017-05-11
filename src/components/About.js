import React, { Component } from 'react';
import { Row,Clearfix } from 'react-bootstrap';
class About extends Component {

  render() {
    const content = (
              <div>
              <h1>Martin Crane</h1>
              <p>Martin Crane is a composer based in Brooklyn, New York. After studying classical piano through high school, he began his professional music career in Austin, Texas as the singer, writer, producer of Brazos (500k + plays on Spotify).  He released two albums as Brazos - Phosphorescent Blues (Autobus 2010) and Saltwater (Dead Oceans 2013) - and toured nationally. Brazos’ records have been reviewed in The Observer, FADER, Pitchfork, SPIN among others, and Brazos' songs have been licensed in 90210, the Duplass Brothers' Adult Beginners, and several commercials.</p>
              <p>Martin began working in film in 2013 as the music supervisor for the Oscar-nominated, Emmy award-winning documentary Cutie and the Boxer. Since then, he has worked as a composer with director Zachary Heinzerling on projects that include the 2015 Sundance short Hugh the Hunter, a web-series for MoMA PS1, and several short docs. He composed the original score for the Emmy-nominated animated web series, Animated Life, contributed music to Oscar-nominated director Josh Fox’s documentary How to Let Go of the World and Love All the Things Climate Can't Change, and in 2015 released an album of original pop music, Physical Therapy, that received positive reviews in Interview Magazine, FADER, Flood Magazine, and KCRW among others.
              </p>
              <p>In the Spring of 2017, Martin participated in the ASCAP Composer's Workshop at Columbia University while also attending The Flatiron School. He built this website and all the the music within it.</p>
              </div>
          )
    return (
      <Row>
        <div className="case">
          <div className="About">
            <img
              src={require(`../images/mc-head1.png`)}
              alt='title'>
            </img>
              {content}
              <Clearfix/>
          </div>
          <Clearfix/>
        </div>
        <Clearfix/>
      </Row>
    );
  }

}

export default About;
