import api from './api';

const alunoApi = {
  read: () => api.get('/queryAll/aluno'),
}

export default alunoApi;