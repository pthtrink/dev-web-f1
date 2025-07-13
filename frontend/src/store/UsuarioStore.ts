import { create } from "zustand";

interface UsuarioStore{
    usuarioLogado: number;
    setUsuarioLogado: (novoUsuarioLogado: number) => void;
    logout: () => void;
}

const useUsuarioStore = create<UsuarioStore>((set) => ({
    usuarioLogado: 0,
    setUsuarioLogado: (novoUsuarioLogado: number) => set(() => ({usuarioLogado: novoUsuarioLogado})),
    logout: () => {
        // Limpa o usuário logado
        set(() => ({usuarioLogado: 0}));
        
        // Remove todos os dados específicos do usuário do localStorage
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('cart_user_') || key.startsWith('favorites_user_')) {
                // Não remove aqui, pois queremos manter os dados para quando o usuário logar novamente
                // localStorage.removeItem(key);
            }
        });
    },
}))
export default useUsuarioStore;