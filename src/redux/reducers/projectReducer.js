const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the starts', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' },
    { id: '4', title: 'finish FITFAM MP', content: 'blah blah blah' },
  ],
};

const projectReducer = (state = initState, action) => state;

export default projectReducer;
