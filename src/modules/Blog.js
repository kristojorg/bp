// @flow
import React, { Component } from 'react';
import Prismic from 'prismic.io';
import _ from 'lodash';
import moment from 'moment';
import { applyContainerQuery } from 'react-container-query';
import classNames from 'classnames';


import { API_ROOT } from '../constants.js';
import './Blog.css';

class Blog extends Component {

  static propTypes = {

  }

  constructor(props){
    super(props);
    this.state = {
      posts: null,
    };
  }

  componentDidMount() {
    Prismic.api(API_ROOT).then(api => {
      return api.query(Prismic.Predicates.at('document.type', 'blog-post'));
    }).then(response => {
      console.log("Documents: ", response);
      this.setState({
        posts: response.results,
      })
    }, err => {
      console.error("Something went wrong: ", err);
    });
  }

  render() {

    let posts = null;
    if (this.state.posts) {
      posts = this.state.posts.map((post,i) =>
        <Post
          post={post}
          key={post.uid}
          small={this.props.containerQuery.small}
        />
      );
    }
    console.log('PROPS', this.props.containerQuery);
    return (

      <div className="blog" >
        {posts}
      </div>
    );
  }
}

const Post = ({post, small}) => {
  const {fragments} = post;

  // construct the title and date
  let title = null;
  if (fragments['blog-post.title']) {
    title = fragments['blog-post.title'].value;
  }

  let date = post.lastPublicationDate;
  if (fragments['blog-post.date']) {
    date = fragments['blog-post.date'];
  }

  //loop through the slices in body
  let body = null;
  if (fragments['blog-post.body']){
    body = fragments['blog-post.body'].asHtml();
    // for (const slice in fragments['blog-post.body'].slices) {
    //   if (slice.sliceType === 'StructuredText') {}
    // }
  }
  return(
    <div className={classNames("post", {smallBlog: small})} >
      <h1 className="postTitle">{title}</h1>
      <div className="postDate">{moment(date).format('MMM Do YYYY')}</div>
      <div className="postBody" dangerouslySetInnerHTML={{__html:body}} />
    </div>
  )
}

export const QUERY = {
  'small': {
    maxWidth: 760,
  }
};

const WrappedBlog = applyContainerQuery(Blog, QUERY);
export default WrappedBlog;
