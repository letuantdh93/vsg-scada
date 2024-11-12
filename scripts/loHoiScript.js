// Hàm tải dữ liệu JSON và tạo các phần tử div
async function loadAndDisplay() {
  try {
    // Tải dữ liệu từ tệp JSON
    const response = await fetch("./data/setting.json");
    const data = await response.json();

    // Chọn container để chứa các div
    const container = document.getElementById("container");

    // Lặp qua mỗi đối tượng trong mảng "div" và tạo div tương ứng
    data.loHoiSetting.forEach((divData, index) => {
      const newDiv = document.createElement("div");
      newDiv.className = "widget"; // Thiết lập class cho div
      newDiv.id = divData.id; // Thiết lập id cho div
      newDiv.style.width = divData.width;
      newDiv.style.height = divData.height;
      newDiv.style.top = divData.top;
      newDiv.style.left = divData.left;
      newDiv.setAttribute("onmouseup", "editWidget(this)");

      // Tạo thẻ span mới
      const newSpan = document.createElement("span");
      newSpan.className = "tittle";
      newSpan.id = "tittle" + (index + 1); // Thiết lập id cho tittle
      newSpan.textContent = divData.tittle; // Thêm nội dung cho span
      newSpan.setAttribute("ondblclick", "renameWidget(this)");
      // Tạo thẻ span mới
      const optionSpan = document.createElement("span");
      optionSpan.className = "option";
      optionSpan.textContent = "..."; // Thêm nội dung cho span
      optionSpan.setAttribute("onmousedown", "checkDivId(); letDivId()"); // Thêm sự kiện cho mỗi span ngay khi tạo
      // Lắng nghe sự kiện click trên container để áp dụng cho các span động
      container.addEventListener("click", function (event) {
        const contextMenu = document.getElementById("contextMenu");
        // Kiểm tra nếu phần tử được click có class là option
        if (event.target.classList.contains("option")) {
          // Đặt vị trí của contextMenu theo vị trí chuột
          contextMenu.style.left = event.clientX - 160 + "px";
          contextMenu.style.top = event.clientY - 10 + "px";
          contextMenu.style.display = "block";
        }
      });

      // Ẩn contextMenu khi nhấp chuột ra ngoài
      document.addEventListener("click", function (event) {
        if (!event.target.classList.contains("option")) {
          contextMenu.style.display = "none";
        }
      });
      // Thêm span vào bên trong div
      newDiv.appendChild(newSpan);
      newDiv.appendChild(optionSpan);

      // Thêm div vào "container"
      container.appendChild(newDiv);
      makeDraggable(document.getElementById(divData.id));

      const newImg = document.createElement("img");
      switch (divData.style) {
        case "gauge":
          newImg.src = "./img/gauge.gif"; // Đường dẫn ảnh của bạn
          newImg.alt = "gauge"; // Chú thích ảnh
          newImg.style.width = "100%";
          newImg.style.height = "90%";
          newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div
          // Thêm <img> vào trong <div> đã chọn
          newDiv.appendChild(newImg);
          break;
        case "line":
          newImg.src = "./img/lineChart.gif"; // Đường dẫn ảnh của bạn
          newImg.alt = "gauge"; // Chú thích ảnh
          newImg.style.width = "100%";
          newImg.style.height = "90%";
          newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div
          // Thêm <img> vào trong <div> đã chọn
          newDiv.appendChild(newImg);
          break;
        case "line":
          newImg.src = "./img/lineChart.gif"; // Đường dẫn ảnh của bạn
          newImg.alt = "gauge"; // Chú thích ảnh
          newImg.style.width = "100%";
          newImg.style.height = "90%";
          newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div
          // Thêm <img> vào trong <div> đã chọn
          newDiv.appendChild(newImg);
          break;
        case "bar":
          newImg.src = "./img/barChart.gif"; // Đường dẫn ảnh của bạn
          newImg.alt = "gauge"; // Chú thích ảnh
          newImg.style.width = "100%";
          newImg.style.height = "90%";
          newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div
          // Thêm <img> vào trong <div> đã chọn
          newDiv.appendChild(newImg);
          break;
        case "water":
          newImg.src = "./img/water.gif"; // Đường dẫn ảnh của bạn
          newImg.alt = "gauge"; // Chú thích ảnh
          newImg.style.width = "100%";
          newImg.style.height = "90%";
          newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div
          // Thêm <img> vào trong <div> đã chọn
          newDiv.appendChild(newImg);
          break;
        case "sankey":
          newImg.src = "./img/sankey.gif"; // Đường dẫn ảnh của bạn
          newImg.alt = "gauge"; // Chú thích ảnh
          newImg.style.width = "100%";
          newImg.style.height = "90%";
          newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div
          // Thêm <img> vào trong <div> đã chọn
          newDiv.appendChild(newImg);
          break;
        case "status":
          newImg.src = "./img/lamp.gif"; // Đường dẫn ảnh của bạn
          newImg.alt = "gauge"; // Chú thích ảnh
          newImg.style.width = "100%";
          newImg.style.height = "90%";
          newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div
          // Thêm <img> vào trong <div> đã chọn
          newDiv.appendChild(newImg);
          break;

        default:
          break;
      }
    });
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
  }
}

// Gọi hàm khi tải trang
loadAndDisplay();
