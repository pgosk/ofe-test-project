/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_COPYRIGHTS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const APP_VERSION: string;
