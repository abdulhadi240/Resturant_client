'use client'
import React, { useEffect } from 'react';

const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '6714f888b2c68d651861e246' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    }
    document.body.appendChild(script);
  }, []);

  return null;
}

export default VoiceflowChat;
