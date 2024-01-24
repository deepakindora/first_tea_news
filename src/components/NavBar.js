import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      category: []
    };
  }
  async componentDidMount(){
    let categoryUrl = `https://newsapi.in/newsapi/category.php?lang=hindi`;
    let categories = await fetch(categoryUrl);
    let parsedCategories = await categories.json();
    this.setState({category: parsedCategories.Categories});
  }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" ref={(node) => { if (node) { node.style.setProperty("background-color", "#111", "important");}}}>
        <Link className="navbar-brand" to="/">
         <img src="1st-tea-news-logo.png" height="70" width="200" alt="1st-tea-news-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {this.state.category.map((element) => {
              return(<li className="nav-item liStyle" key={element.id}>
                <Link className="nav-link liColor" to={"/"+element.category_name}>
                  {element.label_name}
                </Link>
              </li>);   
            })}  
          </ul>
         
        </div>
      </nav>
        )
    }
}

