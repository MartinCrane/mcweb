import ReactPlayer from 'react-player'
import ReactMarkdown  from 'react-markdown'
import React, { Component } from 'react';
import axios from 'axios'

export function formatMarkdown(str) {
  str = str.replace(/\\n/g, '<br></br>')
  str = str.replace(/xxximagehost/g, 'http://www.brazosbrazos.com/image/blog')
  str = str.replace(/xxxmp3host/g, 'http://www.brazosbrazos.com/audio')
  let searchString = '!!!rp!!!'
  if (str.search(searchString) === 0) {
    return str.split(searchString).map((string, index) => {
      if (index % 2 === 0) {
        return <ReactMarkdown source={string}/>
      } else {
        return <div><br></br><ReactPlayer controls url={string} /><br></br></div>
      }})
  } else if (str.search(searchString) !== -1) {
    return str.split(searchString).map((string, index) => {
      if (index % 2 !== 0 && index !== 0) {
        return <div><br></br><ReactPlayer controls url={string} /><br></br></div>
      } else {
        return <ReactMarkdown source={string}/>
      }})
  } else {
    return <ReactMarkdown source={str}/>
  }
}

export function submitBlog() {
    axios.post('/posts',
    {post: {
      body: `${this.state.post}`,
      date: `${this.state.date}`,
      title: `${this.state.title}`,
      archive: `${this.state.archive}`
    }},
      {
      method: 'post',
      headers: { Authorization: `${localStorage.mcjwt}` },
    }).then((response) => {

    }).catch((response) => {
      return response
    });
  }
