import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitestの設定を追加
  test: {
    globals: true,
    environment: "jsdom",
  },
});
