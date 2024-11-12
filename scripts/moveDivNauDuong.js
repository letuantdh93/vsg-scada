function makeDraggable(element) {
  let offsetX = 0,
    offsetY = 0,
    startX = 0,
    startY = 0;

  // Lấy phần tử span con trong div, nơi bạn muốn kích hoạt di chuyển
  const spanElement = element.querySelector("span");

  if (!spanElement) return; // Nếu không tìm thấy span, không thực hiện gì cả

  // Khi nhấn chuột vào span, ghi lại vị trí chuột và phần tử
  spanElement.addEventListener("mousedown", function (e) {
    e.preventDefault(); // Ngừng hành động mặc định của trình duyệt
    startX = e.clientX; // Xác định vị trí chuột ban đầu
    startY = e.clientY; // Xác định vị trí chuột ban đầu
    offsetX = element.offsetLeft; // Vị trí hiện tại của div
    offsetY = element.offsetTop; // Vị trí hiện tại của div
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  // Cập nhật vị trí của phần tử khi chuột di chuyển
  function onMouseMove(e) {
    const deltaX = e.clientX - startX; // Tính khoảng cách di chuyển theo chiều X
    const deltaY = e.clientY - startY; // Tính khoảng cách di chuyển theo chiều Y
    element.style.left = offsetX + deltaX + "px"; // Cập nhật vị trí mới của div
    element.style.top = offsetY + deltaY + "px"; // Cập nhật vị trí mới của div
  }

  // Khi nhả chuột, ngừng di chuyển
  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
}

async function editWidget() {
  // Tải dữ liệu từ tệp JSON
  const response = await fetch("./data/setting.json");
  const data = await response.json();
  let tittle = "";
  let divId = "";
  let top = "";
  let left = "";
  let width = "";
  let height = "";
  let id = "";
  let updatedWidget = {
    tittle,
    top,
    left,
    style: "gauge",
    inputType: "tcp",
    width,
    height,
    id,
  };

  document.querySelectorAll(".widget").forEach((div) => {
    div.addEventListener("mouseup", function () {
      // Tìm span với class "tittle" bên trong div
      tittle = div.querySelector(".tittle").textContent;
      updatedWidget.tittle = tittle;
      // Lấy id của div được click
      divId = this.id;
      const computedStyle = window.getComputedStyle(
        document.getElementById(divId)
      );

      top = computedStyle.top; // Lấy giá trị top tính toán
      left = computedStyle.left; // Lấy giá trị left tính toán
      width = computedStyle.width; // Lấy giá trị width tính toán
      height = computedStyle.height; // Lấy giá trị height tính toán
      id = divId;
      updatedWidget.top = top;
      updatedWidget.left = left;
      updatedWidget.width = width;
      updatedWidget.height = height;
      updatedWidget.id = id;
      const targetWidget = data.nauDuongSetting.find(
        (object) => object.id === divId
      );
      editWidget.style = targetWidget.style;

      try {
        if (tittle) {
          fetch(`http://103.7.40.78:3000/update-nau-duong-widget/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedWidget),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Lỗi:", error));
        } else {
          console.log("fail data!");
        }
      } catch (error) {
        console.error("Lỗi chung:", error);
        console.log(JSON.stringify(updatedWidget));
      }
    });
  });
}

//Edit name widget
function renameWidget(spanElement) {
  // Lấy nội dung của span
  const currentValue = spanElement.textContent;

  // Tạo input và gán giá trị từ span
  const input = document.createElement("input");
  input.type = "text";
  input.className = "tittle";
  input.style.width = "100%";
  input.value = currentValue;

  // Thay thế span bằng input
  spanElement.replaceWith(input);
  input.focus();

  // Khi người dùng nhấn Enter hoặc mất focus, lưu lại và chuyển về span
  input.addEventListener("blur", function () {
    saveChanges(input);
  });
}

function saveChanges(inputElement) {
  // Lấy giá trị mới từ input
  const newValue = inputElement.value;

  // Tạo lại span với nội dung mới
  const span = document.createElement("span");
  span.className = "tittle";
  span.textContent = newValue;
  span.ondblclick = function () {
    renameWidget(span);
  };
  span.onmouseup = function () {
    editWidget(span);
  };

  // Thay thế input bằng span
  inputElement.replaceWith(span);

  const widgetDiv = span.closest(".widget"); // Lấy div cha chứa span
  makeDraggable(widgetDiv); // Gọi lại makeDraggable cho div
  editWidget(widgetDiv); // luu thong tin cho div
}
