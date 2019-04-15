export interface IAppState {
  index: number;
  images: any[];
  selectedImage: any;
}

export const INITIAL_STATE: IAppState = {
  index: 0,
  images: [],
  selectedImage: {
    largeImageURL: ''
  }
};

export function rootReducer(lastState: IAppState, action: any): IAppState {
  switch (action.type) {

    case 'IMAGES_LOADED':
      return  Object.assign({}, lastState, { images: lastState.images.concat(action.images), selectedImage: action.images[0]});
    case 'NEXT':
      return Object.assign({}, lastState, { index: getNextIndex(lastState), images: lastState.images, selectedImage: lastState.images[getNextIndex(lastState)] });
    case 'PREVIOUS':
      return Object.assign({}, lastState, { index: getPreviousIndex(lastState), images: lastState.images, selectedImage: lastState.images[getNextIndex(lastState)] });

  }
  return lastState;
}

function getNextIndex(state: any) {
  let nextIndex = 0;
  if (state.images.length > 0) {
    nextIndex = state.index + 1 === state.images.length ? 0 : state.index + 1;
  }
  return nextIndex;
}

function getPreviousIndex(state: any) {
  let previousIndex = 0;
  if (state.images.length > 0) {
    previousIndex = state.index - 1 < 0 ? state.images.length - 1 : state.index - 1;
  }
  return previousIndex;
}
