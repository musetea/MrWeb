import express from "express";
import path from "path";
// import * as morgan from "morgan"
const app = express();
const PORT = Number(process.env["PORT"]) || 3001;
app.set('view engine', 'pug');
app.locals.pretty = true;
app.set('views', path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(morgan("dev"));
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(PORT, function () {
    console.log("");
    console.log("-------------------------------------------------------------");
    console.log("");
    console.log(`서버 구동중 ... | port : ${PORT}`);
    console.log("");
    console.log("-------------------------------------------------------------");
});
