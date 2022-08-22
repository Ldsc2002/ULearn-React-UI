import React from 'react'

const { WidthProvider } = require('react-grid-layout')
let ResponsiveReactGridLayout = require('react-grid-layout')

ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout)

function truncate(str, n) {
    return (str.length > n) ? `${str.slice(0, n - 1)}...` : str
}

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
