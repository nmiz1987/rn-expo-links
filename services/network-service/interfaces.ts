export type CustomRequestInit = Omit<RequestInit, 'body'> & {
  body?: any;
};
