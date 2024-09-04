'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance } from 'i18next';
import { useEffect } from 'react';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}) {
  const i18n = createInstance();
  initTranslations(locale, namespaces, i18n, resources);
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [locale]);
  useEffect(() => {
    if (locale === 'ar') {
      // Apply specific CSS rules for elements that should remain LTR in Arabic locale
      const elementsToIgnoreRTL = document.querySelectorAll('.ltr-elements');
      elementsToIgnoreRTL.forEach((element) => {
        element.style.direction = 'ltr';
      });
    }
  }, [locale]);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}