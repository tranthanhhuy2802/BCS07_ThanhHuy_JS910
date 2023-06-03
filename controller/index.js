var arrNhanVien = [];
getStorage();
Render();
//thêm Nhân Viên
function themNhanVien() {
  var nhanVien = getInformation();
  arrNhanVien.push(nhanVien);
  saveStorage(arrNhanVien);
  console.log(arrNhanVien);
  Render();
  document.querySelector("form").reset();
}
// xoa nhan vien
function xoaNhanVien(taiKhoanNV) {
  var index = timNhanVien(taiKhoanNV);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    saveStorage();
    Render();
  }
}
// editNhanVien
function suaNhanVien(taiKhoanNV) {
  var index = timNhanVien(taiKhoanNV);
  //Tìm thấy sinh viên object trong mảng ở vị trí edit => load lên input form
  if (index !== -1) {
    document.querySelector("#tknv").value = arrNhanVien[index].taiKhoanNV;
    document.querySelector("#name").value = arrNhanVien[index].tenNV;
    document.querySelector("#email").value = arrNhanVien[index].email;
    document.querySelector("#password").value = arrNhanVien[index].matKhau;
    document.querySelector("#datepicker").value = arrNhanVien[index].ngayLam;
    document.querySelector("#luongCB").value = arrNhanVien[index].luongCoBan;
    document.querySelector("#chucvu").value = arrNhanVien[index].chucVu;
    document.querySelector("#gioLam").value = arrNhanVien[index].gioLam;
  }
  document.querySelector("#btnThemNV").disabled = true;
  document.querySelector("#tknv").readOnly = true;
}
// cập nhật nhân viên
document.querySelector("#btnCapNhat").onclick = function () {
  //Lấy thông tin sau khi người dùng edit giao diện
  var nhanVienEdit = getInformation();
  console.log("nhanVienEdit", nhanVienEdit);
  var index = timNhanVien(nhanVienEdit.taiKhoanNV);
  arrNhanVien[index] = nhanVienEdit;
  saveStorage();
  Render();
  document.querySelector("form").reset();
  document.querySelector("#btnThemNV").disabled = false;
  document.querySelector("#tknv").readOnly = false;
};
// đóng form
document.querySelector("#btnDong").onclick = function () {
  document.querySelector("#tknv").readOnly = false;
  document.querySelector("#btnThemNV").disabled = false;
  document.querySelector("form").reset();
};
