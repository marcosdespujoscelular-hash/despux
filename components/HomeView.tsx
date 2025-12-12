import React from 'react';
import { TranslationKeys } from '../types';

interface HomeViewProps {
    t: TranslationKeys;
}

const HomeView: React.FC<HomeViewProps> = ({ t }) => {
    return (
        <div className="w-full h-full flex flex-col no-scrollbar overflow-y-auto overflow-x-hidden">
            {/* Hero Section */}
            <section className="flex-1 flex flex-col justify-center items-center text-center px-5 py-20 min-h-[60vh] relative z-10">
                <h1 
                    className="text-4xl md:text-6xl font-bold mb-5 leading-tight max-w-4xl drop-shadow-lg"
                    dangerouslySetInnerHTML={{ __html: t.hero_title }}
                />
                <p className="text-lg md:text-xl text-textMuted max-w-xl mb-12 drop-shadow-md">
                    {t.hero_desc}
                </p>
            </section>

            {/* Contact Section */}
            <section className="bg-bgSurface py-16 px-10 border-t border-border z-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold text-white">{t.contact_title}</h3>
                        <p className="text-textMuted text-base leading-relaxed">
                            {t.contact_desc}
                        </p>
                    </div>

                    <div className="w-full">
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder={t.input_email}
                                className="w-full bg-[#0a0a0a] border border-border p-4 text-white text-sm rounded focus:outline-none focus:border-primary transition-colors"
                                required
                            />
                            <textarea
                                rows={4}
                                placeholder={t.input_msg}
                                className="w-full bg-[#0a0a0a] border border-border p-4 text-white text-sm rounded focus:outline-none focus:border-primary transition-colors resize-y"
                                required
                            />
                            <button
                                type="submit"
                                className="self-start bg-white text-black font-bold py-3 px-6 rounded-sm hover:opacity-90 hover:scale-105 transition-all transform"
                            >
                                {t.btn_send}
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <footer className="py-8 px-10 text-center text-sm text-[#555] bg-[#050505] border-t border-[#111]">
                <div dangerouslySetInnerHTML={{ __html: t.footer_rights }}></div>
                <div className="mt-1 italic text-[#777]">{t.footer_dev}</div>
            </footer>
        </div>
    );
};

export default HomeView;