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

/**
 * depricado - No se ve bien y no contribuye a la apariencia
 * <button className='open' type="button" onClick={() => props.setButton(true, post)}>Abrir</button>
 * <p className="desc">{post.content}</p>
 */