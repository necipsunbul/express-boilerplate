import { agent as request } from "supertest";
import app from "../index";
import configs from "../lib/_core/config/config";
import mongoose from "mongoose";

describe("Default endpoint => '/' tests", () => {
  beforeAll(async () => {
    console.log("before all");
    await configs();
  });
  test("Catch home route", async () => {});
  afterAll(() => {
    console.log("after alll");
    mongoose.connection.close();
    // app.close();
  });
});
