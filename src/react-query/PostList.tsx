import { useState, Fragment } from "react";
import usePost from "./hooks/usePosts";

export interface Post {
    id: number;
    title: string
}
const PostList = () => {
    const pageSize = 10
    const [userId, setUserId] = useState<number>()
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePost({ userId, pageSize })
    
    if (isLoading) return (<p>Loading</p>)
    if (error) return (<p>{error.message}</p>)

    return (
        <>
            <select 
                className="form-select mb-3"
                onChange={(event) => setUserId(parseInt(event.target.value))}
                value={userId}
            >
                <option value=""></option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select>
            
            <ul className="list-group">
                {/* {data?.map(todo => (
                    <li className="list-group-item" key={todo.id}>{todo.title}</li>
                ))} */}
                {data.pages.map((page, index) => 
                    <Fragment key={index}>
                        {page.map(post => (
                            <li className="list-group-item" key={post.id}>{post.title}</li>
                        ))}
                    </Fragment>
                )}
            </ul>
            {/* <button 
                disabled={page === 1} 
                onClick={() => setPage(page-1)}
                className="btn btn-primary">Prev</button>
            <button 
                onClick={() => setPage(page+1)}
                className="btn btn-primary">Next</button> */}
                <br />
            <button 
                disabled={isFetchingNextPage}
                onClick={() => fetchNextPage() }>{isFetchingNextPage ? 'Loading': 'Load More'}</button>
            
        </>
    );
}
 
export default PostList;