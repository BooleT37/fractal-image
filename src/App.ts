import * as express from "express";

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.setUp();
  }

  run(): void {
    const server = this.app.listen(8090, () => {
      const {address, port} = server.address();
      console.log(`App is running at http://${address}:${port}`);
   });
  }

  private setUp(): void {
    const renderIndexPage = (req: express.Request, res: express.Response) => {
      const model = {};
      res.render("index.ejs", { model });
    };

    this.app.use(express.static("public"));
    this.app.set("views", process.cwd() + "/src/templates");
    this.app.get("/", renderIndexPage);
  }
}
