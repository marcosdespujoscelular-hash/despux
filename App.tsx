import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import WorksView from './components/WorksView';
import BackgroundCanvas from './components/BackgroundCanvas';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('es');
    const [view, setView] = useState<'home' | 'works'>('home');

    const t = TRANSLATIONS[language];

    return (
        <div className="relative w-full h-screen flex flex-col overflow-hidden text-white font-sans">
            {/* Background Animation */}
            <BackgroundCanvas />

            {/* Top Navigation */}
            <Header 
                t={t} 
                currentLang={language} 
                setLanguage={setLanguage} 
                currentView={view}
                setView={setView}
            />

            {/* Sliding Main Container */}
            <main className="flex-1 w-full h-full relative overflow-hidden">
                <div 
                    className="flex w-[200vw] h-full transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1) will-change-transform"
                    style={{ transform: view === 'works' ? 'translateX(-50%)' : 'translateX(0)' }}
                >
                    {/* View 1: Home */}
                    <div className="w-[100vw] h-full">
                        <HomeView t={t} />
                    </div>

                    {/* View 2: Works */}
                    <div className="w-[100vw] h-full">
                        <WorksView t={t} isVisible={view === 'works'} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;