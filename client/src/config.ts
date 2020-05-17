/**
 * Environment variables can be utilized to overwrite default config
 */
const config = {
  apiUrl: process.env.API_URL || 'http://localhost/api',
  currency: process.env.CURRENCY || '$',
};

export default config;
