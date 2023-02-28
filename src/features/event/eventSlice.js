import {createSlice} from '@reduxjs/toolkit';
import {eventStep} from '../../app/status';

const initialState = {
  step: eventStep.INTRO,
  occasion: null,
  size: null,
  name: null,
  date: null,
  time: null,
  budget: null,
  eInvite: null,
  foodArrangement: null,
  alcoholIncluded: null,
  decorator: null,
  rentBoardGame: null
};


export const listSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    occasion: (state, payload) => {
      state.occasion = payload;
    },
    size: (state, payload)=> {
      state.size = payload;
    },
    info:(state, {name, date, time, budget}) =>{
      state.name = name;
      state.date = date;
      state.time = time;
      state.budget = budget;
    },
    eInvite: (state, payload)=> {
      state.eInvite = payload;
    },
    foodArrangement: (state, payload)=> {
      state.foodArrangement = payload;
    },
    alcoholIncluded: (state, payload)=> {
      state.alcoholIncluded = payload;
    },
    decorator: (state, payload)=> {
      state.decorator = payload;
    },
    rentBoardGame: (state, payload)=> {
      state.rentBoardGame = payload;
    }
  }
});

export const selectEvent = (state) => state.event;
export default listSlice.reducer;
