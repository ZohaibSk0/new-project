import HeroSection from "./Components/Hero";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import destinations from "./Data";
import Head from "next/head";
import Rated from "./Components/Rated";
import ProfileCard from "./Components/userprofile";
// import ComingSoon from "./Components/CommingSoon";
const Landing = () => {
  return (
    // <ComingSoon />
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "antiquewhite",
      }}
    >
      <Head>
        <title>PathFinder</title>
      </Head>
      <HeroSection />
      {/* <ProfileCard /> */}
      <Cards Data={destinations} />
      <main className="py-16 container mx-auto px-6 md:px-0">
        <Rated />
      </main>
      <Footer />
    </div>
  );
};
export default Landing;

// Arrow function:
// const func1 = (a, b) => a + b;
// func1(1, 3);

//function expression:
// const func1 =function(a,b) {
// return a+b;
// }

//function declaration:
// function func1(a,b){
//   return a+b;
// }
