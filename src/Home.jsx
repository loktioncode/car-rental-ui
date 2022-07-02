import React, { useContext } from "react";
import CarContext from "./car-context-api/CarContext";
// import { CarCard } from "./components";
import { DisplayCars } from "./components";
import { CarFilter } from "./components";
// import logo from "./logo.svg";
// import { Navigate } from "react-router-dom";
import { updateResponseKeyString } from "./components/utils.js";

function Home() {
  const [cars] = useContext(CarContext);

  if (!cars) {
    alert("no cars to rent !!");
    // return <Navigate replace to="/login" />;
  }


  var pickUpTimeData = cars[0].VehAvailRSCore.VehRentalCore;

  const newPickUpTimeData = updateResponseKeyString(pickUpTimeData);
  console.log(newPickUpTimeData);

  return (
    <>
      <div className="min-h-screen dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="p-6 space-y-8">
          <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-Gray-900">
            <a
              rel="noopener noreferrer"
              href="https://mam.com/business"
              aria-label="Homepage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-6 h-6 dark:text-violet-400"
              >
                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
              </svg>
            </a>
            <div className="items-center hidden space-x-8 lg:flex">
              <div className="space-x-4">
                <a rel="noopener noreferrer" href="https://mam.com/business">
                  Link
                </a>
                <a rel="noopener noreferrer" href="https://mam.com/business">
                  Link
                </a>
                <a rel="noopener noreferrer" href="https://mam.com/business">
                  Link
                </a>
              </div>
              <button className="px-4 py-2 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                Sign up
              </button>
            </div>
            <button className="flex items-center justify-center p-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-coolGray-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </header>
          <main>
            <div className="container mx-auto space-y-16">
              <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-3 dark:bg-Gray-900">
                  <span className="block mb-2 dark:text-violet-400">
                    Cheapest Ride!
                  </span>
                  <h1 className="text-5xl font-extrabold dark:text-coolGray-50">
                    Build it with Mamba
                  </h1>
                  <p className="my-8">
                    <span className="font-medium dark:text-coolGray-50">
                      Modular and versatile.
                    </span>
                    The ultimate design toolkit for savvy technology startups.
                  </p>
                  {/* <CarCard /> */}
                  {/* <button type="button" className="px-2 py-3 border rounded dark:border-gray-100 dark:text-gray-100">View Car</button> */}
                </div>
                <img
                  src="https://source.unsplash.com/random/480x360"
                  alt=""
                  className="object-cover w-70 h-70 rounded-md xl:col-span-2 dark:bg-coolGray-500"
                ></img>
              </section>
              <section>
                <CarFilter />
              </section>
              <DisplayCars />
            </div>
          </main>
          <footer>
            <div className="container flex justify-between p-6 mx-auto lg:p-8 dark:bg-Gray-900">
              <a
                rel="noopener noreferrer"
                href="https://mam.com/business"
                className="font-bold"
              >
                Car Rental UI Test
              </a>
              <div className="flex space-x-2">
                <a
                  aria-label="Github"
                  rel="noopener noreferrer"
                  href="https://github.com/loktioncode"
                  className="flex items-center justify-center dark:text-coolGray-400"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
