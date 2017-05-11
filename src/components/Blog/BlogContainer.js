import React from 'react';
import ConnectedPostThumb from './PostThumb'
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux'

export default class BlogContainer extends React.Component {

  render() {
    let blogList = this.props.blog.map((blog, index) =>
                                              <ConnectedPostThumb blog={blog} key={index}>
                                              </ConnectedPostThumb>
                                            )
    return (

        <Row className='BlogContainer elementFloatQuick'>
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
