export interface IMessage {
  id: number;
  text: string;
  date: Date;
  authorId: number;
}

interface IMessageProps {
  message: IMessage;
}

export const Message = ({}) => {
  return <li>Message</li>;
};

// className={`text ${message.authorId === currentUser.id ? 'currentUser' : ''}`}
