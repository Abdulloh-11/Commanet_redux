import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/posts/UserSlice";

const store = configureStore({
    reducer: {     
        user_card: UserSlice,     
    }
});

export default store