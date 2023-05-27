// Đề 1
var arr1 = [];

function luuMang() {
  var n = document.getElementById("soN").value * 1;
  arr1.unshift(n);
  console.log(arr1);
  document.getElementById("mangNguoiDungNhap").innerHTML = arr1;
}
function tongSoChan() {
  var tongChan = 0;
  for (var i = 0; i < arr1.length; i++)
    if (arr1[i] % 2 == 0) {
      tongChan += arr1[i];
    }
  document.getElementById("tongCacSoChan").innerHTML = tongChan;
}
function demSoAm() {
  var demSoAm = 0;
  for (var i = 0; i < arr1.length; i++)
    if (arr1[i] < 0) {
      demSoAm++;
    }
  document.getElementById("demCacSoAm").innerHTML = demSoAm;
}
// function demCacSoAm() {
//   var demSoAm = 0;
//   arr1.forEach(function (item, index) {
//     if (item < 0) {
//       demSoAm++;
//     }
//   });
//   document.getElementById("demCacSoAm").innerHTML = demSoAm;
// }

function tinhTongSom() {
  var tinhTongAm = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
      tinhTongAm += arr1[i];
    }
  }
  document.getElementById("tongCacSoAm").innerHTML = tinhTongAm;
}

function tongSoDuong() {
  var tongSoDuong = 0;
  for (var i = 0; i <= arr1.length; i++) {
    if (arr1[i] >= 0) {
      tongSoDuong += arr1[i];
    }
  }
  document.getElementById("tongCacSoDuong").innerHTML = tongSoDuong;
}

function demSoDuong() {
  var demSoDuong = 0;
  for (var i = 0; i <= arr1.length; i++) {
    if (arr1[i] >= 0) {
      demSoDuong += 1;
    }
  }
  document.getElementById("demCacSoDuong").innerHTML =
    "Đếm Số Dương" + demSoDuong;
}

function timSoNhoNhat() {
  var soNhoNhat = arr1[0];
  for (var i = 0; i <= arr1.length; i++) {
    if (arr1[i] < soNhoNhat) {
      soNhoNhat = arr1[i];
    }
  }
  document.getElementById("timSoNhoNhat").innerHTML =
    "Số Nhỏ Nhất :" + soNhoNhat;
}

function timSoDuongNhoNhat() {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      min = arr1[i];
      break;
    }
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0 && arr1[i] < min) {
      min = arr1[i];
    }
  }
  document.getElementById("timSoDuongNhoNhat").innerHTML =
    "Số Dương Nhỏ Nhất " + min;
}

function timSoChanCuoiCung() {
  var viTri = -1;
  var soChanCuoi = "";
  for (var j = arr1.length - 1; j >= 0; j--) {
    if (arr1[j] % 2 == 0) {
      soChanCuoi = arr1[j];
      viTri = j;
      break;
    }
    soChanCuoi = "khoong co";
    viTri;
  }
  document.getElementById("timSoChanCuoiCung").innerHTML =
    "số chắn cuối cùng: " + soChanCuoi + " index = " + viTri;
}
// Đổi vị trí
function doiViTri() {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;

  var temp = arr1[viTri1];
  arr1[viTri1] = arr1[viTri2];
  arr1[viTri2] = temp;

  document.getElementById("doiViTri").innerHTML =
    "Mảng sau khi hoán đổi: " + arr1;
}

// Sắp xếp mảng tăng dần
function sapXep() {
  for (var i = 0; i < arr1.length - 1; i++) {
    for (var j = i + 1; j < arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        var temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  document.getElementById("mangTangDan").innerHTML =
    "Sắp Xếp Tăng Dần: " + arr1;
}

// Tìm số nguyên tố đầu tiên
function kiemtra(n) {
  //flag = 0 => không phải số nguyên tố
  //flag = 1 => số nguyên tố
  var flag = 1;
  if (n < 2) return (flag = 0);
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
  }
  return flag;
}
function soNT() {
  var so = -1;
  for (var i = 0; i < arr1.length; i++) {
    if (kiemtra(arr1[i]) == 1) {
      so = arr1[i];
      break;
    }
  }
  document.getElementById("soNTDauTien").innerHTML =
    "số Nguyên Tố Đầu Tiên: " + so;
}

//So sánh số lượng âm và dương
function soSanhMang() {
  var duong = 0;
  var am = 0;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      duong++;
    }
    if (arr1[i] < 0) {
      am++;
    }
  }

  if (duong > am) {
    document.getElementById("soSanhAmDuong").innerHTML = "Số dương > số âm";
  } else if (duong < am) {
    document.getAnimations("soSanhAmDuong").innerHTML = "Số âm > số dương";
  } else {
    document.getElementById("soSanhAmDuong").innerHTML = "Số dương = số âm";
  }
}

//Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
var arrNew = [];
function themMangMoi() {
  var so = Number(document.getElementById("soMoi").value);
  arrNew.push(so);
  document.getElementById("mangMoi").innerHTML = arrNew;
}

function soNguyen() {
  var count = 0;
  for (var i = 0; i < arrNew.length; i++) {
    if (Number.isInteger(arrNew[i])) {
      count++;
    }
  }
  document.getElementById("tongSoNguyen").innerHTML =
    "Tổng Số Nguyên có trong mảng : " + count;
}
