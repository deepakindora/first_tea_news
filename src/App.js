import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import './css/custom.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
	apiKey = process.env.REACT_APP_API_KEY;
	//cat = [{"id":"59","category_name":"hindi","label_name":"\u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u0938\u092e\u093e\u091a\u093e\u0930"},{"id":"60","category_name":"hindi_state","label_name":"\u0930\u093e\u091c\u094d\u092f \u0905\u092e\u0947\u0930\u093f\u0915\u093e"},{"id":"61","category_name":"hindi_world","label_name":"\u0926\u0941\u0928\u093f\u092f\u093e"},{"id":"62","category_name":"hindi_cricket","label_name":"\u0916\u0947\u0932"},{"id":"64","category_name":"hindi_national","label_name":"\u0926\u0947\u0936"},{"id":"66","category_name":"hindi_entertainment","label_name":"\u092e\u0928\u094b\u0930\u0902\u091c\u0928"},{"id":"251","category_name":"hindi_career","label_name":"\u0935\u094d\u092f\u0935\u0938\u093e\u092f"},{"id":"289","category_name":"hindi_politics","label_name":"\u0930\u093e\u091c\u0928\u0940\u0924\u093f"},{"id":"290","category_name":"hindi_technology","label_name":"\u092a\u094d\u0930\u094c\u0926\u094d\u092f\u094b\u0917\u093f\u0915\u0940"},{"id":"291","category_name":"hindi_business","label_name":"\u0935\u094d\u092f\u093e\u092a\u093e\u0930"},{"id":"294","category_name":"hindi_cryptocurrency","label_name":"\u0915\u094d\u0930\u093f\u092a\u094d\u091f\u094b \u092e\u0941\u0926\u094d\u0930\u093e"}];
	//cat = fetchCategory();
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
      <>
      <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/" key="home"> <News apiKey={this.apiKey} category="hindi"/> </Route>
      {this.state.category.map((element) => {
      	return(<Route exact path={"/"+element.category_name} key={element.id}> <News apiKey={this.apiKey} category={element.category_name}/> </Route>);
   	  })}
        </Switch>
      </Router>
      </>
    )
  }
}

