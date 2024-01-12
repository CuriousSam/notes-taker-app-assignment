declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_API_URL: string;
      NODE_ENV: 'development' | 'production';
      PORT: string;
      DB_CONNECTION_URI: string;
      SALT: string;
    }
  }
}

export {};
