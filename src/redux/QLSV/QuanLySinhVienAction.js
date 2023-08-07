import { QuanLySinhVien } from "./QuanLySinhVienConst"

export const themSinhVienCreator = (payload)=>{
    return {
        type: QuanLySinhVien.ThemSinhVien,
        payload
    }
}
export const xoaSinhVienCreator  = (payload)=>{
    return{
        type: QuanLySinhVien.XoaSanPham,
        payload
    }
}
export const chinhSuaThongTinCreator = (payload) =>{
    return {
        type: QuanLySinhVien.ChinhSuaThongTin,
        payload
    }
}
export const hoanThienChinhSuaCreator = (payload) =>{
    return{
        type: QuanLySinhVien.HoanThienChinhSua,
        payload
    }
}
export const timKiemThongTinCreator = (payload) =>{
    return{
        type:QuanLySinhVien.TimThongTin,
        payload
    }
}