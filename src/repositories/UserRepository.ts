import BaseRepository from "../libs/core/BaseRepository";
import RedisManager from "../libs/managers/RedisManager";
import UserService from "../services/UserService";
export default class UserRepository extends BaseRepository<UserService> {
  protected service: UserService;
  protected redis: RedisManager;
  constructor() {
    super();
    this.service = new UserService();
    this.redis = new RedisManager();
  }
}
