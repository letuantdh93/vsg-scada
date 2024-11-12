// Check on form input
// Lắng nghe sự kiện thay đổi trên select
document.getElementById("typeList").addEventListener("change", function () {
  const selectElement = document.getElementById("typeList"); // Lấy phần tử select
  const selectedValue = selectElement.value; // Lấy giá trị được chọn
  const accForm = document.getElementById("account");
  const passForm = document.getElementById("PassWord");
  if (selectedValue == "tcp" || selectedValue == "typing") {
    accForm.disabled = true;
    passForm.disabled = true;
  } else {
    accForm.disabled = false;
    passForm.disabled = false;
  }
});

//Open Form input when click change input
function changeInput() {
  const form = document.getElementById("divInput");
  document.getElementById("choseStyle").style.display = "none";
  form.style.display = "flex";
  form.style.justifyContent = "center";
}
function changeStyle() {
  document.getElementById("choseStyle").style.display = "flex";
}

function styleGauge() {
  // Tạo phần tử <img> mới
  const div = document.getElementById(divId);
  const img = div.querySelector("img");
  let updatedWidget = {
    tittle: "",
    top: "",
    left: "",
    style: "gauge",
    inputType: "tcp",
    width: "",
    height: "",
    id: "",
  };
  let topic;
  let fileName = window.location.pathname.split("/").pop();

  const computedStyle = window.getComputedStyle(document.getElementById(idDiv));
  let tittle = div.querySelector(".tittle").textContent;
  updatedWidget.tittle = tittle;

  let top = computedStyle.top; // Lấy giá trị top tính toán
  let left = computedStyle.left; // Lấy giá trị left tính toán
  let width = computedStyle.width; // Lấy giá trị width tính toán
  let height = computedStyle.height; // Lấy giá trị height tính toán

  updatedWidget.top = top;
  updatedWidget.left = left;
  updatedWidget.width = width;
  updatedWidget.height = height;
  updatedWidget.id = idDiv;

  switch (fileName) {
    case "home.html":
      topic = "";
      break;
    case "dongBao.html":
      topic = "-dong-bao";
      break;
    case "hoaChe.html":
      topic = "-hoa-che";
      break;
    case "kho.html":
      topic = "-kho";
      break;
    case "loHoi.html":
      topic = "-lo-hoi";
      break;
    case "lyTam.html":
      topic = "-ly-tam";
      break;
    case "nauDuong.html":
      topic = "-nau-duong";
      break;
    case "nhietDien.html":
      topic = "-nhiet-dien";
      break;
    case "sayDuong.html":
      topic = "-say-duong";
      break;
    case "setting.html":
      topic = "-settings";
      break;
    case "xlm.html":
      topic = "-xlm";
      break;
    case "xlNt.html":
      topic = "-xl-nt";
      break;

    default:
      topic = "none";
      break;
  }
  try {
    if (updatedWidget.style) {
      fetch(`http://103.7.40.78:3000/update${topic}-widget/${idDiv}`, {
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
  if (img) {
    img.src = "./img/gauge.gif"; // Đường dẫn ảnh của bạn
  } else {
    const newImg = document.createElement("img");
    newImg.src = "./img/gauge.gif"; // Đường dẫn ảnh của bạn
    newImg.alt = "gauge"; // Chú thích ảnh
    newImg.style.width = "100%";
    newImg.style.height = "90%";
    newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div

    // Chọn phần tử <div> có id
    const container = document.getElementById(idDiv);

    // Thêm <img> vào trong <div> đã chọn
    container.appendChild(newImg);
  }
}

function styleLineChart() {
  // Tạo phần tử <img> mới
  const div = document.getElementById(divId);
  const img = div.querySelector("img");

  let updatedWidget = {
    tittle: "",
    top: "",
    left: "",
    style: "line",
    inputType: "tcp",
    width: "",
    height: "",
    id: "",
  };
  let topic;
  let fileName = window.location.pathname.split("/").pop();

  const computedStyle = window.getComputedStyle(document.getElementById(idDiv));
  let tittle = div.querySelector(".tittle").textContent;
  updatedWidget.tittle = tittle;

  let top = computedStyle.top; // Lấy giá trị top tính toán
  let left = computedStyle.left; // Lấy giá trị left tính toán
  let width = computedStyle.width; // Lấy giá trị width tính toán
  let height = computedStyle.height; // Lấy giá trị height tính toán

  updatedWidget.top = top;
  updatedWidget.left = left;
  updatedWidget.width = width;
  updatedWidget.height = height;
  updatedWidget.id = idDiv;
  switch (fileName) {
    case "home.html":
      topic = "";
      break;
    case "dongBao.html":
      topic = "-dong-bao";
      break;
    case "hoaChe.html":
      topic = "-hoa-che";
      break;
    case "kho.html":
      topic = "-kho";
      break;
    case "loHoi.html":
      topic = "-lo-hoi";
      break;
    case "lyTam.html":
      topic = "-ly-tam";
      break;
    case "nauDuong.html":
      topic = "-nau-duong";
      break;
    case "nhietDien.html":
      topic = "-nhiet-dien";
      break;
    case "sayDuong.html":
      topic = "-say-duong";
      break;
    case "setting.html":
      topic = "-settings";
      break;
    case "xlm.html":
      topic = "-xlm";
      break;
    case "xlNt.html":
      topic = "-xl-nt";
      break;

    default:
      topic = "none";
      break;
  }
  try {
    if (updatedWidget.style) {
      fetch(`http://103.7.40.78:3000/update${topic}-widget/${idDiv}`, {
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

  if (img) {
    img.src = "./img/lineChart.gif"; // Đường dẫn ảnh của bạn
  } else {
    const newImg = document.createElement("img");
    newImg.src = "./img/lineChart.gif"; // Đường dẫn ảnh của bạn
    newImg.alt = "line chart"; // Chú thích ảnh
    newImg.style.width = "100%";
    newImg.style.height = "90%";
    newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div

    // Chọn phần tử <div> có id
    const container = document.getElementById(idDiv);

    // Thêm <img> vào trong <div> đã chọn
    container.appendChild(newImg);
  }
}

function styleBarChart() {
  // Tạo phần tử <img> mới
  const div = document.getElementById(divId);
  const img = div.querySelector("img");

  let updatedWidget = {
    tittle: "",
    top: "",
    left: "",
    style: "bar",
    inputType: "tcp",
    width: "",
    height: "",
    id: "",
  };
  let topic;
  let fileName = window.location.pathname.split("/").pop();

  const computedStyle = window.getComputedStyle(document.getElementById(idDiv));
  let tittle = div.querySelector(".tittle").textContent;
  updatedWidget.tittle = tittle;

  let top = computedStyle.top; // Lấy giá trị top tính toán
  let left = computedStyle.left; // Lấy giá trị left tính toán
  let width = computedStyle.width; // Lấy giá trị width tính toán
  let height = computedStyle.height; // Lấy giá trị height tính toán

  updatedWidget.top = top;
  updatedWidget.left = left;
  updatedWidget.width = width;
  updatedWidget.height = height;
  updatedWidget.id = idDiv;
  switch (fileName) {
    case "home.html":
      topic = "";
      break;
    case "dongBao.html":
      topic = "-dong-bao";
      break;
    case "hoaChe.html":
      topic = "-hoa-che";
      break;
    case "kho.html":
      topic = "-kho";
      break;
    case "loHoi.html":
      topic = "-lo-hoi";
      break;
    case "lyTam.html":
      topic = "-ly-tam";
      break;
    case "nauDuong.html":
      topic = "-nau-duong";
      break;
    case "nhietDien.html":
      topic = "-nhiet-dien";
      break;
    case "sayDuong.html":
      topic = "-say-duong";
      break;
    case "setting.html":
      topic = "-settings";
      break;
    case "xlm.html":
      topic = "-xlm";
      break;
    case "xlNt.html":
      topic = "-xl-nt";
      break;

    default:
      topic = "none";
      break;
  }
  try {
    if (updatedWidget.style) {
      fetch(`http://103.7.40.78:3000/update${topic}-widget/${idDiv}`, {
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

  if (img) {
    img.src = "./img/barChart.gif"; // Đường dẫn ảnh của bạn
  } else {
    const newImg = document.createElement("img");
    newImg.src = "./img/barChart.gif"; // Đường dẫn ảnh của bạn
    newImg.alt = "line chart"; // Chú thích ảnh
    newImg.style.width = "100%";
    newImg.style.height = "90%";
    newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div

    // Chọn phần tử <div> có id
    const container = document.getElementById(idDiv);

    // Thêm <img> vào trong <div> đã chọn
    container.appendChild(newImg);
  }
}

function styleWater() {
  // Tạo phần tử <img> mới
  const div = document.getElementById(divId);
  const img = div.querySelector("img");

  let updatedWidget = {
    tittle: "",
    top: "",
    left: "",
    style: "water",
    inputType: "tcp",
    width: "",
    height: "",
    id: "",
  };
  let topic;
  let fileName = window.location.pathname.split("/").pop();

  const computedStyle = window.getComputedStyle(document.getElementById(idDiv));
  let tittle = div.querySelector(".tittle").textContent;
  updatedWidget.tittle = tittle;

  let top = computedStyle.top; // Lấy giá trị top tính toán
  let left = computedStyle.left; // Lấy giá trị left tính toán
  let width = computedStyle.width; // Lấy giá trị width tính toán
  let height = computedStyle.height; // Lấy giá trị height tính toán

  updatedWidget.top = top;
  updatedWidget.left = left;
  updatedWidget.width = width;
  updatedWidget.height = height;
  updatedWidget.id = idDiv;
  switch (fileName) {
    case "home.html":
      topic = "";
      break;
    case "dongBao.html":
      topic = "-dong-bao";
      break;
    case "hoaChe.html":
      topic = "-hoa-che";
      break;
    case "kho.html":
      topic = "-kho";
      break;
    case "loHoi.html":
      topic = "-lo-hoi";
      break;
    case "lyTam.html":
      topic = "-ly-tam";
      break;
    case "nauDuong.html":
      topic = "-nau-duong";
      break;
    case "nhietDien.html":
      topic = "-nhiet-dien";
      break;
    case "sayDuong.html":
      topic = "-say-duong";
      break;
    case "setting.html":
      topic = "-settings";
      break;
    case "xlm.html":
      topic = "-xlm";
      break;
    case "xlNt.html":
      topic = "-xl-nt";
      break;

    default:
      topic = "none";
      break;
  }
  try {
    if (updatedWidget.style) {
      fetch(`http://103.7.40.78:3000/update${topic}-widget/${idDiv}`, {
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

  if (img) {
    img.src = "./img/water.gif"; // Đường dẫn ảnh của bạn
  } else {
    const newImg = document.createElement("img");
    newImg.src = "./img/water.gif"; // Đường dẫn ảnh của bạn
    newImg.alt = "line chart"; // Chú thích ảnh
    newImg.style.width = "100%";
    newImg.style.height = "90%";
    newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div

    // Chọn phần tử <div> có id
    const container = document.getElementById(idDiv);

    // Thêm <img> vào trong <div> đã chọn
    container.appendChild(newImg);
  }
}

function styleSankey() {
  // Tạo phần tử <img> mới
  const div = document.getElementById(divId);
  const img = div.querySelector("img");

  let updatedWidget = {
    tittle: "",
    top: "",
    left: "",
    style: "sankey",
    inputType: "tcp",
    width: "",
    height: "",
    id: "",
  };
  let topic;
  let fileName = window.location.pathname.split("/").pop();

  const computedStyle = window.getComputedStyle(document.getElementById(idDiv));
  let tittle = div.querySelector(".tittle").textContent;
  updatedWidget.tittle = tittle;

  let top = computedStyle.top; // Lấy giá trị top tính toán
  let left = computedStyle.left; // Lấy giá trị left tính toán
  let width = computedStyle.width; // Lấy giá trị width tính toán
  let height = computedStyle.height; // Lấy giá trị height tính toán

  updatedWidget.top = top;
  updatedWidget.left = left;
  updatedWidget.width = width;
  updatedWidget.height = height;
  updatedWidget.id = idDiv;
  switch (fileName) {
    case "home.html":
      topic = "";
      break;
    case "dongBao.html":
      topic = "-dong-bao";
      break;
    case "hoaChe.html":
      topic = "-hoa-che";
      break;
    case "kho.html":
      topic = "-kho";
      break;
    case "loHoi.html":
      topic = "-lo-hoi";
      break;
    case "lyTam.html":
      topic = "-ly-tam";
      break;
    case "nauDuong.html":
      topic = "-nau-duong";
      break;
    case "nhietDien.html":
      topic = "-nhiet-dien";
      break;
    case "sayDuong.html":
      topic = "-say-duong";
      break;
    case "setting.html":
      topic = "-settings";
      break;
    case "xlm.html":
      topic = "-xlm";
      break;
    case "xlNt.html":
      topic = "-xl-nt";
      break;

    default:
      topic = "none";
      break;
  }
  try {
    if (updatedWidget.style) {
      fetch(`http://103.7.40.78:3000/update${topic}-widget/${idDiv}`, {
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

  if (img) {
    img.src = "./img/sankey.gif"; // Đường dẫn ảnh của bạn
  } else {
    const newImg = document.createElement("img");
    newImg.src = "./img/sankey.gif"; // Đường dẫn ảnh của bạn
    newImg.alt = "line chart"; // Chú thích ảnh
    newImg.style.width = "100%";
    newImg.style.height = "90%";
    newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div

    // Chọn phần tử <div> có id
    const container = document.getElementById(idDiv);

    // Thêm <img> vào trong <div> đã chọn
    container.appendChild(newImg);
  }
}

function styleStatus() {
  // Tạo phần tử <img> mới
  const div = document.getElementById(divId);
  const img = div.querySelector("img");

  let updatedWidget = {
    tittle: "",
    top: "",
    left: "",
    style: "status",
    inputType: "tcp",
    width: "",
    height: "",
    id: "",
  };
  let topic;
  let fileName = window.location.pathname.split("/").pop();

  const computedStyle = window.getComputedStyle(document.getElementById(idDiv));
  let tittle = div.querySelector(".tittle").textContent;
  updatedWidget.tittle = tittle;

  let top = computedStyle.top; // Lấy giá trị top tính toán
  let left = computedStyle.left; // Lấy giá trị left tính toán
  let width = computedStyle.width; // Lấy giá trị width tính toán
  let height = computedStyle.height; // Lấy giá trị height tính toán

  updatedWidget.top = top;
  updatedWidget.left = left;
  updatedWidget.width = width;
  updatedWidget.height = height;
  updatedWidget.id = idDiv;
  switch (fileName) {
    case "home.html":
      topic = "";
      break;
    case "dongBao.html":
      topic = "-dong-bao";
      break;
    case "hoaChe.html":
      topic = "-hoa-che";
      break;
    case "kho.html":
      topic = "-kho";
      break;
    case "loHoi.html":
      topic = "-lo-hoi";
      break;
    case "lyTam.html":
      topic = "-ly-tam";
      break;
    case "nauDuong.html":
      topic = "-nau-duong";
      break;
    case "nhietDien.html":
      topic = "-nhiet-dien";
      break;
    case "sayDuong.html":
      topic = "-say-duong";
      break;
    case "setting.html":
      topic = "-settings";
      break;
    case "xlm.html":
      topic = "-xlm";
      break;
    case "xlNt.html":
      topic = "-xl-nt";
      break;

    default:
      topic = "none";
      break;
  }
  try {
    if (updatedWidget.style) {
      fetch(`http://103.7.40.78:3000/update${topic}-widget/${idDiv}`, {
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

  if (img) {
    img.src = "./img/lamp.gif"; // Đường dẫn ảnh của bạn
  } else {
    const newImg = document.createElement("img");
    newImg.src = "./img/lamp.gif"; // Đường dẫn ảnh của bạn
    newImg.alt = "line chart"; // Chú thích ảnh
    newImg.style.width = "100%";
    newImg.style.height = "90%";
    newImg.style.objectFit = "cover"; // Đảm bảo ảnh không bị méo và lấp đầy toàn bộ div

    // Chọn phần tử <div> có id
    const container = document.getElementById(idDiv);

    // Thêm <img> vào trong <div> đã chọn
    container.appendChild(newImg);
  }
}

let idDiv;

function letDivId() {
  document.querySelectorAll(".widget").forEach((div) => {
    div.addEventListener("mouseup", function () {
      // Lấy id của div được click
      idDiv = this.id;
    });
  });
}

function saveInput() {
  document.getElementById("divInput").style.display = "none";
}
function closeInput() {
  document.getElementById("divInput").style.display = "none";
}
