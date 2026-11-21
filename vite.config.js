import { defineConfig } from 'vite';
import {feedbackOrigin, feedbackPath, previewFeedbackPath} from './src/feedback-endpoint.js';

const proxy = {
  [`^${previewFeedbackPath}(?:\\?|$)`]: {
    target: feedbackOrigin,
    changeOrigin: true,
    headers: {Origin: 'https://jinping4038.github.io'},
    rewrite: () => feedbackPath,
  },
};

export default defineConfig({
  base: '/ExpressBetter/',
  server: {proxy},
  preview: {proxy},
});
