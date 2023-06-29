import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    (function(d, m) {
      var kommunicateSettings = {
        appId: '1f608efa8cfd573de96f57bfa5cc88b49',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return <div id="kommunicate-chat-widget-iframe-container"></div>;
};

const App = () => {
  return (
    <div>
      <Chatbot />
    </div>
  );
};

export default App;



  
