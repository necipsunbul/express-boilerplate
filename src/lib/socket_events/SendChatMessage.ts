import { Socket, Server } from "socket.io";
import BaseSocketInterface from "../_core/socket/BaseSocketInterface";

export enum ChatMessageType {
  EVENT_NAME = "message",
}

class SendChatMessage extends BaseSocketInterface {
  io: Server;
  socket: Socket;
  eventName: ChatMessageType = ChatMessageType.EVENT_NAME;
  constructor(socket: Socket, io: Server) {
    super();
    this.socket = socket;
    this.io = io;
  }

  public on(): void {
    this.socket.on(this.eventName, (message) => {
      console.log(this.eventName, message);
    });
  }

  public disconnect(): void {
    // user chat event disconnet processs
    console.log("message event disconnect", this.socket.id);
  }
}

export default SendChatMessage;
