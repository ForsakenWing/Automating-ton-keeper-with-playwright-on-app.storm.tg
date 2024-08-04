import { defineConfig } from "playwright/test"

export default defineConfig({

    quiet: false,
  
    expect: {
      timeout: 30 * 1000,
    },
    
  
    testDir: './tests',  
  })