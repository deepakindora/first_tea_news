import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types';

export default class News extends Component {
   static defaultProps = {
    country: 'in',
    category: 'general'
  }

   PropTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url = `https://newsapi.in/newsapi/news.php?key=${this.props.apiKey}&category=${this.props.category}&content_type=full_content`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.News,
                   loading: false
                });
   
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12 my-3 text-center">
          <h1>1st Tea News - Top Headlines</h1>
          {this.state.loading && <Loader/>}
        </div>
        <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 my-2" key={element.id}> 
                    <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.image}
                    newsUrl ={element.url}
                    postDate ={element.published_date}
                    />
                </div>
              );
            })}
          </div>
        </div>
    );
  }
}
