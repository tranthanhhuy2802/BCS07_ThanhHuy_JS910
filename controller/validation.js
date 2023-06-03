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

// function kiemTraEmail(value, name) {
//   var regexEmail =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if (regexEmail.test(value)) {
//     document.querySelector(`#error-regex-${name}`).innerHTML = "";
//     return true;
//   }
//   document.querySelector(
//     `#error-regex-${name}`
//   ).innerHTML = `${name} không hợp lệ !`;
//   return false;
// }

// function kiemTraSo(value, name) {
//   var regex = /^[0-9]+$/;
//   if (regex.test(value)) {
//     document.querySelector(`#error-regex-${name}`).innerHTML = "";
//     return true;
//   }
//   document.querySelector(
//     `#error-regex-${name}`
//   ).innerHTML = `${name} không hợp lệ !`;
//   return false;
// }

// function kiemTraKyTu(value, name) {
//   var regex = /^[A-Z a-z]+$/;
//   // name = stringToSlug(name);
//   if (regex.test(value)) {
//     document.querySelector(`#error-regex-${name}`).innerHTML = "";
//     return true;
//   }
//   document.querySelector(
//     `#error-regex-${name}`
//   ).innerHTML = `${name} không hợp lệ !`;
//   return false;
// }

// function kiemTraDoDai(value, name, minLength, maxLength) {
//   if (value.trim().length < minLength || value.trim().length > maxLength) {
//     document.querySelector(
//       `#error-length-${name}`
//     ).innerHTML = `${name} từ ${minLength} - ${maxLength} ký tự !`;
//     return false;
//   }
//   document.querySelector(`#error-length-${name}`).innerHTML = ``;
//   return true;
// }

// function kiemTraGiaTri(value, name, minValue, maxValue) {
//   if (Number.isNaN(value) || value < minValue || value > maxValue) {
//     document.querySelector(
//       `#error-value-${name}`
//     ).innerHTML = `${name} giá trị từ ${minValue} - ${maxValue}`;
//     return false;
//   }

//   document.querySelector(`#error-value-${name}`).innerHTML = ``;
//   return true;
// }

// function kiemTraPassword(value, name) {
//   var regex =
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

//   if (regex.test(value)) {
//     document.querySelector(`#error-regex-${name}`).innerHTML = "";
//     return true;
//   }
//   document.querySelector(
//     `#error-regex-${name}`
//   ).innerHTML = `${name} không hợp lệ !`;
//   return false;
// }

// function kiemTraDateFormat(value, name) {
//   var regex =
//     /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;

//   if (regex.test(value)) {
//     document.querySelector(`#error-regex-${name}`).innerHTML = "";
//     return true;
//   }
//   document.querySelector(
//     `#error-regex-${name}`
//   ).innerHTML = `${name} không hợp lệ !`;
//   return false;
// }

// function kiemTraChucVu(value, name) {
//   if (value !== "Sếp" && value !== "Trưởng Phòng" && value !== "Nhân viên") {
//     document.querySelector(
//       `#error-required-${name}`
//     ).innerHTML = `${name} không hợp lệ !`;
//     return false;
//   }
//   document.querySelector(`#error-required-${name}`).innerHTML = "";
//   return true;
// }

// function kiemTraLuongCB(value, name) {
//   if (!kiemTraRong(value, name)) {
//     // document.querySelector(`#error-required-${name}`).innerHTML = `${name} không được bỏ trống!`;
//     return false;
//   }

//   if (value < 1000000 || value > 20000000) {
//     document.querySelector(
//       `#error-required-${name}`
//     ).innerHTML = `${name} không hợp lệ !`;

//     return false;
//   }
//   document.querySelector(`#error-required-${name}`).innerHTML = "";
//   return true;
// }

// function kiemTraGioLam(value, name) {
//   if (value === 0) {
//     document.querySelector(
//       `#error-required-${name}`
//     ).innerHTML = `${name} không được bỏ trống!`;
//     return false;
//   }

//   if (value < 80 || value > 200) {
//     document.querySelector(
//       `#error-required-${name}`
//     ).innerHTML = `${name} không hợp lệ !`;

//     return false;
//   }
//   document.querySelector(`#error-required-${name}`).innerHTML = "";
//   return true;
// }
