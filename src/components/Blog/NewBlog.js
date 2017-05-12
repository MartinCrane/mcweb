import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { formatMarkdown, submitBlog } from '../../actions/blog'


class NewBlog extends Component {
  constructor() {
    super()
    this.state = {
      post: '',
      date: '',
      title: '',
      archive: false
    }
    this.formatMarkdown = formatMarkdown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitBlog = submitBlog.bind(this)
  }

  handleChange(field, evt) {
    if (field === "draft" || field === "publish") {
      this.setState({
        type: field
     })
    } else {
        this.setState({
          [field]: evt.target.value
       })
    }
   }

  handleSubmit(event) {
    event.preventDefault()
    this.submitBlog()
   }

  render() {

    const formBoot = (
      <div className="blogNew">
      <form onSubmit={event => this.handleSubmit(event)}>
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl type="text"
                       value={this.state.title}
                       onChange={this.handleChange.bind(null, "title")}
                       placeholder="title" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Post</ControlLabel>
          <FormControl bsSize='medium'
                       rows='22'
                       componentClass="textarea"
                       value={this.state.post}
                       onChange={this.handleChange.bind(null, "post")}
                       placeholder="body" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Date</ControlLabel>
          <input id="date" type="date" onChange={this.handleChange.bind(null, "date")}></input><br></br>
        </FormGroup>
          <button data-id='publish' type="submit">
            send
          </button>
        </form>
      </div>
    )

    const postWithTitle = `# ${this.state.title} \r\n ${this.state.post}`

    return (
      <Row>
        <Col sm={6} md={6} lg={12}>
          {formBoot}
        </Col>

        <Col sm={6} md={6} lg={12} className="PostThumb">
          {postWithTitle.length > 0 ? this.formatMarkdown(postWithTitle) : null }
          {this.state.date}
        </Col>
      </Row>
    );
  }

}

export default NewBlog;
