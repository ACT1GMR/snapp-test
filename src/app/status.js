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
  getOrder() {
    return [this.INTRO, ...Object.keys(this.CREATE_NEW_EVENT)];
  },
  getStep(currentStep, isPrevious) {
    const order = this.getOrder();
    const index = order.findIndex(step => step === currentStep)
    if (isPrevious) {
      return order[index - 1];
    }
    return order[index + 1];
  },
  getStepProgress(step) {
    const steps = this.getOrder();
    const index = steps.findIndex(stp => stp === step);
    return Math.ceil(index * 100 / steps.length);
  }
}

export function getCurrentInProgressEvent() {
  let inProgress = localStorage.getItem(CURRENT_EVENT_IN_PROGRESS);
  if (inProgress) {
    return JSON.parse(inProgress);
  }
  return {};
}


export function setCurrentInProgressEvent(inProgressObject) {
  return localStorage.setItem(CURRENT_EVENT_IN_PROGRESS, JSON.stringify(inProgressObject));
}

export function removeCurrentInProgressEvent(inProgressObject) {
  return localStorage.removeItem(CURRENT_EVENT_IN_PROGRESS);
}

export function getCurrentEvents() {
  let currentEvents = localStorage.getItem(EVENT_LIST_KEY);
  if (currentEvents) {
    return JSON.parse(currentEvents);
  }
  return [];
}

export function setEvent(item) {
  removeCurrentInProgressEvent();
  const list = [...getCurrentEvents(), item].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
  return localStorage.setItem(EVENT_LIST_KEY, JSON.stringify(list));
}

export function getLastValidEvent(item) {
  const events = getCurrentEvents().filter(evt => evt.dateTime >= Date.now());
  const lastEvent = events[events.length - 1];
  if (!lastEvent) {
    return null;
  }
  if (lastEvent.dateTime >= Date.now()) {
    return lastEvent;
  }
  return null;
}


export function getLastOutDateEvent(count) {
  const events = getCurrentEvents();
  const filteredList = events.filter(evt => evt.dateTime < Date.now());
  if (filteredList && filteredList.length) {
    return filteredList.slice(filteredList.length >= count ? filteredList.length - count : 0);
  }
  return null
}

