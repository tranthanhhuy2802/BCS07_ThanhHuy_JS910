// Lấy Thông Tin Nhân viên
function getInformation() {
  var _taiKhoanNV = document.getElementById("tknv").value;
  var _tenNV = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCoBan = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

  var valid = true;
  valid &= kiemTraRong(_taiKhoanNV, "tbTKNV");
  kiemTraRong(_tenNV, "tbTen");
  kiemTraRong(_email, "tbEmail");
  kiemTraRong(_matKhau, "tbMatKhau");
  kiemTraRong(_ngayLam, "tbNgay");
  kiemTraRong(_luongCoBan, "tbLuongCB");
  kiemTraRong(_chucVu, "tbChucVu");
  kiemTraRong(_gioLam, "tbGiolam");

  // kiemTraDoDai(_taiKhoanNV, "tbTKNV") &

  // kiemTraEmail(_email, "tbEmail") &

  // kiemTraPassword(_matKhau, "tbMatKhau") &

  // kiemTraLuongCB(_luongCoBan, "tbLuongCB") &
  // kiemTraDateFormat(_ngayLam, "tbNgay") &
  // kiemTraGioLam(_gioLam, "gioLam") &
  // kiemTraChucVu(_chucVu, "tbChucVu") &
  // kiemTraKyTu(_tenNV, "tbTen") &

  if (!valid) {
    return;
  }
  var nhanVien = new NhanVien(
    _taiKhoanNV,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );
  return nhanVien;
}

//Lưu mảng nhân viên vào local
function saveStorage() {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}
// hàm lấy dữ liệu từ localStorage
function getStorage() {
  // check điều kiện, nếu như gọi tới không có dưới local
  var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
  if (arrNhanVienLocal != null) {
    // nếu như arrSinhVienLocal có giá trị sẽ lấy giá trị đó
    arrNhanVien = arrNhanVienLocal;
  }
}

//Render Giao Diện
function Render() {
  var content = "";
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = new NhanVien();
    var arrNewNhanVien = arrNhanVien[i];
    Object.assign(nhanVien, arrNewNhanVien);

    var tongLuong = nhanVien.tongLuong();
    var xepLoai = nhanVien.xepLoai();

    content += ` <tr>
    <td>${nhanVien.taiKhoanNV}</td>
    <td>${nhanVien.tenNV}</td>
    <td>${nhanVien.email}</td>
    <td>${nhanVien.ngayLam}</td>
    <td>${nhanVien.chucVu}</td>
    <td>${tongLuong}</td>
    <td>${xepLoai}</td>
    <td><button onclick="xoaNhanVien('${nhanVien.taiKhoanNV}')" class="btn btn-danger">Xóa</button><button data-toggle="modal"
    data-target="#myModal" class="btn btn-warning" onclick="suaNhanVien('${nhanVien.taiKhoanNV}')">sửa</button></td>
  </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
// tìm index nhân viên
function timNhanVien(taiKhoanNV) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    // item đại điện cho một sinhVien trong mảng arrSinhVien
    if (item.taiKhoanNV == taiKhoanNV) {
      viTri = index;
    }
  });
  return viTri;
}
// gán thông nhân viên
function ganGiaTriChoInput(
  taiKhoanNV,
  tenNV,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  // reset input sua khi thêm thành công

  document.getElementById("tknv").value = taiKhoanNV;
  document.getElementById("name").value = tenNV;
  document.getElementById("email").value = email;
  document.getElementById("password").value = matKhau;
  document.getElementById("tbNgay").value = ngayLam;
  document.getElementById("luongCB").value = luongCoBan;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}
