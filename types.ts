export type Language = 'es' | 'en' | 'de';

export interface TranslationKeys {
    nav_tools: string;
    nav_calc: string;
    nav_gears: string;
    nav_cad: string;
    nav_works: string;
    hero_title: string;
    hero_desc: string;
    contact_title: string;
    contact_desc: string;
    input_email: string;
    input_msg: string;
    btn_send: string;
    footer_rights: string;
    footer_dev: string;
    work_tag: string;
    work_title: string;
    work_desc: string;
    work_btn: string;
    work2_tag: string;
    work2_title: string;
    work2_desc: string;
}

export interface Translations {
    es: TranslationKeys;
    en: TranslationKeys;
    de: TranslationKeys;
}