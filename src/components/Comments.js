import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../redux'

const Comments = ({fetchComments, loading, comments}) => {
  useEffect(() => {
    fetchComments()
  }, []) //반복인자  여러번 실행되지 않고 한번만 실행
  const commentsItems = loading ? (<div>loading...</div>) : (
    comments.map(comment => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  )
  return (
    <div className='comments'>
      {commentsItems}
    </div>
  )
}

const mapStateToProps = ({comments}) => {
  return {
    comments: comments.items
  }
}
const mapDispatchToProps = {
  fetchComments
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)
