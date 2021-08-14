import api from './api';

const formsApi = {
  create: (data) => api.post('/send', data),
  read: (data) => api.post('/query', data),
}

export default formsApi;