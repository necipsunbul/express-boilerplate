import RedisManager from "../cache/RedisManager";
import BaseService from "../services/BaseService";
export default abstract class BaseRepository<T extends BaseService> {
  protected abstract service: T;
  protected abstract cacheService: RedisManager;
}
