let vatLy = parseFloat(prompt("Nhập điểm Vật lý: "));
let hoaHoc = parseFloat(prompt("Nhập điểm Hóa học: "));
let sinhHoc = parseFloat(prompt("Nhập điểm Sinh học: "));
let diemTrungBinh = (vatLy + hoaHoc + sinhHoc) / 3;
let tongDiem = vatLy + hoaHoc + sinhHoc;
document.write("Điểm trung bình: " + diemTrungBinh.toFixed(2));
document.write("<br>Tổng điểm: " + tongDiem.toFixed(2));
