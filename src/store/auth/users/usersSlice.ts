import {createAsyncThunk} from "@reduxjs/toolkit";
import apiClient from "../../../utils/axios";

interface DataState {
    data: any[];
    loading: boolean;
    error: string | null;
}

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
};

export const getUsers = createAsyncThunk('users', async (_, thunkAPI) => {
    try {
        const response = await apiClient.get('/users');
        return response.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});