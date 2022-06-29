import { IUser } from 'src/models/user';

export interface IMessage {
  id: string;
  user: Pick<IUser, 'name'>;
  value: string;
}

// backend variant
export interface IMessageSource {
  id: string;
  value: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
}

export class Message {
  public static fromSource(message: IMessageSource): IMessage {
    return {
      id: message.id,
      user: { name: message.userName },
      value: message.value,
    };
  }

  public static fromSourceArray(messages: IMessageSource[]): IMessage[] {
    return messages.map((message) => Message.fromSource(message));
  }
}
