function updateTime() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Định dạng ngày giờ
  const dateString = `${day}/${month}/${year}`;
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Hiển thị ngày giờ
  document.getElementById(
    "clock"
  ).textContent = `${dateString} - ${timeString}`;
}

// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);

// Gọi hàm ngay khi tải trang
updateTime();
