import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-unresolved
import { API_URL } from "@env";
//const API_URL = "http://192.168.1.20:8000";

console.log("✌️API_URL --->", API_URL);
type User = {
  id: string;
  email: string;
};

type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// Register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    formData: { username: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("✌️data --->", data);
      if (!res.ok) throw new Error(data.message || "Register failed");

      return data.user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      return data.user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
