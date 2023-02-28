const EVENT_LIST_KEY = "EVENT_LIST_KEY";
const CURRENT_EVENT_IN_PROGRESS = "CURRENT_EVENT_PROGRESS";
export const eventStep = {
  INTRO: "INTRO",
  CREATE_NEW_EVENT: {
    SELECT_EVENT_TYPE: "SELECT_EVENT_TYPE",
    SELECT_EVENT_SIZE: "SELECT_EVENT_SIZE",
    EVENT_FORM: "EVENT_FORM",
    SEND_INVITEE: "SEND_INVITEE",
    FOOD_ARRANGEMENT: "FOOD_ARRANGEMENT",
    ALCOHOL_INCLUDED: "ALCOHOL_INCLUDED",
    DECORATION_REQUIREMENTS: "DECORATION_REQUIREMENTS",
    RENT_BOARD_GAMES: "RENT_BOARD_GAMES"
  },
  getStep(currentStep, isPrevious) {
    const order = [this.INTRO, ...Object.keys(this.CREATE_NEW_EVENT)];
    const index = order.findIndex(currentStep)
    if (isPrevious) {
      return order[index - 1];
    }
    return order[index + 1];
  }
}

export function getCurrentInProgressEvent() {
  if (localStorage.getItem(CURRENT_EVENT_IN_PROGRESS)) {
    return JSON.parse(CURRENT_EVENT_IN_PROGRESS);
  }
  return {};
}

export function getCurrentEvents() {
  if (localStorage.getItem(EVENT_LIST_KEY)) {
    return JSON.parse(EVENT_LIST_KEY);
  }
  return [];
}

export function setEvent(item) {
  localStorage.removeItem(CURRENT_EVENT_IN_PROGRESS);
  localStorage.setItem(EVENT_LIST_KEY, JSON.stringify([...getCurrentEvents(), item]));
  return true;
}

export function getLastValidEvent(item) {
  const events = getCurrentInProgressEvent();
  const lastEvent = events[events.length - 1];
  if (!lastEvent) {
    return null;
  }
  if (lastEvent.dateTime >= Date.now()) {
    return lastEvent;
  }
  return null;
}


export function getLastOutDateEvent(item) {
  const events = getCurrentInProgressEvent();
  const lastEvent = events[events.length - 1];
  if (!events.length) {
    return null;
  }
  return events.filter(event => event.dateTime < Date.now())
}

