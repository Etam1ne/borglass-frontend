import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
    email: string | undefined;
    username: string;
    isAdmin: boolean;
}

const initialState: UserSlice = {
    email: undefined,
    username: "anonymous",
    isAdmin: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.username = action.payload.username;
        },
        unsetUser(state) {
            state.email = initialState.email;
            state.username = initialState.username;
        }
    },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;