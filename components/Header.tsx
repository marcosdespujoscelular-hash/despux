import React, { useState } from 'react';
import { Language, TranslationKeys } from '../types';

interface HeaderProps {
    t: TranslationKeys;
    currentLang: Language;
    setLanguage: (lang: Language) => void;
    currentView: 'home' | 'works';
    setView: (view: 'home' | 'works') => void;
}

const Header: React.FC<HeaderProps> = ({ t, currentLang, setLanguage, currentView, setView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle for mobile or simple dropdown interactions
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
        { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' }
    ];

    return (
        <header className="relative w-full px-10 py-5 flex flex-col md:flex-row justify-between items-center border-b border-white/10 bg-bgBody/70 backdrop-blur-md z-50 shrink-0">
            {/* Left: Branding */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); setView('home'); }}
                    className="text-2xl font-extrabold tracking-[2px] uppercase text-white hover:opacity-90 transition-opacity"
                >
                    DESPUX <span className="text-primary">ENGINEERING</span>
                </a>
                {/* REQUESTED CHANGE: Added Name below logo */}
                <span className="text-sm font-medium text-textMuted tracking-widest mt-1 block">
                    Ing. Marcos Despujos
                </span>
            </div>

            {/* Right: Navigation & Language */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-5">
                
                {/* Navigation */}
                <nav className="flex items-center gap-4">
                    {/* Tools Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 font-semibold text-white uppercase tracking-wider hover:text-primary transition-colors py-2">
                            {t.nav_tools}
                            <span className="text-xs">▼</span>
                        </button>
                        {/* Dropdown Content */}
                        <div className="absolute top-full right-0 mt-2 w-56 bg-[#141414]/95 backdrop-blur-md border border-border rounded shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-[-5px] group-hover:translate-y-0 z-50">
                            <a href="#" className="block px-5 py-3 text-textMuted hover:bg-white/5 hover:text-white hover:border-l-2 hover:border-primary transition-all text-sm">
                                {t.nav_calc}
                            </a>
                            <a href="#" className="block px-5 py-3 text-textMuted hover:bg-white/5 hover:text-white hover:border-l-2 hover:border-primary transition-all text-sm">
                                {t.nav_gears}
                            </a>
                            <a href="#" className="block px-5 py-3 text-textMuted hover:bg-white/5 hover:text-white hover:border-l-2 hover:border-primary transition-all text-sm">
                                {t.nav_cad}
                            </a>
                        </div>
                    </div>

                    {/* Works Button */}
                    <button
                        onClick={() => setView('works')}
                        className={`font-semibold uppercase tracking-wider transition-colors py-2 border-b-2 ${
                            currentView === 'works' 
                            ? 'text-primary border-primary' 
                            : 'text-white border-transparent hover:text-primary'
                        }`}
                    >
                        {t.nav_works}
                    </button>
                </nav>

                {/* Language Selector */}
                <div className="flex gap-2 pl-0 md:pl-5 md:border-l border-white/10 pt-2 md:pt-0 border-t md:border-t-0 w-full md:w-auto justify-center">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            title={lang.label}
                            className={`w-7 h-7 rounded-full overflow-hidden border-2 transition-all duration-300 transform hover:scale-110 ${
                                currentLang === lang.code
                                    ? 'border-primary opacity-100 shadow-primary-glow'
                                    : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                        >
                            <img src={lang.flag} alt={lang.label} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;