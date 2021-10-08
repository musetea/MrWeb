import express from "express";
import path from "path";

import RealEstate from "./routes/realestate";

const app = express();
const PORT: number = Number(process.env["PORT"]) || 3001;
app.set('view engine', 'pug');
app.locals.pretty = true;
app.set('views', path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get("/", (req, res) => { res.render("index"); });
app.get("/RealEstate", (req, res) => { res.render("RealEstate"); });
app.get("/CreateCard", (req, res) => {
   res.render("CreateCard", {
      months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      years: ["2021", "2022", "2023", "2024", "2025"],
   });
});
app.get("/MarketO", (req, res) => { res.render("MarketO"); });
app.get("/Controls", (req, res) => { res.render("Controls"); });
app.get("/Restaurant", (req, res) => { res.render("Restaurant"); });
app.get("/PortPolio", (req, res) => { res.render("PortPolio"); });
app.get("/Glassmorphism", (req, res) => { res.render("Glassmorphism"); });
app.get("/Grocery", (req, res) => { res.render("Grocery/Index"); });

const menus = [{ id: "home", cls: "fas fa-home" }, { id: "featured", cls: "fas fa-list" },
{ id: "arrivals", cls: "fas fa-tags" }, { id: "reviews", cls: "fas fa-comments" },
{ id: "blogs", cls: "fas fa-blogs" }];
app.get("/BookStore", (req, res) => { res.render("BookStore/Index", { menus: menus }); });
const themeColors = ["#2980b9", "#27ae60", "#ffa512", "#8e44ad", "#0fb9b1", "#ffd32a", "#ff0033", "#e84393"];
app.get("/ColorSwitcher", (req, res) => { res.render("ColorSwitcher/Index", { themeColors: themeColors }); });


app.listen(PORT, function () {
   console.log("");
   console.log("-------------------------------------------------------------");
   console.log("");
   console.log(`MR.WEB DESINGER 서버 구동중 ... | port : ${PORT}`);
   console.log("");
   console.log("-------------------------------------------------------------");
});
