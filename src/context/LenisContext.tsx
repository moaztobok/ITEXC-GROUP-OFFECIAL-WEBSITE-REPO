import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import Lenis from "@studio-freight/lenis";
const LenisContext = createContext<Lenis | null>(null);
export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis();

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
