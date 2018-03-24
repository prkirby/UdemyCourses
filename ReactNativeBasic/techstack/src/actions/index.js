export const SELECT_LIBRARY = 'SELECT_LIBRARY';

export const selectLibrary = (id) => ({
    type: SELECT_LIBRARY,
    payload: id
});
