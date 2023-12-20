const initState = {
  projects: [
    { id: '1', title: 'help me', content: 'blabla' },
    { id: '2', title: 'help us', content: 'clacla' },
    { id: '3', title: 'help him', content: 'dladla' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error ', action.err);
      return state;
    default:
      console.log('Nothing');
      return state;
  }
};

export default projectReducer;
