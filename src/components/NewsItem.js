import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, postDate} = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={!imageUrl?"./default.jpg":imageUrl} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{postDate}</p>
          <ul className="navbar-nav float-right">
          <li className="liStyle" style={{width:'100px'}}>
            <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="nav-link liColor">
              Read More
            </a>
          </li>
          </ul>
        </div>
      </div>
    );
  }
}
