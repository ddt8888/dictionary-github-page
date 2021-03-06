import React from 'react'
import { useParams, NavLink, useSearchParams } from 'react-router-dom'
import posts from '../postData'
import './Post.css'

function Post() {
    const params = useParams() // URL 파라미터 정보를 반환함
    const post = posts[params.postId]
    const [searchParams, setSearchParams] = useSearchParams()
    const applyActiveColor = ({ isActive }) => (isActive ? { color: 'orangered' } : {})

    // URL 쿼리스트링 값을 사용자가 입력한 키워드로 설정함(변경함)
    const changeQueryString = (e) => {
        const filter = e.target.value   // 사용자가 입력한 키워드
        if (filter) {
            setSearchParams({ filter })
        } else {
            setSearchParams({})
        }
    }
    return (
        <>
            {/* 쿼리스트링을 이용한 검색 */}
            <br />
            <br />
            <input className="filter-post" placeholder="Search post..." onChange={changeQueryString}></input>
            <br />
            <br />
            {/* 블로그 전체 목록 보여주기 */}
            {posts
                .filter(post => {
                    const filter = searchParams.get('filter')
                    if (!filter) return true;
                    const title = post.title.toLowerCase()
                    return title.includes(filter.toLowerCase())

                })
                .map((post, id) => {
                    return (
                        <NavLink key={id} to={`/posts/${id}`} className="post-item" style={applyActiveColor}>{post.title}</NavLink>
                    )
                })}

            {/* 특정 블로그 포스트 보여주기 */}
            {post ?
                <>
                    <div className="post-container">
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                        <span>{post.created}</span>
                    </div>
                </> :
                <h1>POST PAGE</h1>}

        </>
    )
}

export default Post