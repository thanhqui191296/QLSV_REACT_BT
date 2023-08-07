import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chinhSuaThongTinCreator, xoaSinhVienCreator } from '../../../../redux/QLSV/QuanLySinhVienAction'

class ListProduct extends Component {

  render() {
    return (
      <div>
        <table className='table mt-10'>
          <thead >
            <tr className='table-dark text-white text-center'>
              <th scope='col'>Mã SV</th>
              <th scope='col'>Họ Tên</th>
              <th scope='col'>Số điện thoại</th>
              <th scope='col'>Email</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {this.props.mangSinhVien.map((sv) => {
              return (
                <tr key={sv.maSV} className='text-center' >
                  <th scope='row'>{sv.maSV}</th>
                  <td>{sv.hoTen}</td>
                  <td>{sv.sdt}</td>
                  <td>{sv.email}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => {
                      if (window.confirm('Bạn có muốn xóa sinh viên này?')) {
                        this.props.dispatch(xoaSinhVienCreator({ maSV: sv.maSV }))
                      }
                    }}>Xóa</button>
                    <button className='btn btn-warning mx-2' onClick={() => { this.props.dispatch(chinhSuaThongTinCreator(sv)) }}>Edit</button>
                  </td>

                </tr>)

            })}

          </tbody>

        </table>
      </div>
    )
  }
  componentWillUnmount() {

  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangSinhVien: rootReducer.quanLySinhVienReducer.mangSinhVien
  }
}
export default connect(mapStateToProps)(ListProduct)