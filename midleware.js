module.exports = reqFilter = (req, resp, next) => {
  console.log("requestFilter funtion");
  if (!req.query.age) {
    resp.send("Please provide the age");
  } else if (req.query.age < 10) {
    resp.send("You can not access this page");
  } else {
    next();
  }
};
