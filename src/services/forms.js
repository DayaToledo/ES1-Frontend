import api from './api';

const formsApi = {
  create: (data) => api.post('/create/form', data),
  read: (data) => api.post('/read/form', data),
}

export default formsApi;