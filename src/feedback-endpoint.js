export const feedbackOrigin = 'https://translatebetter-api.jinping4038.workers.dev';
export const feedbackPath = '/feedback';
export const previewFeedbackPath = '/ExpressBetter/api/feedback';

export const feedbackEndpoint = ['127.0.0.1', 'localhost', '[::1]'].includes(globalThis.location?.hostname)
  ? previewFeedbackPath
  : feedbackOrigin + feedbackPath;
