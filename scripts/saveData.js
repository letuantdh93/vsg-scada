let spanId = "";
let divId = "";

//Create newWidget info
let newWidget = {
  tittle: "New Widget",
  top: "300px",
  left: "350px",
  style: "gauge",
  inputType: "tcp",
  width: "250px",
  height: "350px",
  id: "",
};

function addWidget() {
  const now = new Date();

  // Lấy thông tin thời gian
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Tháng từ 0-11, nên cần +1
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Nối tất cả thành một chuỗi duy nhất
  const dateTimeString = year + month + day + hours + minutes + seconds;

  // Chuyển sang hex
  const hexDateTime = parseInt(dateTimeString, 10).toString(16);
  newWidget.id = hexDateTime;
  document.getElementById("confirm").style.display = "flex";
}
function createWidget() {
  document.getElementById("confirm").style.display = "none";
  fetch("http://localhost:3000/add-widget", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWidget),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Lỗi:", error));
}

function hideConfirm() {
  document.getElementById("confirm").style.display = "none";
}

function removeWidget() {
  alert("Da xoa Widget");
  fetch(`http://localhost:3000/delete-widget/${divId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Lỗi:", error));
}

function checkDivId() {
  document.querySelectorAll(".widget").forEach((div) => {
    div.addEventListener("mouseup", function () {
      // Lấy id của div được click
      divId = this.id;
    });
  });
}
