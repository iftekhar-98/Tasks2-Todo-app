import todo from './todo';

const initialState = [
  {
    id: 1,
    text: 'Do the project',
    completed: true
  },
  {
    id: 2,
    text: 'Writing Email to the Designer',
    completed: true
  },
  {
    id: 3,
    text: 'Go to Pharmacy',
    completed: false
  },
  {
    id: 4,
    text: 'Cook the Lunch',
    completed: false
  },
  {
    id: 5,
    text: 'Family Meeting',
    completed: false
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;