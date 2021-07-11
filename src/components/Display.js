import React from 'react'
import { connect } from 'react-redux'

const Display = ({count}) => {
  return (
    <div className='items'>
      <p>구독자 수: {count}</p>
    </div>
  )
}

const mapStateToProps = ({subscribers}) => {
  return {
    count: subscribers.count
  }
}

export default connect(mapStateToProps)(Display)

