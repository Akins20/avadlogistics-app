import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'avadlogistics.app',
  appName: 'avadlogistics-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
