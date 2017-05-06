import React from 'react';
import PostThumb from './PostThumb'
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'

export default class BlogContainer extends React.Component {

  render() {

    let blogList = this.props.blog.map((blog, index) =>
                                            <div>
                                              <PostThumb blog={blog} key={index}/>
                                            </div>)

    return (
         <Row>
             {this.props.children || blogList}
         </Row>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    blog: state.blog
  }
}

export const ConnectedBlogContainer = connect(mapStateToProps)(BlogContainer)
