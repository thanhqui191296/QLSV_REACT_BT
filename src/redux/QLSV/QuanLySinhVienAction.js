import { QuanLySinhVien } from "./QuanLySinhVienConst"

export const themSinhVienCreator = (payload)=>{
    return {
        type: QuanLySinhVien.ThemSinhVien,
        payload
    }
}