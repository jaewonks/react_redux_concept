import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addView } from '../redux'

const Views = ({count, addView}) => {
  const [num, setNum] = useState(1)
  return (
    <div className='items'>
      <h2>조회 수 : {count}</h2>
      <input type='text' value={num} onChange={ (e) => setNum(e.target.value) }></input>
      <button onClick={() => addView(num)}>조회하기</button>
    </div>
  )
}

const mapStateToProps = ({view}) => {
  return {
    count: view.count
  }
}

const mapDispatchToProps = {
  addView: (num) => addView(num)
}

export default connect(mapStateToProps,mapDispatchToProps)(Views)
