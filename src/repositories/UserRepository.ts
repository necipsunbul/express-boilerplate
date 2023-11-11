import BaseRepository from "../libs/core/BaseRepository";
import UserService from "../services/UserService";
import UserCacheService from "../services/UserCacheService";
export default class UserRepository extends BaseRepository<UserService> {
  protected service: UserService;
  protected cacheService: UserCacheService;
  constructor() {
    super();
    this.service = new UserService();
    this.cacheService = new UserCacheService();
  }
}
