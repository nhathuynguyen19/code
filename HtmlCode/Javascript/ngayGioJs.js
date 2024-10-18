function hienThiNgayGio() {
    const ngayGioHienTai = new Date();
    const divNgayGio = document.getElementById("ngayGio");

    divNgayGio.innerHTML = "Ngày và giờ hiện tại: " + ngayGioHienTai;
}

// Cập nhật mỗi giây
setInterval(hienThiNgayGio, 1000);