import React from 'react'
import $ from 'jquery'

const { WidthProvider } = require('react-grid-layout')
let ResponsiveReactGridLayout = require('react-grid-layout')

ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout)


function BookCard(props) {
    const content = props.books.map((post) => (
        <div key={post.id} className="book-item" onClick={() => props.setButton(true, post)}>
            <h2 className="title_book">{post.title}</h2>
        </div>
    ))

    return (
        <div className='books_container'>
            {content} 
        </div>
    )
}

export default BookCard
