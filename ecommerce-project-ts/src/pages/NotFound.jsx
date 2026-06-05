import { Header } from "../components/Header";
import './NotFound.css'
export function NotFound({cart}) {
  return (
    <>
      <Header cart={cart}/>
      <p className="not-found">Page not found</p>
    </>
  );
}
