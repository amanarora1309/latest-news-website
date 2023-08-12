

import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>

            <div className="card m-auto" >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'

                }}>
                    <span className=" badge rounded-pill bg-danger" >{source}</span>
                </div>
                <img src={props.imageUrl ? imageUrl : 'https://gumlet.assettype.com/bloombergquint%2F2023-05%2F7b6a1210-f6a3-4f29-aa2c-478130bd151b%2Faustin_distel_744oGeqpxPQ_unsplash.jpg?w=1200&auto=format%2Ccompress&ogImage=true'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "UnKnown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
