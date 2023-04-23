import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



//export class news extends Component {
// static defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: 'general',

// }
// static = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string
// }
const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
    const capitalizef = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // constructor(props) {
  //   super(props);
  //   //this.state = {
  //     // articles: [],
  //     // loading: false,
  //     // page: 1,
  //     // totalResults: 0


  //   //}
  //    }
  const updateNews=async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=625ca9b335d0462d9ae4ea8c18f78d84&page=${/*this.state.*/page}&pageSize=${props.pageSize}`;
    //this.setState({ loading: true })
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(70);
    console.log(parseddata);
    setarticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setloading(false)
    // this.setState({
    //   articles: parseddata.articles,
    //   totalResults: parseddata.totalResults,
    //   loading: false,
    // })
    props.setProgress(100);
  }
  useEffect(() => {
    document.title = `${capitalizef(props.category)}- Newsmonkey`;
  /*this.*/updateNews();
  //eslint-disable-next-line
  }, [])
  // async componentDidMount() {
  //   this.updateNews();
  // }
  // const handlePrevClick = async () => {
  //   console.log("previous");

//     //this.setState({ page: this.state.page - 1 });
//     setpage(page-1);
//     /* this.*/updateNews();
// //   }
//  const  handleNextClick = async () => {
//     console.log("Next");
//     //this.setState({ page: this.state.page + 1 });
//     setpage(page+1);
//    updateNews();
//   }

  const fetchMoreData = async () => {
   
    //this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=625ca9b335d0462d9ae4ea8c18f78d84&page=${/*this.state.*/page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
    
    // this.setState({
    //   articles: this.state.articles.concat(parseddata.articles),
    //   totalResults: parseddata.totalResults,
    //   loading: false

    // })
  };
 // render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "55px 0px" }}>Newsmonkey- Top   {capitalizef(props.category)} Headlines  </h1>
        {/*this.state.*/loading && <Spinner />}
        <InfiniteScroll
          dataLength={/*this.state.*/articles.length}
          next={fetchMoreData}
          hasMore={/*this.state.*/articles.length !== /*this.state.*/totalResults}
          loader={<Spinner />}
        >
          <div className="conatiner">
            <div className="row">
              {/*this.state.*/articles.map((element) => {

                return <div className="col md-4 " key={element.url}>
                  <Newsitem key={element.url} title={element ? element.title : ""} description={element ? element.description : " "} imageurl={element.urlToImage}
                    newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"> &larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / prpos.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next&rarr;</button>
        </div> */}
      </>
    )
  }

  News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general',

  }
  News.static = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

export default News
