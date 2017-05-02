import React from 'react';
import Post from './Post'
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'

export default class BlogContainer extends React.Component {

  render() {

    let blogList = this.props.blog.reverse().map((blog, index) =>
                                            <div>
                                              <Post blog={blog} key={index}/>
                                            </div>)

    return (
       <Grid className="BlogContainer">
         <Row>
             {blogList}
         </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    blog: state.blog
  }
}

export const ConnectedBlogContainer = connect(mapStateToProps)(BlogContainer)
