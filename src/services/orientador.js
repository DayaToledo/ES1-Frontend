import api from './api';

const orientadorApi = {
  read: (id) => api.get(`/read/orientador/${id}`),
}

export default orientadorApi;