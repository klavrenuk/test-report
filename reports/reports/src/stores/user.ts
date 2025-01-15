import { defineStore } from "pinia";

import type { UserStore, User } from "@/types/user";

const storageName = "ReportsAuth";

export const useUser = defineStore("User", {
  state: (): UserStore => ({
    user: JSON.parse(localStorage.getItem(storageName) || "null"),
  }),

  getters: {
    getUser: (state) => state.user || null,
  },

  actions: {
    login(user: User) {
      this.user = user;
      localStorage.setItem(storageName, JSON.stringify(user));
    },

    logout() {
      this.user = null;
      localStorage.removeItem(storageName);
    },
  },
});
