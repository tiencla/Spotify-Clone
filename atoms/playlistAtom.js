import {atom} from 'recoil';

export const playlistState = atom({
    key: 'playlistState', 
    default: null,
});

export const playlistIdState = atom({
    key: 'playlistIdState', //* unique ID (with respect to other atoms/selectors)
    default: '0vvXsWCC9xrXsKd4FyS8kM', //* default value (aka initial value) 
})