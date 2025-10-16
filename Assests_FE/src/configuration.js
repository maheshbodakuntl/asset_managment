// configuration.js

// API Configuration
// const API_CONFIG = {
//     APIURL: 'https://amsapi.srifincredit.com/api',
//   };

const API_CONFIG = {
    APIURL: 'http://10.203.141.202:2728/api',
  };

// Refresh Intervals and Timeouts
const REFRESH_CONFIG = {
  DROPDOWN_REFRESH_INTERVAL: 30 * 60 * 1000, // 30 minutes in milliseconds
};

// UI Configuration (if any UI-related settings are needed)
// const UI_CONFIG = {
//   BASE_UI_URL: 'https://ams.srifincredit.com/', // UI base URL
// };

const UI_CONFIG = {
  BASE_UI_URL: 'http://10.203.141.202:3000', // UI base URL
};
module.exports = { API_CONFIG, REFRESH_CONFIG, UI_CONFIG };
