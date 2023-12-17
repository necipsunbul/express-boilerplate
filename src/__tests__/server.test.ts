import { agent as request } from "supertest";
import { appConfigs } from "../lib/_core/config/config";
import { closeDatabases } from "../lib/_core/config/config";
import app from "../index";
describe("Default endpoint => '/' tests", () => {
  beforeAll(async () => {
    await appConfigs();
  });

  test("Catch home route", async () => {
    const res = await request(app).get("/");
    const responseData = {
      message: "ok",
      success: true,
      body: {
        status: "Api is running",
        version: "1.0",
      },
    };
    expect(res.body).toStrictEqual(responseData);
  });

  afterAll(() => {
    closeDatabases().then(() => {
      app.close();
    });
  });
});
