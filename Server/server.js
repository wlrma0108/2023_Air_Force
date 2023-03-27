const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const logger = (req, res, next) => {
    console.log(`Request ${req.path}`);
    next();
  };
   
  const auth = (req, res, next) => {
    if (!isAdmin(req)) {
      next(new Error("Not Authorized"));
      return;
    }
    next();
  };
  
app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});



