export default class SessionCacheModel {
  user: any;
  sockets: string[] = [];
  banList: string[] = [];
  unViewNotifications: string[] = [];
  conversationList: string[] = [];
  sessions: any; // <---- açtığı oturumun dataları / cihaz ip token vs,
  refreshToken?: string;
}
