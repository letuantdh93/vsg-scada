const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(__dirname)); // Để phục vụ index.html và các tệp tĩnh

// Middleware để parse JSON body
app.use(express.json());

// Đọc tệp JSON
function readJSONFile(callback, res) {
  fs.readFile(
    path.join(__dirname, "./data", "setting.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Lỗi khi đọc tệp:", err);
        res && res.status(500).send("Lỗi khi đọc tệp"); // Thêm res vào nếu cần phản hồi lỗi về client
        return;
      }
      try {
        callback(JSON.parse(data)); // Chuyển data thành JSON
      } catch (error) {
        console.error("Lỗi phân tích cú pháp JSON:", error);
        res && res.status(400).send("Lỗi phân tích cú pháp JSON");
      }
    }
  );
}

// Ghi tệp JSON
function writeJSONFile(data, callback) {
  fs.writeFile(
    path.join(__dirname, "./data", "setting.json"),
    JSON.stringify(data, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Lỗi khi ghi tệp:", err);
        return;
      }
      callback();
    }
  );
}

// API Thêm widget
app.post("/add-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.homeSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-xlm-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.xlmSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-hoa-che-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.hoaCheSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-nau-duong-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.nauDuongSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-ly-tam-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.lyTamSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-say-duong-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.sayDuongSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-dong-bao-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.dongBaoSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-lo-hoi-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.loHoiSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-nhiet-dien-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.nhietDienSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-xl-nt-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.xlNtSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-kho-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.khoSetting.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

app.post("/add-setting-widget", (req, res) => {
  const newWidget = req.body;

  readJSONFile((data) => {
    data.settings.push(newWidget); // Thêm widget mới vào mảng
    writeJSONFile(
      data,
      () => {
        res.status(200).json({ message: "Widget đã được thêm thành công!" });
      },
      res
    );
  }, res); // Truyền res vào hàm readJSONFile để xử lý lỗi
});

// API Sửa widget
app.put("/update-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.homeSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.homeSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-xlm-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.xlmSetting.findIndex((widget) => widget.id === widgetId);
    if (index !== -1) {
      data.xlmSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-hoa-che-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.hoaCheSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.hoaCheSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-nau-duong-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.nauDuongSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.nauDuongSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-ly-tam-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.lyTamSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.lyTamSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-say-duong-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.sayDuongSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.sayDuongSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-dong-bao-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.dongBaoSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.dongBaoSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-lo-hoi-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.loHoiSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.loHoiSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-nhiet-dien-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.nhietDienSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.nhietDienSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-xl-nt-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.xlNtSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.xlNtSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-kho-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.khoSetting.findIndex((widget) => widget.id === widgetId);
    if (index !== -1) {
      data.khoSetting[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

app.put("/update-setting-widget/:id", (req, res) => {
  const updatedWidget = req.body;
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.settings.findIndex((widget) => widget.id === widgetId);
    if (index !== -1) {
      data.settings[index] = updatedWidget; // Cập nhật widget
      writeJSONFile(data, () => {
        res
          .status(200)
          .json({ message: "Widget đã được cập nhật thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để cập nhật." });
    }
  });
});

// API Xoá widget
app.delete("/delete-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.homeSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.homeSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-xlm-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.xlmSetting.findIndex((widget) => widget.id === widgetId);
    if (index !== -1) {
      data.xlmSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-hoa-che-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.hoaCheSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.hoaCheSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-nau-duong-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.nauDuongSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.nauDuongSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-ly-tam-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.lyTamSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.lyTamSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-say-duong-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.sayDuongSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.sayDuongSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-dong-bao-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.dongBaoSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.dongBaoSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-lo-hoi-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.loHoiSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.loHoiSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-nhiet-dien-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.nhietDienSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.nhietDienSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-xl-nt-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.xlNtSetting.findIndex(
      (widget) => widget.id === widgetId
    );
    if (index !== -1) {
      data.xlNtSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-kho-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.khoSetting.findIndex((widget) => widget.id === widgetId);
    if (index !== -1) {
      data.khoSetting.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.delete("/delete-setting-widget/:id", (req, res) => {
  const widgetId = req.params.id;

  readJSONFile((data) => {
    const index = data.settings.findIndex((widget) => widget.id === widgetId);
    if (index !== -1) {
      data.settings.splice(index, 1); // Xoá widget khỏi mảng
      writeJSONFile(data, () => {
        res.status(200).json({ message: "Widget đã được xoá thành công!" });
      });
    } else {
      res.status(404).json({ message: "Không tìm thấy widget để xoá." });
    }
  });
});

app.get("/data", (req, res) => {
  // Đọc file JSON
  fs.readFile(
    path.join(__dirname, "./data", "setting.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Không thể đọc file JSON" });
      }

      // Gửi dữ liệu JSON trả về cho client
      res.json(JSON.parse(data));
    }
  );
});

process.on("uncaughtException", (err) => {
  console.error("Có lỗi không bắt được:", err);
  // Nếu có thể, bạn có thể khởi động lại server hoặc xử lý lỗi một cách an toàn.
});
// Chạy server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
