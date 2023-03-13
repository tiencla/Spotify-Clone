import {atom} from 'recoil';

export const currentSongState = atom({
    key: 'currentSongState', //* unique ID (with respect to other atoms/selectors)
    default: null, //* default value (aka initial value)
});

export const isPlayingState = atom({
    key: 'isPlayingState',
    default: false,
})