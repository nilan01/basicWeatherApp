const express = require("express");
const cookieSession = require("cookie-session");
const keys = require("./config/key");
const passport = require("./passport");
const path = require("path");
const oauthRouter = require("./routes/authRoutes");

const app = express();
const PORT = 8000;

// Specify the cookie secret. Persist this cookie for 7 days.
app.use(
  cookieSession({
    keys: [keys.cookie],
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
);

app.use(express.static(__dirname + "/dist/"));
app.use("/src/assets", express.static(__dirname + "/src/assets/"));

// Use middlewares
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use("/auth", oauthRouter); // Auth routes

app.listen(process.env.PORT || 8000, () => `Server running on port ${PORT}`);
