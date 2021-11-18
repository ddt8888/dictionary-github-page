import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
// import posts from './postData'

/*

*/

function Menu({ menus }) {
    return (
        <>
            {menus.map((menu, id) => {
                return (
                    <Link key={id} to={menu.url} className="menu-item">{menu.name}</Link>
                )
            })}
            {/* 하드코딩? 했을때 */}
            {/* <Link to="/" className="menu-item">Home</Link>
            <Link to="/about" className="menu-item">About</Link>
            <Link to="/posts" className="menu-item">Post</Link>
            {/* Post Menu
            {posts.map((post, id) => {
                return (
                    <Link key={id} to={`/posts/${id}`} className="menu-item">{post.title}</Link>
                )
            })} */}
        </>
    )
}

export default Menu