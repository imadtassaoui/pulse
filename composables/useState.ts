export const useNav = () => useState<boolean>("nav", () => false);
export const useForm = () => useState<string>("form", () => "login");
export const useWidth = () =>
  useState<number>("width", () => window.innerWidth);
export const useCart = () => useState<boolean>("cart", () => false);
export const useSearch = () => useState<boolean>("search", () => false);
export const useProducts = () => useState<any[]>("products", () => []);
export const useAuth = () => useState<boolean>("auth", () => false);
