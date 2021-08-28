import api from './api';

const coordenadorApi = {
  read: (id) => api.get(`/read/coordenador/${id}`),
}

export default coordenadorApi;