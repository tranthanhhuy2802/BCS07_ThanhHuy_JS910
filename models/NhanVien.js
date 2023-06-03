function NhanVien(
  _taiKhoanNV,
  _tenNV,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoanNV = _taiKhoanNV;
  this.tenNV = _tenNV;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = function () {
    var tongLuong = 0;
    switch (this.chucVu) {
      case "Sếp":
        tongLuong = this.luongCoBan * 3;
        break;
      case "Trưởng phòng":
        tongLuong = this.luongCoBan * 2;
        break;
      case "Nhân viên":
        tongLuong = this.luongCoBan * 1;
        break;
    }
    return tongLuong;
  };

  this.xepLoai = function () {
    var xepLoai = "";
    if (this.gioLam >= 192) {
      xepLoai = "Xuất Sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      xepLoai = "Giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      xepLoai = "Khá";
    } else {
      xepLoai = "Trung Bình";
    }
    return xepLoai;
  };
}
