import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
                <div className="card">
                    <img src={this.props.pic} height="180px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title.slice(0, 30) + "..."}</h5>
                        <hr />
                        <h5 className='news-source'>{this.props.source}</h5>
                        <h5 className='news-source'>{`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()}/${new Date(this.props.date).getFullYear()}  ${new Date(this.props.date).getHours()}:${new Date(this.props.date).getMinutes()}:${new Date(this.props.date).getSeconds()}`}</h5>
                        <p className="card-text">{this.props.description.slice(0,180) + "..."}</p>
                        <a href={this.props.url} className="btn background btn-sm w-100 ">Read Full Article</a>
                    </div>
                </div>
            </div>

        )
    }
}
