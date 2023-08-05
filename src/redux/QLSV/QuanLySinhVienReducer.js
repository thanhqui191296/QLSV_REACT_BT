import { QuanLySinhVien } from "./QuanLySinhVienConst"

const STATE_DEFAULT = {
    mangSinhVien: [{
        maSV: 1,
        hoTen: "Thanh Qúi",
        sdt: "0773524724",
        email:"thanhquy117@gmail.com"
    }]
}
export const quanLySinhVienReducer =  (state = STATE_DEFAULT,action ) =>{
    switch(action.type){
        case QuanLySinhVien.ThemSinhVien:{
            state.mangSinhVien = [...state.mangSinhVien, action.paylaod]
            return {...state}
        }
        default:
            return state
    }
}