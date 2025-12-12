import React from 'react';
import { TranslationKeys } from '../types';

interface WorksViewProps {
    t: TranslationKeys;
    isVisible: boolean;
}

const WorksView: React.FC<WorksViewProps> = ({ t, isVisible }) => {
    return (
        <div className="w-full h-full flex flex-col no-scrollbar overflow-y-auto overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-10 py-16 w-full flex-1 flex flex-col gap-20 items-center justify-start">
                
                {/* Project 1 */}
                <article 
                    className={`bg-white/5 border border-border rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] shadow-2xl backdrop-blur-sm max-w-5xl w-full transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="w-full h-[400px] bg-black relative overflow-hidden group">
                        <img 
                            src="https://raw.githubusercontent.com/marcosdespujoscelular-hash/despux/main/img1/PROY.png" 
                            alt="Structural Analysis" 
                            className="w-full h-full object-contain bg-[#1a1a1a] transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://picsum.photos/800/600?grayscale";
                            }}
                        />
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{t.work_tag}</span>
                        <h2 className="text-3xl font-bold mb-5 leading-tight">{t.work_title}</h2>
                        <p className="text-textMuted mb-8 text-base">
                            {t.work_desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Python', 'AutoCAD API', 'Node.js', 'TensorFlow'].map((tech) => (
                                <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a href="#" className="self-start text-white border border-primary px-6 py-2 rounded transition-all hover:bg-primary hover:shadow-primary-glow">
                            {t.work_btn}
                        </a>
                    </div>
                </article>

                {/* Project 2 */}
                <article 
                    className={`bg-white/5 border border-border rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] shadow-2xl backdrop-blur-sm max-w-5xl w-full transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="w-full h-[400px] bg-black relative overflow-hidden group">
                        <img 
                            src="https://raw.githubusercontent.com/marcosdespujoscelular-hash/despux/main/img1/ciclon.png" 
                            alt="Cyclone Separator" 
                            className="w-full h-full object-contain bg-[#1a1a1a] transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://picsum.photos/800/600?grayscale&blur=2";
                            }}
                        />
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{t.work2_tag}</span>
                        <h2 className="text-3xl font-bold mb-5 leading-tight">{t.work2_title}</h2>
                        <p className="text-textMuted mb-8 text-base">
                            {t.work2_desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['SolidWorks', 'CFD Simulation', 'Inox 304L'].map((tech) => (
                                <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a href="#" className="self-start text-white border border-primary px-6 py-2 rounded transition-all hover:bg-primary hover:shadow-primary-glow">
                            {t.work_btn}
                        </a>
                    </div>
                </article>

            </div>
            
            <footer className="py-8 px-10 text-center text-sm text-[#555] border-t border-[#111]">
                <div dangerouslySetInnerHTML={{ __html: t.footer_rights }}></div>
            </footer>
        </div>
    );
};

export default WorksView;