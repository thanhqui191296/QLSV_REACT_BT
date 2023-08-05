import React, { Component } from 'react'
import FormDangKy from './components/form-dang-ky/form-dang-ky'
import ListProduct from './components/list-product/list-product'
export class QuanLySinhVien extends Component {
  render() {
    return (
      <div className='title'>
        <div className='bg-slate-500 text-center text-white text-5xl py-3'>
        Thông Tin Sinh Viên
        </div>
        <div className='container mt-3'>
          <FormDangKy />
          <ListProduct />
        </div>

      </div>
    )
  }
}

