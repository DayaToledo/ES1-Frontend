import api from './api';

const feedbackApi = {
  create: (data) => api.post('/register/feedback', data),
}

export default feedbackApi;