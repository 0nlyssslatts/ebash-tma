declare global {
    interface Window {
      Telegram: {
        // eslint-disable-next-line
        WebApp: any;
      };
    }
  }
  
  export {};