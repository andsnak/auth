import path from "path";
import express, { Express } from "express";
import rootRouter from "./routes";

const distPath = path.join(__dirname, "../../dist");
const indexPath = path.join(distPath, "/index.html");

export default function (app: Express) {
  app.use(express.static(distPath));
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", express.json(), rootRouter);
  app.use("/*", (req, res) => res.sendFile(indexPath));
}
