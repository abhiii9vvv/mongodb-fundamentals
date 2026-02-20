use("CrudDB");

// Create (collection)
// db.createCollection("courses");

// Create (documents)
// db.courses.insertOne({
//   name: "Abhinav Tiwary",
//   systemID: 2023281975,
// });
// db.courses.insertMany([
//   { name: "Abhinav Tiwary", systemID: 2023281975 },
//   { name: "Abhinav Tiwary", systemID: 20232819777 },
//   { name: "Abhinav Tiwary", systemID: 2023281971 },
//   { name: "Abhinav Tiwary", systemID: 2023281976 },
// ]);

// Read (single)
// db.courses.findOne({ systemID: 2023281976 });

// Read (multiple)
// db.courses.find({ name: "Abhinav Tiwary" });

// Update (single)
// db.courses.updateOne(
//   { systemID: 2023281975 },
//   { $set: { systemID: 123 } }
// );

// Update (multiple)
// db.courses.updateMany(
//   { name: "av9" },
//   { $set: { name: "Abhinav" } }
// );

// Delete (single)
// db.courses.deleteOne({ systemID: 2023281971 });

// Delete (multiple)
// db.courses.deleteMany({ name: "Abhinav Tiwary" });