import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery';


class QuoteText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomQuote: "Text",
        author: "Author"
      };
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
      $.getJSON(
        "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
        function(data) {
          $("#text").append("</br><p>" + data.quoteText + "</p></br>");
          $("#author").append("<p>- " + data.quoteAuthor + "</p></br>");
        }
      );
      $("#tweet-quote").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + "\"" + $("#text").text() + "\"" + " - " + $("#author").text(), '_blank');
      });
    }

    handleClick() {
      $.getJSON(
        "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
        function(data) {
          $("#text").empty();
          $("#text").append("<blockquote>" + data.quoteText + "</blockquote>");
          $("#author").empty();
          $("#author").append(
            "<blockquote>" + data.quoteAuthor + "</blockquote>"
          );
        }
      );
    }

    render() {
      return (
        <div>
          <h1 id="title">Random-Quote-Machine</h1>
          <div id="content">
            <div id="text" />
            <div id="author" />
          </div>
          <p className="buttons">
            <button
              type="button"
              className="btn btn-success"
              id="new-quote"
              onClick={this.handleClick}
            >
              New Quote
            </button>
            <a href="#" id="tweet-quote">
            <button className="btn btn-success">Tweet Quote  <i class="fa fa-twitter"/></button>
            </a>
            <a href="https://ahaf-dev.com" id="ahaf">
            <button className="btn btn-success">Back to ahaf-dev</button>
            </a>
          </p>
        </div>
      );
    }
  }

ReactDOM.render(
  <QuoteText />, document.getElementById("root")
);

export default QuoteText;
