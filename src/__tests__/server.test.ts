import { agent as request } from "supertest";
import app from "../index";

describe("Default endpoint => '/' tests", () => {
  it("Catch home route", async () => {
    const res = await request(app).get("/");
    const responseData = {
      message: "ok",
      success: true,
      body: {
        status: "Api is running",
        version: "1.0",
      },
    };

    expect(res.body).toEqual(responseData);
  });
});
