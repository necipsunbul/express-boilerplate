import { Express } from "express";

export default abstract class BaseLoader{
    abstract app: Express;
    abstract build() : void; 
}