const API_URL='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const LOAD='LOAD';
const UPDATE='UPDATE';

export const loadQuotes = () => {
  return (dispatch) => {
    fetch(API_URL).then(body => body.json()).then(body => {
      dispatch({
        type: LOAD,
        quotes: body.quotes
      })
    })  
  }
};

export const updateQuote = () => {
  return {
    type: UPDATE
  }
}

const defaultState = {
  quotes: [],
  currentQuote: {
    quote:'',
    author:''
  },
  currentColor: randomColor()
};

function randomQuote(quotes){
  return quotes[Math.floor(Math.random() * quotes.length)];
}
function randomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export const quotesReducer = (state = defaultState, action) => {
  switch (action.type){
    case LOAD:
      return {
        ...state,
        quotes: action.quotes,
        currentQuote: randomQuote(action.quotes)
      };
    case UPDATE:
      return {
        ...state,
        currentQuote: randomQuote(state.quotes),
        currentColor: randomColor()
      };
    default: 
      return state;
  }
}