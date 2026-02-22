import Duaa from "../duaa/duaa";
import Header from "../header/Header";

export default function Main() {
  return (
    <>
      <main>
        <div className="bg-blur max-w-6xl mx-auto  my-10 p-5">
          <Header />
          <Duaa/>
        </div>
      </main>
    </>
  );
}
