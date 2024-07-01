const express = require("express");
const app = express();
app.use(express.json());

const Category = require("./models/Category");
const Business = require("./models/Business");
const Booking = require("./models/Booking");
const User = require("./models/User");
const { connectToDb, PORT } = require("./db");

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/users", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

app.get("/businesses", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses", error: err });
  }
});

app.post("/businesses", async (req, res) => {
  const business = req.body;

  try {
    const categoryExists = await Category.findOne({ name: business.category });
    if (!categoryExists) {
      return res.status(400).json({
        message: "Failed to add business: specified category does not exist.",
      });
    }

    const newBusiness = new Business(business);
    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (error) {
    res.status(500).json({
      message: "Server error while adding business.",
      error: err.message,
    });
  }
});

app.get("/businesses/category/:category", async (req, res) => {
  try {
    const filteredBusinesses = await Business.find({
      category: req.params.category.toLowerCase(),
    });
    res.json(filteredBusinesses);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching businesses by category", error: err });
  }
});

app.get("/businesses/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (business) {
      res.json(business);
    } else {
      res.status(404).send("Business not found");
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching business", error: err });
  }
});

app.post("/bookings", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating booking", error: err?.message ?? err });
  }
});

app.get("/businesses/:businessId/bookings/date/:date", async (req, res) => {
  try {
    const slots = await Booking.find({
      businessId: req.params.businessId,
      date: new Date(req.params.date),
    });
    res.json(slots);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching bookings for the specified date and business",
      error: err,
    });
  }
});

app.get("/bookings/user/:email", async (req, res) => {
  try {
    const userBookings = await Booking.find({ userEmail: req.params.email });
    res.json(userBookings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching bookings for the user", error: err });
  }
});

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
