import { QuanLySinhVien } from "./QuanLySinhVienConst"

const STATE_DEFAULT = {
    mangSinhVien: JSON.parse(localStorage.getItem('sinhVien') ?? JSON.stringify([])),
    svChinhSua: null,
    mangTimKiem: []
}
export const quanLySinhVienReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case QuanLySinhVien.ThemSinhVien: {
            state.mangSinhVien = [...state.mangSinhVien, action.payload]
            localStorage.setItem('sinhVien', JSON.stringify(state.mangSinhVien))
            return { ...state }
        }
        case QuanLySinhVien.XoaSanPham: {
            state.mangSinhVien = state.mangSinhVien.filter((sv) => sv.maSV !== action.payload.maSV),
                localStorage.setItem('sinhVien', JSON.stringify(state.mangSinhVien))
            return { ...state }
        }
        case QuanLySinhVien.ChinhSuaThongTin: {
            state.svChinhSua = action.payload
            return { ...state }
        }
        case QuanLySinhVien.HoanThienChinhSua: {
            const index = state.mangSinhVien.findIndex((i) => i.maSV === action.payload.maSV)
            if (index === -1) {
                return { ...state }
            }
            state.mangSinhVien[index] = action.payload
            state.mangSinhVien = [...state.mangSinhVien]
            state.svChinhSua = null
            return { ...state }
        }
        case QuanLySinhVien.TimThongTin: {
            const tuTim = action.payload.toLowerCase();
            const tuTimReplace = tuTim.replace(/\s/g, '');
            const newMangTimKiem = state.mangTimKiem.filter(sv => {
                const thuong = sv.hoTen.toLowerCase();
                const tenReplace = thuong.replace(/\s/g, '');
                return tenReplace.indexOf(tuTimReplace) > -1;
            });

            return {
                ...state,
                mangTimKiem: newMangTimKiem
            }
        }
        default:
            return state
    }
}