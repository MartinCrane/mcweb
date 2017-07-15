import React, { Component } from 'react';
import { Clearfix, Col } from 'react-bootstrap';
import { formatMarkdown } from '../../actions/blog'
import { connect } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import {Helmet} from "react-helmet";

class Post extends Component {

  constructor() {
    super()
    this.formatMarkdown = formatMarkdown.bind(this)
  }


  render() {
    let thisBlog = this.props.blog.filter((blog) => blog.slug === this.props.params.postName)[0]
    return (<div>
      <Helmet meta={[
             { property: 'og:image', content: thisBlog.image | 'https://s3.amazonaws.com/www.martincrane.net/image/logo/logo.jpg'},
             { property: 'og:description', content: 'blog post'},
             { property: 'og:type', content: 'article' }]}>
             <title>{thisBlog.title}</title>
             <html lang="en" amp />
    </Helmet>

      <div className="case elementFloat" ref='Post' >
        <Col xs={12} xsOffset={0} sm={12} md={12} lg={10} lgOffset={1} >
        <div className="Post">
          <h1>
            {thisBlog.title}
          </h1>
          {this.formatMarkdown(thisBlog.body)}
          <Clearfix/>
        </div>
        <Clearfix/>
        </Col>
        <Clearfix/>
      </div>
    </div>
    );
  }

}
const mapStateToProps = (state) =>{
  return{
    blog: state.blog
  }
}

export const ConnectedPost = connect(mapStateToProps)(Post)
