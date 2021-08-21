import api from './api';

const alunoApi = {
  read: () => api.get('/read/aluno'),
}

export default alunoApi;