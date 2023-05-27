// Array (mảng)
// Array là kiểu dữ liệu có thể lưu nhiều giá trị và mỗi giá trị được ngăn cách bởi 1 dấu phẩy
// cứu pháp : var tenBien = [];
// chúng ta có thể truyền nhiều kiểu dữ liệu khác nhau vào Array vd: ["A",4]
// một số cách để tương tác với Array:
// dùng vị trí index để lấy ra giá trị trong mảng, index của mảng bắt đầu từ số 0, khi muốn lấy ra vị trí theo index mong muốn ta gọi tới mảng[vị trí index], vd mangSinhVien[3]
// độ dài mảng: độ dài của một mảng sẽ bằng với số các phần tử có trong mảng
// lưu ý độ dài mảng luôn lớn hơn vị trí index 1 đơn vị

// thêm phần tử vào mảng
// thêm một  hoặc nhiều phần từ vào cuối mảng và trả về chiều dài mới của mảng ta dùng .push vd: (4)

var mangSinhVien = ["Văn A", "Văn B", "Thị C", 4, 20];
// lấy Văn A bằng vị trí index
console.log(mangSinhVien[0]);
// để kiểm tra độ dài mảng
console.log(mangSinhVien.length);
// lấy văn B bằng độ dài mảng
console.log(mangSinhVien[mangSinhVien.length - 4]);
// thêm 1 phần vào  cuối mảng (4)
mangSinhVien.push("Ngọc D");
console.log(mangSinhVien);
// lấy Ngọc D cuối mảng ra khỏi mảng và trả về chiều dài mới của mảng
var thiD = mangSinhVien.pop();
console.log(thiD);
console.log(mangSinhVien);
// thêm một phần tử hoặc nhiều phần tử vào đầu mảng
mangSinhVien.unshift("Ngọc F");
console.log(mangSinhVien);

//.splice dùng để xóa phần tử trong mảng .splice(index ,num) index vị trí cần số, num số phần tử cần xóa từ index
// vd xóa "thị C "
mangSinhVien.splice(3, 1);
console.log(mangSinhVien);

//mảng rỗng :length =0
var ArrayRong = [];

var hocSinhLop5 = ["khanh", "nhựt", "hiếu", "hằng", "sang"];
// đề bài: yêu cầu in ra màn hình một câu chào tới từng bạn trong lớp;

var kq = "";
// for (var i = 0; i <= 4; i++) {
//   kq += "chào " + hocSinhLop5[i] + " tới với lớp <br>";
// }
// for (var i = 0; i < hocSinhLop5.length; i++) {
//   kq += "chào " + hocSinhLop5[i] + " tới với lớp <br>";
// }

// chúng ta có thể dùng hàm foreach để duyệt qua từng phần tử trong mảng
// hàm foreach nhận vào một function có 2 tham số, tham số thứ nhất là đại diện từng phần tử trong mảng,tham số thứ 2 là vị trí index

hocSinhLop5.forEach(function (item, index) {
  kq += "chào " + item + " có vị trí " + index + " tới lớp" + "<br>";
});
document.getElementById("xuatKQ").innerHTML = kq;

