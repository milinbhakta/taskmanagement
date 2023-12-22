import { createContext, useContext } from 'react';
import { useState } from 'react';
import { Message } from 'semantic-ui-react';

interface MessageContextProps {
  showMessage: (content: string, messageType: MessageType) => void;
}

export const MessageContext = createContext<MessageContextProps>({
  showMessage: () => {},
});

export function useMessage() {
  return useContext(MessageContext);
}

interface MessageProviderProps {
  children: React.ReactNode;
}

type MessageType = 'success' | 'error' | 'info';

export function MessageProvider({ children }: MessageProviderProps) {
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<MessageType>('info');

  const showMessage = (messageContent: string, messageType: MessageType) => {
    setContent(messageContent);
    setType(messageType);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      {visible && (
        <Message
          compact
          floating
          content={content}
          positive={type === 'success'}
          negative={type === 'error'}
          info={type === 'info'}
          className="bottom-center-message"
        />
      )}
    </MessageContext.Provider>
  );
}
