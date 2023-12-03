import {JWTManager} from "./JWTManager";

export class JWTService{
    private static instance: JWTService;
    private constructor() { }
    public static get getInstance(): JWTService {
        if (!JWTService.instance) JWTService.instance = new JWTService();
        return JWTService.instance;
    }
    manager : JWTManager = JWTManager.getInstance;

    // logic ...
}