'use client'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import HeroSlider from '../slider/HeroSlider';

export default function Hero1() {
    const { t, i18n } = useTranslation();
    return (
        <div id='home'>
         
            <HeroSlider/>
        </div>
    );
}
