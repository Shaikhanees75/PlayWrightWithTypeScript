import { PlaywrightTestConfig,devices } from "@playwright/test";

const config : PlaywrightTestConfig ={

    use: {
        headless: false,
        // viewport: { width: 1280, height: 720 },
        // actionTimeout: 15000,
        // ignoreHTTPSErrors: true,
        // video: 'off',
        // screenshot: 'off',
      },
     
    projects: [
        {
          name: 'Chromium',
          use: { browserName: 'chromium' },
        }
        // ,
        // {
        //   name: 'Firefox',
        //   use: { browserName: 'firefox' },
        // },
        // {
        //   name: 'Webkit',
        //   use: { browserName: 'webkit' },
        // },
      ],
    
      reporter: [
        ['list'],
        ['html', { outputFolder: './build/e2e', open: 'never' }],
        ['junit', { outputFile: './build/e2e/test-results.xml' }]
    ],
      
};

export default config;