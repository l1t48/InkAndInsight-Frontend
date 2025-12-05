declare interface ImportMetaEnv {
  readonly VITE_apiBaseUrlLocal: string;
  readonly VITE_apiBaseUrlProduction: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}