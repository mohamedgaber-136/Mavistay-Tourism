'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import Flags from 'country-flag-icons/react/3x2';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';


export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = e => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return ( 
   <FormControl  >
      <Select
        value={currentLocale}
        onChange={handleChange}
        className="nationalIcon"
      >
        <MenuItem value="en" className='d-flex justify-content-center ' >
        <Flags.US style={{ width: `30px`, height: `30px` }} />    
        </MenuItem>
        <MenuItem value="ar" className='d-flex justify-content-center'>
        <Flags.AE style={{ width: `30px`, height: `30px` }} />       
                    </MenuItem>
      </Select>
    </FormControl>
  );
}