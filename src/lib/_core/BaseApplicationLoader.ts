import { Express } from "express";

export default abstract class BaseApplicatonLoader {
  abstract app: Express;
  abstract build(): void;
}
