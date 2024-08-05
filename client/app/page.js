import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center">
          Welcome to My Website
        </h1>
        <p className="text-center mt-4">
          This is the home page. Here you can find links to various sections of
          the site.
        </p>
      </div>
    </>
  );
}
