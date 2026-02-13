/// <reference types="vite/client" />

declare global {
    interface ImportMetaEnv {
        /** Base URL público de la aplicación (Vite/Astro) */
        BASE_URL?: string;
    }
}

export {};
