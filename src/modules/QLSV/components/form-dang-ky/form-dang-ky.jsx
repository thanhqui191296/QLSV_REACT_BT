import React, { Component } from 'react'
import { connect } from 'react-redux';
import { themSinhVienCreator } from '../../../../redux/QLSV/QuanLySinhVienAction';


const mapper = {
  maSV :"Mã sinh viên",
  hoTen: "Họ và tên",
  sdt: "Số điện thoại",
  email:"Email"
}
class FormDangKy extends Component {
  state = {
    value: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
    touch: {
      maSV: false,
      hoTen: false,
      sdt: false,
      email: false,
    },
    error:{
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    }
  };

  hanldeChange = (event) => {
    const { id, name, value, className } = event.target
    let newError ={}
    for (const key in this.state.touch){
      if(this.state.touch[key]){
        const _value = key == id ? value : this.state.value[key]
        if(_value.length === 0){
          newError[key] = key + " không được bỏ trống"
        }
        switch(key){
          case "email":{
            if(/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(_value) === false){
              newError[key] = "Email không hợp lệ"
            }
            break
          }
          case "sdt":{
            if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(_value) === false){
              newError[key] = "Số điện thoại không hợp lệ"
            }
          }
          default:{
            break
          }
        }
        if(_value.length === 0){
          newError[key] = mapper[key] + " không được bỏ trống"
        }
      }
    }
    this.setState({
      value: {
        ...this.state.value,
        [id]: value
      },
      error: newError,
    })
  }
  hanldeFocus = (event) => {
    const { id } = event.target
    this.setState({
      touch: {
        ...this.state.touch,
        [id]: true
      }
    })
  }
  hanldeSubmit = (event)=>{
    event.preventDefault()  
    for (const key in this.state.value){
      if(this.state.value[key].length === 0){
        return
      }
      if (this.state.error[key]?.length >0){
        return
      }
    }
    console.log("submit", this.state.value)
    this.props.dispatch(themSinhVienCreator(this.state.value))
  }
  
  render() {
    // console.log(this.state)
    return (
      <form onSubmit={this.hanldeSubmit} className='g-3'>
        <div className='row'>
          <div className='col-6'>
            <div>
              <label htmlFor="maSV">Mã SV</label>
              <input
                onFocus={this.hanldeFocus}
                value={this.state.value.ma}
                onChange={this.hanldeChange}
                type="text"
                className="form-control"
                id="maSV"
                name="MaSV"
                placeholder="" />
                {
                  this.state.touch.maSV && this.state.error.maSV && (
                    <p className='text-red-600'>{this.state.error.maSV}</p>
                  )
                }
             
            </div>
            <div>
              <label htmlFor="sdt">Số điện thoại</label>
              <input
              onFocus={this.hanldeFocus}
                value={this.state.value.sdt}
                onChange={this.hanldeChange}
                type="text"
                className="form-control"
                id="sdt"
                name="sdt"
                placeholder="" />
                {
                  this.state.touch.sdt && this.state.error.sdt && (
                    <p className='text-red-600'>{this.state.error.sdt}</p>
                  )
                }
            </div>
          </div>
          <div className='col-6'>
            <div>
              <label htmlFor="ten">Họ Tên</label>
              <input
              onFocus={this.hanldeFocus}
                value={this.state.value.name}
                onChange={this.hanldeChange}
                type="text"
                className="form-control"
                id="hoTen"
                name="name"
                placeholder="" />
                {
                  this.state.touch.hoTen && this.state.error.hoTen && (
                    <p className='text-red-600'>{this.state.error.hoTen}</p>
                  )
                }
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
              onFocus={this.hanldeFocus}
                value={this.state.value.email}
                onChange={this.hanldeChange}
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="" />
                {
                  this.state.touch.email && this.state.error.email && (
                    <p className='text-red-600'>{this.state.error.email}</p>
                  )
                }
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <button className='btn btn-success'>Thêm sinh viên</button>
          <button className='btn btn-warning mx-4'>Chỉnh Sửa</button>
        </div>
      </form>
    )
  }
}


export default connect()(FormDangKy)