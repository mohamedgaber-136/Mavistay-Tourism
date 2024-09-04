"use client"
import { useEffect } from 'react';
import Script from 'next/script';

export default function BitrixForm() {
  useEffect(() => {
    // This is to ensure the form initializes correctly after the script loads
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://cdn.bitrix24.com/b25656443/crm/form/loader_63.js?${Date.now()/180000|0}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div data-b24-form="inline/63/7vz0to" data-skip-moving="true">
        {/* Container for the form */}
      </div>
    </div>
  );
}
