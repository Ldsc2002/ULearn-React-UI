import React from 'react'

const { WidthProvider } = require('react-grid-layout')
let ResponsiveReactGridLayout = require('react-grid-layout')

ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout)

function BookCard(props) {
    const content = props.books.map((post) => (
        <div key={post.id} className="book-item">
            <h2 className="title">{post.title}</h2>
            <p className="desc">{post.content}</p>
            <button className='open' type="button" onClick={() => props.setButton(true, post)}>Abrir</button>
        </div>
    ))

    return (
        <div className='books_container'>
            {content}
        </div>
    )
}

export default BookCard
