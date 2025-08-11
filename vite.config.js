import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Skillgineers_Tech/', // 👈 must match your repo name
})
