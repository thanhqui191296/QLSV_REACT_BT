import React, { Component } from 'react'

export default class ListProduct extends Component {
  render() {
    return (
      <table className='table mt-10'>
        <thead >
          <tr className='table-dark text-white'>
            <th scope='col'>Mã SV</th>
            <th scope='col'>Họ Tên</th>
            <th scope='col'>Số điện thoại</th>
            <th scope='col'>Email</th>
            <th scope='col'></th>
          </tr> 
        </thead>
      </table>
    )
  }
}
