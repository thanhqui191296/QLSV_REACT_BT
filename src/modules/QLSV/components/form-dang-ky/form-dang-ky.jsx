import React, { Component } from 'react'

export default class FormDangKy extends Component {
  render() {
    return (
      <from className='g-3'>
        <div className='row'>
          <div className='col-6'>
            <div>
              <label htmlFor="ma">Mã SV</label>
              <input type="text"
              className="form-control"
              id="ma"
              name="ma"
              placeholder="" />
            </div>
            <div>
              <label htmlFor="sdt">Số điện thoại</label>
              <input type="text"
              className="form-control"
              id="sdt"
              name="sdt"
              placeholder="" />
            </div>
          </div>
          <div className='col-6'> 
            <div>
              <label htmlFor="ten">Họ Tên</label>
              <input type="text"
              className="form-control"
              id="ten"
              name="ten"
              placeholder=""  />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder=""  />
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <button className='btn btn-success '>Thêm sinh viên</button>
          <button className='btn btn-warning mx-4'>Chỉnh Sửa</button>
        </div>
      </from>
    )
  }
}
