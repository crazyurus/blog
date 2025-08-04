import React from 'react';

declare global {
  namespace JSX {
    type Element = React.JSX.Element;
  }

  namespace CozeWebSDK {
    class WebChatClient {
      constructor(props: {
        config: {
          bot_id: string;
        };
        componentProps: {
          title: string;
          icon: string;
          width?: number;
        };
        el: HTMLElement | null;
      });

      destroy(): void;
    }
  }
}
