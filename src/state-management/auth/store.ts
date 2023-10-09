import { create } from "zustand"
import { mountStoreDevtool } from "simple-zustand-devtools"

interface AuthStore {
    user: string,
    login: (username: string) => void,
    logout: () => void
}

const useAuthStore = create<AuthStore> (set => ({
    user: '',
    login: username => set(() => ({ user: username })),
    logout: () => set(() => ({ user: '' }))
}))


mountStoreDevtool('Auth store', useAuthStore)

export default useAuthStore;