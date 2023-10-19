import * as socketio from "socket.io";
import * as http from "http";
import socketEvents from "../../socket_events";
import BaseSocketManager from "./BaseSocketInterface";

class SocketBuilder {
  public io: socketio.Server;
  public events: BaseSocketManager[] = [];
  constructor(server: http.Server) {
    this.io = new socketio.Server(server, {
      cors: {
        origin: "*",
      },
    });
  }

  public build() {
    this.io
      .use(async (socket, next) => {
        await this.cacheToClient(socket);
        next();
      })
      .on("connection", (socket: socketio.Socket) => {
        this.loadEvents(socket);
        this.events.forEach((item) => item.on());

        socket.on("disconnect", () => {
          this.events.forEach((item) => item.disconnect());
          this.unCacheClient(socket).then(() => null);
        });
      });
  }

  private loadEvents(socket: socketio.Socket) {
    for (const event of socketEvents) {
      const e = new event(socket, this.io);
      this.events.push(e);
    }
  }

  private async cacheToClient(socket: socketio.Socket): Promise<Boolean> {
    // user cache process
    return true;
  }

  private async unCacheClient(socket: socketio.Socket) {
    // user uncache client process
  }
}

export default SocketBuilder;
