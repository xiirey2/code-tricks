import React from 'react'
import './Post.css'


function Post({ id, title, content, code_snippet, auther, commments, date }) {
  return (
    <div className="post">
      <div className="post-body">
        <p className="title">{title}</p>
        <div className="code-snippet">
          <pre>
            <code>{code_snippet}</code>
          </pre>
          <div className="about">
            <p className="auther">{auther}</p>
            <strong className="sep">.</strong>
            <p className="date">{date}</p>
          </div>
        </div>
      </div>
      <br />
      <div className="content">
        <p>{content}</p>
      </div>
      <button className="continue-reading">Continue Reading</button>
    </div>
  );
}

export default Post
