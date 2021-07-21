const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./workshopdev.db");

db.serialize(function () {
  // Create table
  db.run(`CREATE TABLE IF NOT EXISTS ideas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title TEXT,
    category TEXT,
    desciption TEXT,
    url TEXT
)`);
  // Insert data into table
  const query = `
    INSERT INTO ideas(
        image, title, category, desciption, url
    ) VALUES (?, ?, ?, ?, ?);
    `;

  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Coding Courses",
    "Learning",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque nam, tempore perspiciatis.",
    "https://github.com/fernandademery",
  ];

  // db.run(query, values, function (err) {
  //     if (err) return console.log(err)
  //     console.log(this)
  // });

  // Get data from table

  // Delete data from table
});
