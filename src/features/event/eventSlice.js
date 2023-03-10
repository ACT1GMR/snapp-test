import {createSlice} from '@reduxjs/toolkit';
import {eventStep, getCurrentEvents, getCurrentInProgressEvent} from '../../app/status';

const initialState = {
  list: getCurrentEvents(),
  selectedEvent: null,
  checkList: [],
  ...{
    step: eventStep.INTRO,
    occasion: null,
    size: null,
    name: null,
    dateTime: null,
    budget: null,
    eInvite: null,
    foodArrangement: null,
    alcoholIncluded: null,
    decorator: null,
    rentBoardGame: null,
    ...getCurrentInProgressEvent()
  }
};


export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    changeStep: (state, {payload}) => {
      state.step = payload;
    },
    changeSelectedEvent: (state, {payload}) => {
      state.selectedEvent = payload;
    },
    occasion: (state, {payload}) => {
      state.occasion = payload;
    },
    size: (state, {payload}) => {
      state.size = payload;
    },
    info: (state, {payload: {name, dateTime, budget}}) => {
      state.name = name;
      state.dateTime = dateTime;
      state.budget = budget;
    },
    eInvite: (state, {payload}) => {
      state.eInvite = payload;
    },
    foodArrangement: (state, {payload}) => {
      state.foodArrangement = payload;
    },
    alcoholIncluded: (state, {payload}) => {
      state.alcoholIncluded = payload;
    },
    decorator: (state, {payload}) => {
      state.decorator = payload;
    },
    rentBoardGame: (state, {payload}) => {
      state.rentBoardGame = payload;
    }
  }
});

export const selectEvent = (state) => state.event;
export const {
  changeStep,
  occasion,
  size,
  info,
  eInvite,
  foodArrangement,
  alcoholIncluded,
  decorator,
  rentBoardGame,
  changeSelectedEvent
} = eventSlice.actions
export default eventSlice.reducer;