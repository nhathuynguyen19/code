<script>
  // Lấy ra các phần tử div cần sử dụng
  var clickableDiv = document.getElementById('clickableDiv');
  var bannerMenu = document.getElementById('bannerMenu');

  // Thêm sự kiện click vào div
  clickableDiv.addEventListener('click', function() {
    // Kiểm tra trạng thái hiển thị của banner menu
    if (bannerMenu.style.display === 'none' || bannerMenu.style.display === '') {
      // Nếu ẩn, hiển thị banner menu
      bannerMenu.style.display = 'block';
    } else {
      // Nếu đang hiển thị, ẩn đi
      bannerMenu.style.display = 'none';
    }
  });
</script>