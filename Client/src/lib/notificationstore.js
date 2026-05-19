import { create } from "zustand";
import apiRequest from "./api.request";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    try {
      const res = await apiRequest("/users/notification");
      set({ number: res.data });
    } catch (err) {
      if (err.response?.status === 401) {
        set({ number: 0 }); // User not logged in, silently ignore
      } else {
        console.error("Failed to fetch notifications:", err.message);
      }
    }
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
}));
