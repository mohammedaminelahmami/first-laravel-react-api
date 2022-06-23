import React from 'react'
import Nav from '../../components/client/Nav'
import Table from '../../components/client/Table'

const Home = () => {
  return (
    <div>
        <Nav />
        <div className='mt-10'>
          <Table />
        </div>
    </div>
  )
}

export default Home