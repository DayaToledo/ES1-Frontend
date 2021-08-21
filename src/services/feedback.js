import api from './api';

const feedbackApi = {
  create: (data) => api.post('/create/feedback', data),
  readOrientador: (data) => api.post('/read/feedbackOrientador', data),
  readCoordenador: (data) => api.post('/read/feedbackCoordenador', data),
}

export default feedbackApi;