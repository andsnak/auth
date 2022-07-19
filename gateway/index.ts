import express, { Express } from "express";
import { readFile } from "fs/promises";
import https from "https";
import dotenv from "dotenv";
import main from "./main";

const keyPath = "ssl/selfsigned.key";
const certPath = "ssl/selfsigned.crt";

async function run(port: number) {
  dotenv.config();

  const app: Express = express();
  const httpsServer = https.createServer(
    {
      key: await readFile(keyPath, "utf8"),
      cert: await readFile(certPath, "utf8"),
    },
    app
  );

  main(app);
  httpsServer.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
}

void run(Number(process.env.PORT) || 3000);
