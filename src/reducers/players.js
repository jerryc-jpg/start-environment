import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchPlayers = createAsyncThunk("allPlayers", async () => {
  try {
    const { data } = await axios.get("http://localhost:8080/api/players");
    return data;
  } catch (err) {
    console.log(err);
  }
});

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlayers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default playerSlice.reducer;
