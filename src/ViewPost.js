import React from 'react'
import { useSelector } from 'react-redux'


function ViewPost() {

    const posts = useSelector(state => state.posts)


    return (
        <>

            <div className='posts'>
                {
                    posts.map((post) => (
                        <div key={post.id}>{post.title}</div>
                    ))
                }
            </div>
        </>
    )
}

export default ViewPost
