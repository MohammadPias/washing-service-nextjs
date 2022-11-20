import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { getError } from '../utils/error';
import { decodeToken, instance } from '../utils/helper';

const initialState = {
    user: {
        info: Cookies.get("user") ? decodeToken() : null,
        loading: false,
        error: null,
        modal: {
            isModalOpen: false,
            payload: null,
        },
    },
}

export const signInThunk = createAsyncThunk('user/signInThunk',
    async (user, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await instance.post("/signin", {
                email: user.email,
                password: user.password,
            }
            );
            return fulfillWithValue(data);
        } catch (err) {
            return rejectWithValue(err);
        }
    })


export const signUpThunk = createAsyncThunk('user/signUpThunk',
    async (user, { rejectWithValue, fulfillWithValue }) => {

        try {
            const { data } = await instance.post("/signup", {
                name: user.name,
                email: user.email,
                password: user.password,
            }
            );
            return fulfillWithValue(data);

        } catch (err) {
            return rejectWithValue(err)
        }
    })

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        signOut: state => {
            state.user.info = null;
        },
        modalOpen: (state, { payload }) => {
            state.user.modal.isModalOpen = true;
            state.user.modal.payload = payload;
        },
        modalClose: state => {
            state.user.modal.isModalOpen = false;
            state.user.modal.payload = null;
        }
    },

    extraReducers: builder => {
        builder
            .addCase(signInThunk.pending, (state) => {
                state.user.loading = true;
                state.user.error = null;
            })
            .addCase(signInThunk.fulfilled, (state, { payload }) => {
                Cookies.set("user", JSON.stringify(payload));
                const decodeUser = decodeToken()
                state.user.loading = false;
                state.user.info = decodeUser;

            })
            .addCase(signInThunk.rejected, (state, { payload }) => {
                const err = getError(payload)
                state.user.loading = false;
                state.user.error = err
            })
            .addCase(signUpThunk.pending, (state) => {
                state.user.loading = true;
                state.user.error = null;
            })
            .addCase(signUpThunk.fulfilled, (state, { payload }) => {
                Cookies.set("user", JSON.stringify(payload));
                const decodeUser = decodeToken()
                state.user.loading = false;
                state.user.info = decodeUser;

            })
            .addCase(signUpThunk.rejected, (state, { payload }) => {
                const err = getError(payload)
                state.user.loading = false;
                // console.log(err, "payload error")
                state.user.error = err
            })
    }
});

export const { signOut, modalOpen, modalClose } = userSlice.actions

export default userSlice.reducer