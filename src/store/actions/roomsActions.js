export const addMessageAction = (message) => {
  return { type: "ADD_MESSAGE", message };
};
export const removeMessageAction = (messageId) => {
  return { type: "REMOVE_MESSAGE", messageId };
};
export const removeAllMessagesAction = () => {
  return { type: "CLEAR_MESSAGES" };
};
