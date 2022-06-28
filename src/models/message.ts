import { IUser } from 'src/models/user';

export interface IMessage {
  id: string;
  user: Pick<IUser, 'id' | 'name'>;
  value: string;
}
