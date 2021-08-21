import { createContext, useState, useContext} from 'react';

const FeedbackContext = createContext({});

function FeedbackProvider({children}) {
    const [isCoordenador, setIsCoordenador] = useState(false);
    const [nameAluno, setNameAluno] = useState(false);

    function defineCoordenador() {
      setIsCoordenador(true);
    }

    function defineOrientador() {
      setIsCoordenador(false);
    }

    function defineNameAluno(name) {
      setNameAluno(name);
    }

    return(
        <FeedbackContext.Provider value={{
            defineCoordenador,
            defineOrientador,
            defineNameAluno,
            isCoordenador,
            nameAluno
        }}>
          {children}
        </FeedbackContext.Provider>
    )
};

export default FeedbackProvider;

export function useFeedback() {
  const context = useContext(FeedbackContext);
  const {
    defineCoordenador,
    defineOrientador,
    defineNameAluno,
    isCoordenador,
    nameAluno
  } = context;

  return {
    defineCoordenador,
    defineOrientador,
    defineNameAluno,
    isCoordenador,
    nameAluno
  };
}