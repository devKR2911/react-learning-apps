import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../services/apiCall";

const initialState = {
  movieList: [],
  loading: false,
  error: "",
};

export const fetchMovieList = createAsyncThunk(
  "movies/getAllMovies",
  async () => {
    const data = await getMovies();
    console.log(data);
    return data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMovieList: (state) => {
      state.movieList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieList.fulfilled, (state, { payload }) => {
        (state.loading = false), (state.movieList = payload);
      })
      .addCase(fetchMovieList.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.error.message;
      });
  },
});
export const { clearMovieList } = movieSlice.actions;
export default movieSlice.reducer;
