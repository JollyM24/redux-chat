export const getMessagesApi = async () => {
  return await fetch('http://localhost:8001/messages');
};
