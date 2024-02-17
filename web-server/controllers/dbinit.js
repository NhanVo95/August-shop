const db = require("./database"),
  fs = require("fs"),
  csv = require("csv-parser"),
  path = require("path");

// module.exports.dbinittest = async function () {
//   await db.register(
//     "NhanVo Tester",
//     "admin@hcmute.edu.vn",
//     "",
//     "admin",
//     "false",
//     "0123456789",
//     "Press and Media Office",
//     "Employee",
//     "NhanVo"
//   );

//   await db.register(
//     "Tester",
//     "test@hcmute.edu.vn",
//     "",
//     "user",
//     "false",
//     "0123456789",
//     "Press and Media Office",
//     "Employee",
//     "NhanVo"
//   );
// };

module.exports.dbinit = function () {
  var results = [];

  fs.createReadStream(path.join(__dirname, "../mongodb_config/AccountList.csv"))
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      results.forEach(async (data) => {
        var pass = "";
        if (data.permission == "admin") {
          pass = "pmo@123";
        }
        await db.register(
          data.name,
          data.email,
          pass,
          data.permission,
          data.fee,
          "0" + data.phone,
          data.unitName,
          data.role,
          "NhanVo"
        );
      });
    });
};
