import React from 'react'

export default function NewsItem(props) { 
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
                <div className="card">
                    <img src={pic} height="180px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 30) + "..."}</h5>
                        <hr />
                        <h5 className='news-source'>{source}</h5>
                        <h5 className='news-source'>{`${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}  ${new Date(date).getHours()}:${new Date(date).getMinutes()}:${new Date(date).getSeconds()}`}</h5>
                        <p className="card-text">{description.slice(0,180) + "..."}</p>
                        <a href={url} className="btn background btn-sm w-100 ">Read Full Article</a>
                    </div>
                </div>
            </div>

        )
    }

