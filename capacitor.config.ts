import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'avadlogistics.app',
  appName: 'AVAD Logistics',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
