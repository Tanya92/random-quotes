import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import {loadQuotes, updateQuote,QuotesReducer} from './reducer';


class RandomQuote extends Component {
  componentWillMount() {
    this.props.loadQuotes();
  }
  handleClick = () => {
    this.props.updateQuote();
  }
  render() {
    document.body.style.backgroundColor = this.props.currentColor;
    document.body.style.color = this.props.currentColor;
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="fas fa-quote-left"></i>
           <span id="text">{this.props.currentQuote.quote}</span>
          </div>
          <div className="quote-author">
           - <span id="author">{this.props.currentQuote.author}</span>
          </div>
        
        <div className="buttons">
          <a  
              style={{backgroundColor: this.props.currentColor}}
              id="tweet-quote" 
              className="button" 
              title="Tweet this quote!"                
              href={"https://twitter.com/intent/tweet?hashtags=quotes&  related=freecodecamp&text=\""+this.props.currentQuote.quote+"\" "+this.props.currentQuote.author}
              target="_blank">
            <i className="fab fa-twitter"></i>
          </a> 
          <a 
            style={{backgroundColor: this.props.currentColor}}
            id="tumblr-quote" 
            className="button" 
            target="_blank" 
            href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="+this.props.currentQuote.author+"&content="+this.props.currentQuote.quote+"&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button"}>
            <i className="fab fa-tumblr"></i>
          </a>
          <button 
          style={{backgroundColor: this.props.currentColor}}
          className="button" 
          id="new-quote" 
          onClick={this.handleClick}>New quote</button>
        </div>
      </div>
        <div className="footer">
          by <a href="https://github.com/Tanya92" target="_blank">Tanya92</a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
      loadQuotes: () => {
        dispatch(loadQuotes())
      },
      updateQuote: () => {
        dispatch(updateQuote())
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuote);