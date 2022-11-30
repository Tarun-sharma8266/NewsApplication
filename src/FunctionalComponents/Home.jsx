import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1
        }
    }
    async getAPIData() {
        this.setState({ page: 1 })
        var response = ""
        if (this.props.search === "")
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
        var result = await response.json()
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    }
    fetchData = async () => {
        this.setState({ page: this.state.page + 1 })
        var response = ""
        if (this.props.search === "")
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
        var result = await response.json()
        this.setState({
            articles: this.state.articles.concat(result.articles)
        })
    }
    componentDidMount() {
        this.getAPIData()
    }
    componentDidUpdate(old) {
        if (this.props.q !== old.q || this.props.language !== old.language || this.props.pageSize !== old.pageSize || this.props.search !== old.search)
            this.getAPIData()
    }
    render() {
        return (
            <div className='container-fluid'>
                <h6 className='background text-light text-center p-2 mt-1'>{this.props.q} News Section</h6>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={
                        <div className='container mt-5 mb-5 text-center'>
                            <div className="spinner-border text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                >
                    <div className='row'>
                        {
                            this.state.articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    date={item.publishedAt}
                                    pic={item.urlToImage}
                                    source={item.source.name}
                                    url={item.url}
                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
