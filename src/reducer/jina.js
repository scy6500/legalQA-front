const infos = [
  {
    id: 'LegalQA',
    title : 'LegalQA using SentenceKoBART',
    description: 'Implementation of legal QA system based on SentenceKoBART.',
    server : 'https://main-jina-legal-qa-scy6500.endpoint.ainize.ai/api/search',
    githubLink : 'https://github.com/haven-jeon/LegalQA',
    ainizeLink: 'https://ainize.ai/scy6500/Jina-LegalQA?branch=main',
    inputType: "text",
    input: "조의금 소유는 누가 하는건가요?",
    output: "",
  }
];

const initialState = {
  info : infos[0]
};

export const jina = (state = initialState, action) => {
  switch (action.type) {
    case 'MODE_CHANGE':
      return {
        ...state,
        info : infos[action.id]
      };
    default:
      return state;
  };
};
