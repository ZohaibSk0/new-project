//  components/ProfileCard.js
// import image1 from "./cards13.jpg";
// import image2 from "./cards14.jpg";
// import image3 from "./cards15.jpg";
// import image4 from "./cards16.jpg";
// import image5 from "./cards17.jpg";
// import Image from "next/image";
// import Reviews from "./Reviewers";
// import Name from "./Reviewers";
// import Email from "./Reviewers";
// import Location from "./Reviewers";
// import Cards from "./Cards";
// import reviewer from "./Reviewers";
// import reviewers from "./data/Reviewers";
import image1 from "./cards13.jpg";
import image2 from "./cards14.jpg";
import image3 from "./cards15.jpg";
import image4 from "./cards16.jpg";
import image5 from "./cards17.jpg";
import image6 from "./cards18.jpg";
import image7 from "./cards19.jpg";
import image8 from "./cards20.jpg";
import Image from "next/image";
import Cards from "./Cards";
import followers from "./Reviewers";
import Reviews from "./Reviewers";
import destinations from "./Reviewers";
import FaBeer from "react-icons/fa";

export default function ProfileCard() {
  const review = Reviews[0];
  const imageUrl = review["1"]["image"];
  const name = review["1"]["name"];
  const title = review["1"]["title"];
  const email = review["1"]["email"];
  const location = review["1"]["location"];
  const rating = review["1"]["rating"];
  const destinations = review["1"]["destinations"];

  return (
    <div className="relative z-20">
      <div
        className="relative p-8 border-4 border-white rounded-lg shadow-lg mx-auto bg-black text-gray-900 overflow-hidden"
        style={{ maxWidth: "650px", minHeight: "400px" }}
      >
        <div className="relative w-full h-[600px] bg-black overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={imageUrl}
              alt={`${name}'s profile picture`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="absolute top-4 left-4 z-20">
            <div className="space-y-2 group">
              <span className="block w-8 h-0.5 bg-white group-hover:bg-limegreen transition-colors duration-300"></span>
              <span className="block w-8 h-0.5 bg-white group-hover:bg-limegreen transition-colors duration-300"></span>
              <span className="block w-8 h-0.5 bg-white group-hover:bg-limegreen transition-colors duration-300"></span>
            </div>
          </div>
        </div>
        <div className="text-center z-20">
          <div className="text-center">
            <h2
              className="text-4xl font-bold mb-2 flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-105 relative"
              style={{ color: "limegreen" }}
            >
              <span className="mr-2 bg-black px-1 rounded-md shadow-lg">
                {name}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white hover:text-lime-400 transition duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23 3a10.91 10.91 0 01-3.14.86A4.48 4.48 0 0022.4 2a9.09 9.09 0 01-2.87 1.1A4.55 4.55 0 0016.2 2a4.48 4.48 0 00-4.48 4.48c0 .35.03.69.09 1.02A12.81 12.81 0 011.67 3.15A4.47 4.47 0 00.95 5.9a4.48 4.48 0 001.41 6.01A4.5 4.5 0 01.9 11v.05c0 1.74.6 3.34 1.6 4.63a4.5 4.5 0 001.63 1.06A4.5 4.5 0 005 18c.66 0 1.29-.07 1.9-.21a4.5 4.5 0 003.6 1.53A9.1 9.1 0 012 17.65a12.77 12.77 0 007 2.05c8.4 0 13-6.98 13-13.04 0-.2-.01-.4-.02-.6A9.16 9.16 0 0023 3z" />
              </svg>
            </h2>
          </div>
          <p
            className="font-semibold mb-3 text-white transition-colors duration-300 hover:text-gray-700 font-['Roboto'] z-20 relative"
            style={{ fontSize: "22px" }}
          >
            {review["1"]["title"]}
          </p>
          <p
            className="font-bold mb-3 text-white tracking-wide transition-colors duration-300 hover:text-gray-700 font-['Roboto'] z-20 relative"
            style={{ fontSize: "21px" }}
          >
            {email}
          </p>
          <p
            className="font-semibold mb-3 text-white tracking-wide transition-colors duration-300 hover:text-gray-700 font-['Roboto'] z-20 relative"
            style={{ fontSize: "20px" }}
          >
            {location}
          </p>

          <div className="flex justify-center mb-4">
            <div
              className="relative text-yellow-500"
              style={{ fontSize: "26px" }}
            >
              {"★".repeat(Math.floor(rating))}
            </div>
            {rating % 1 !== 0 && (
              <div
                className="relative text-red-500"
                style={{ fontSize: "26px" }}
              >
                {"★"} {/* Half star in red */}
              </div>
            )}
          </div>
          <div>
            <button className="bg-white text-black font-['Poppins, sans-serif'] px-6 py-3 rounded mb-4 border-3 border-limegreen transition-transform duration-400 hover:bg-limegreen hover:text-black hover:border-limegreen hover:shadow-lg hover:scale-105">
              Message
            </button>
          </div>

          {/* Icons on the Right */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-500 hover:text-red-700 transition duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>

            {/* Add Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500 hover:text-green-700 transition duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 5v14m7-7H5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Message Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500 hover:text-blue-700 transition duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 2H4a2 2 0 00-2 2v16l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H6v-2h12v2zm0-4H6V6h12v2z" />
            </svg>
          </div>
        </div>
        <div>
          <p
            className="text-left font-bold underline transition-colors duration-300 hover:text-black"
            style={{
              color: "limegreen",
              fontSize: "29px",
              fontFamily: "Roboto Condensed, sans-serif",
              textDecorationColor: "white", // Makes the underline white
            }}
          >
            Profile:
          </p>

          <p
            className="text-left text-white font-bold mb-6 p-8 rounded-lg shadow-lg"
            style={{ fontSize: "22px", fontFamily: "Poppins, sans-serif" }}
          >
            {review["1"]["bio"]}
          </p>
          <div className="p-4">
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 hover:text-blue-700 transition duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22.225 0H1.775C.797 0 0 .796 0 1.774v20.452C0 23.204.797 24 1.775 24h20.451c.978 0 1.774-.797 1.774-1.774V1.774C24 .796 23.204 0 22.225 0zm-14.462 20.452H5.434V9.236h2.33v11.216zm-1.165-12.891c-.747 0-1.354-.606-1.354-1.353 0-.747.607-1.353 1.354-1.353.747 0 1.354.606 1.354 1.353 0 .747-.607 1.353-1.354 1.353zm13.193 12.891h-2.335v-5.992c0-1.434-.026-3.271-1.994-3.271-1.995 0-2.298 1.553-2.298 3.156v6.107h-2.335V9.236h2.24v1.526h.031c.312-.59 1.078-1.207 2.223-1.207 2.377 0 2.818 1.564 2.818 3.605v6.293z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="instagram-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#instagram-gradient)"
                      d="M12 2.163c3.204 0 3.584 0 4.85.07 1.18.066 1.803.26 2.224.428a4.69 4.69 0 011.675 1.085c.474.474.822 1.044 1.085 1.675.168.421.362 1.044.428 2.224.07 1.266.07 1.646.07 4.85s0 3.584-.07 4.85c-.066 1.18-.26 1.803-.428 2.224a4.69 4.69 0 01-1.085 1.675c-.474.474-1.044.822-1.675 1.085-.421.168-1.044.362-2.224.428-1.266.07-1.646.07-4.85.07s-3.584 0-4.85-.07c-1.18-.066-1.803-.26-2.224-.428a4.69 4.69 0 01-1.675-1.085c-.474-.474-.822-1.044-1.085-1.675-.168-.421-.362-1.044-.428-2.224-.07-1.266-.07-1.646-.07-4.85s0-3.584.07-4.85c.066-1.18.26-1.803.428-2.224a4.69 4.69 0 011.085-1.675c.474-.474 1.044-.822 1.675-1.085.421-.168 1.044-.362 2.224-.428C8.416 2.163 8.796 2.163 12 2.163zm0-2.163C8.745 0 8.333 0 7.052.07c-1.3.07-2.233.31-3.025.652-.804.349-1.491.81-2.178 1.497A5.637 5.637 0 00.642 4.8C.292 5.593.052 6.525.07 7.826.104 8.889.104 9.305.104 12s0 3.111.07 4.174c.02 1.301.222 2.233.572 3.026.36.793.822 1.49 1.509 2.177a5.637 5.637 0 001.497 1.509c.793.36 1.725.552 3.025.572C8.333 24 8.745 24 12 24s3.667 0 4.948-.07c1.3-.07 2.233-.31 3.025-.652.804-.349 1.491-.81 2.178-1.497a5.637 5.637 0 001.509-1.497c.36-.793.552-1.725.572-3.025.07-1.063.07-1.479.07-4.174s0-3.111-.07-4.174c-.02-1.3-.222-2.233-.572-3.025-.36-.793-.822-1.491-1.509-2.178a5.637 5.637 0 00-1.497-1.497c-.793-.36-1.725-.552-3.025-.572C15.667 0 15.255 0 12 0z"
                    />
                    <path
                      fill="url(#instagram-gradient)"
                      d="M12 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a4 4 0 110-8 4 4 0 010 8zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 hover:text-blue-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22.78 0H1.22C.54 0 0 .54 0 1.22v20.56C0 23.46.54 24 1.22 24h11.34V14.71h-3.07v-3.7h3.07V8.4c0-3.05 1.86-4.73 4.58-4.73 1.30 0 2.42.09 2.75.13v3.18h-1.89c-1.49 0-1.78.71-1.78 1.75v2.29h3.56l-.47 3.7h-3.09V24h6.04c.68 0 1.22-.54 1.22-1.22V1.22C24 .54 23.46 0 22.78 0z" />
                  </svg>
                </a>
              </div>
              <button
                className="px-8 py-4 rounded-full transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:text-white hover:border-limegreen border-2 border-transparent font-bold"
                style={{ backgroundColor: "limegreen", color: "#ffffff" }} // Lime green background and white text
              >
                Follow +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function ProfileCard({ reviewerId }) {
//   const reviewer = reviewers.find((r) => r.id === reviewerId);

//   if (!reviewer) {
//     return <p>No reviewer data available</p>;
//   }

//   const { image, name, title, email, location, rating, destinations, bio } =
//     reviewer;

//   return (
//     <div>
//       <img src={image8} alt={1} />
//       <h1>{name}</h1>
//       <h2>{title}</h2>
//       <p>{email}</p>
//       <p>{location}</p>
//       <p>Rating: {rating}</p>
//       <p>{bio}</p>
//       <ul>
//         {Object.entries(destinations).map(([key, destination], index) => (
//           <li key={index}>
//             <h3>{key}</h3>
//             <p>{destination.review}</p>
//             <p>Rating: {destination.rating}</p>
//             <p>Time of Review: {destination.timeOfReview}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
