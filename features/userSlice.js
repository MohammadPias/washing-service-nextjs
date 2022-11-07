import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { getError } from '../utils/error';
import { decodeToken, instance } from '../utils/helper';

const initialState = {
    user: {
        info: Cookies.get("user") ? decodeToken() : null,
        loading: false,
        error: null,
    },
}

export const fetchToken = createAsyncThunk('user/fetchToken',
    async (user, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await instance.post("/signin", {
                email: user.email,
                password: user.password,
            }
            );
            // console.log(data, "Thunk data")
            return fulfillWithValue(data);
        } catch (err) {
            // console.log(error, "error message")
            return rejectWithValue(err);
        }
    })

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        signOut: state => {
            state.user.info = null;
        }
    },

    extraReducers: builder => {
        builder
            .addCase(fetchToken.pending, (state) => {
                state.user.loading = true;
                state.user.error = null;
            })
            .addCase(fetchToken.fulfilled, (state, { payload }) => {
                console.log(state.user.info, "from fulfilled")
                state.user.loading = false;
                state.user.info = payload;

            })
            .addCase(fetchToken.rejected, (state, { payload }) => {
                const err = getError(payload)
                state.user.loading = false;
                state.user.error = err
            })
    }
});

export const { signOut } = userSlice.actions

export default userSlice.reducer