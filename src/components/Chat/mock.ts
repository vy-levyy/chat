import { IMessage } from 'src/models/message';

export const user1 = { id: '0', name: 'Vyacheslav' };
export const user2 = { id: '1', name: 'Daniil' };
export const user3 = { id: '2', name: 'Evgeniy' };

export const messagesMock: IMessage[] = [
  {
    id: '0',
    user: user1,
    value: 'I write some message',
  },
  {
    id: '1',
    user: user2,
    value:
      'I write some very big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big message',
  },
  {
    id: '2',
    user: user3,
    value: 'Vsem privet',
  },
  {
    id: '3',
    user: user1,
    value: 'I write some message',
  },
  {
    id: '4',
    user: user2,
    value:
      'I write some very big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big big message',
  },
  {
    id: '5',
    user: user3,
    value: 'Vsem privet',
  },
  {
    id: '6',
    user: user3,
    value: 'nice day',
  },
];

export const getUserMessageMock = (text: string): IMessage => ({
  id: Math.random().toString(),
  user: user1,
  value: text,
});
