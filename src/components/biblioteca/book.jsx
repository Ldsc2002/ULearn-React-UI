import React from 'react'

export function truncate(str, n) {
    return (str.length > n) ? `${str.slice(0, n - 1)}...` : str
}
/* istanbul ignore next */
function BookCard(props) {
    const content = props.books.map((post) => (
        <div key={post.id} className="book-item" onClick={() => props.setButton(true, post)}>
            <h2 className="title_book">{truncate(post.title, 8)}</h2>
        </div>
    ))
    return (
        <div className="books_container">
            {content}
        </div>
    )
}

export default BookCard
