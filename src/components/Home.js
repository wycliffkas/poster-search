import React, { Component } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import Poster from "./Poster";
import Search from "./Search";
import { getPageCount } from "../utils/common";

class Home extends Component {
  componentDidMount() {
    this.cancel = "";
  }

  state = {
    query: "",
    results: [],
    loading: false,
    message: "",
    totalResults: 0,
    totalPages: 0,
    currentPageNo: 0,
    totalResultsDisplayed: 20,
  };

  inputChangeHandler = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({
        query,
        results: {},
        message: "",
        totalResults: 0,
        totalPages: 0,
      });
    } else {
      this.setState({ query: query, loading: true, message: "" }, () => {
        this.fetchSearchResults(query, 1);
      });
    }
  };

  fetchSearchResults = (query, setPageNumber = "") => {
    const pageNumber = setPageNumber ? `&offset=${setPageNumber}` : "";
    const searchUrl = `https://staging-ng.morressier.com/events_manager/v3/posters/search?query=${query}${pageNumber}`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((response) => {
        const total = response.data.posters.length;

        const totalPagesCount = getPageCount(
          total,
          this.state.totalResultsDisplayed
        );

        const resultNotFoundMsg = !response.data.posters.length
          ? "There are no more search results. Please try a new search"
          : "";

        this.setState({
          results: response.data.posters,
          message: resultNotFoundMsg,
          totalResults: total,
          totalPages: totalPagesCount,
          currentPageNo: setPageNumber,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Please check the network, failed to fetch data",
          });
        }
      });
  };

  renderSearchResults = () => {
    const { results } = this.state;

    if (Object.keys(results).length && results.length) {
      return (
        <div className="row no-gutters justify-content-center">
          {results.map((result) => (
            <Poster
              title={result.title}
              thumbnail={result.thumb_url}
              id={result.id}
              key={result.id}
            />
          ))}
        </div>
      );
    }
  };

  handlePageClick = (type) => {
    const updatePageNo =
      "prev" === type
        ? this.state.currentPageNo - 1
        : this.state.currentPageNo + 1;

    if (!this.state.loading) {
      this.setState({ loading: true, message: "" }, () => {
        this.fetchSearchResults(this.state.query, updatePageNo);
      });
    }
  };

  render() {
    const { query, loading, message, currentPageNo, totalPages } = this.state;
    const showPrev = 1 < currentPageNo;
    const showNext = totalPages > currentPageNo;

    return (
      <div className="container col s12">
        <Search
          loading={loading}
          message={message}
          query={query}
          onChangeHandler={this.inputChangeHandler}
        />
        <Navigation
          loading={loading}
          showPrev={showPrev}
          showNext={showNext}
          handlePrevClick={() => this.handlePageClick("prev")}
          handleNextClick={() => this.handlePageClick("next")}
        />

        {this.renderSearchResults()}

        <Navigation
          loading={loading}
          showPrev={showPrev}
          showNext={showNext}
          handlePrevClick={() => this.handlePageClick("prev")}
          handleNextClick={() => this.handlePageClick("next")}
        />
      </div>
    );
  }
}

export default Home;
