function kiemTraRong(value, idthongbao) {
  if (value) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idthongbao).style.display = "inline-block";
    document.getElementById(idthongbao).innerHTML = "không được bỏ trống!";
    return false;
  }
}

function kiemTraEmail(value, idthongbao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(value)) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  }
  document.getElementById(idthongbao).style.display = "inline-block";

  document.getElementById(idthongbao).innerHTML = `email không hợp lệ !`;
  return false;
}

function kiemTraSo(value, idthongbao) {
  var regex = /^[0-9]+$/;
  if (regex.test(value)) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  }
  document.getElementById(idthongbao).innerHTML = `không hợp lệ !`;
  return false;
}

function kiemTraKyTu(value, idthongbao) {
  var regex = /[a-zA-Z]/g;
  if (regex.test(value)) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  }
  document.getElementById(idthongbao).style.display = "inline-block";
  document.getElementById(idthongbao).innerHTML = `tên không hợp lệ !`;
  return false;
}

function kiemTraDoDai(value, idthongbao, minLength, maxLength) {
  if (value.trim().length < minLength || value.trim().length > maxLength) {
    document.getElementById(idthongbao).style.display = "inline-block";

    document.getElementById(
      idthongbao
    ).innerHTML = `tài khoàn Nhân Viên từ ${minLength} - ${maxLength} ký tự !`;
    return false;
  }
  document.getElementById(idthongbao).innerHTML = ``;
  return true;
}

function kiemTraPassword(value, idthongbao) {
  var regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

  if (regex.test(value)) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  }
  document.getElementById(idthongbao).style.display = "inline-block";

  document.getElementById(
    idthongbao
  ).innerHTML = `mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
  để trống !`;
  return false;
}

function kiemTraDateFormat(value, idthongbao) {
  var regex =
    /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;

  if (regex.test(value)) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  }
  document.getElementById(idthongbao).style.display = "inline-block";

  document.getElementById(idthongbao).innerHTML = `date không hợp lệ !`;
  return false;
}

function kiemTraChucVu(value, idthongbao) {
  if (value !== "Sếp" && value !== "Trưởng Phòng" && value !== "Nhân viên") {
    document.getElementById(idthongbao).style.display = "inline-block";

    document.getElementById(
      idthongbao
    ).innerHTML.innerHTML = `Chức vụ không hợp lệ !`;
    return false;
  }
  document.getElementById(idthongbao).innerHTML = "";
  return true;
}

function kiemTraLuongCB(value, idthongbao) {
  if (!kiemTraRong(value, idthongbao)) {
    return false;
  }

  if (value < 1000000 || value > 20000000) {
    document.getElementById(idthongbao).style.display = "inline-block";

    document.getElementById(idthongbao).innerHTML = `LươngCB không hợp lệ !`;

    return false;
  }
  document.getElementById(idthongbao).innerHTML = "";
  return true;
}

function kiemTraGioLam(value, idthongbao) {
  if (value === 0) {
    document.getElementById(idthongbao).style.display = "inline-block";

    document.getElementById(
      idthongbao
    ).innerHTML = `giờ làm không được bỏ trống!`;
    return false;
  }

  if (value < 80 || value > 200) {
    document.getElementById(idthongbao).style.display = "inline-block";

    document.getElementById(idthongbao).innerHTML = ` không hợp lệ !`;

    return false;
  }
  document.getElementById(idthongbao).innerHTML = "";
  return true;
}
