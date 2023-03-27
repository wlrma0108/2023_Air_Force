router.use(auth); // 3
 
router.get("/", (req, res, next) => {
  res.send("Hello Router");
}); // 4
 
//-----------------------------------------
app.use((req, res, next) => {
  console.log(`Request ${req.path}`);
  next(); // 1
});
 
app.use("/admin", router); // 2