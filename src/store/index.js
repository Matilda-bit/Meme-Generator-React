import { createStore } from 'redux';

const initialState = {
  lines: [
    {
      title: "Top Text",
      text: "",
      color: "color-white ",
      textAlign: 'text-align-center',
      fontSize: 10
    },
    {
      title: "Bottom Text",
      text: "",
      color: "color-white ",
      textAlign: 'text-align-center',
      fontSize: 10
    }
  ],
  hideSettings: true,
  picInfo: null,
  flip: false,
  allMemeImgs: [],
  item: {
    id: "61579",
    box_count: 2,
    height: 335,
    width: 568,
    name: "One Does Not Simply",
    img: "https://i.imgflip.com/1bij.jpg",
    caption: 446250,
    data: [],
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...state, item: action.payload };
    case 'FLIP_IMG':
        return { ...state, flip: action.payload };
    case 'SET_LINES':
      return { ...state, lines: action.payload };
    case 'SET_HIDE_SETTINGS':
      return { ...state, hideSettings: action.payload };
    // Add cases for other state updates
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

