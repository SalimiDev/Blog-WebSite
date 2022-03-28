import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: 'tech',
        blogData: null,
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload;
        },
    },
});

export const { setSignedIn, setUserData, setSearchInput, setBlogData } = userSlice.actions;

const selectSignedIn = state => state.user.isSignedIn;
const selectUserData = state => state.user.userData;
const selectSearchInput = state => state.user.searchInput;
const selectBlogData = state => state.user.blogData;

export default userSlice.reducer;
