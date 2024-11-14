import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from "../assets/home.jpeg"
export default function Home() {
  return (
    <main className="bg-blue-50">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-5xl font-bold">
            Welcome to ContactHub
          </p>
          <p className="px-56 text-center">
            Manage your contacts with ease
          </p>
          <div className="flex gap-3 justify-start">
            <Link to="/get-all-contacts">
              <button className="bg-blue-300 shadow-lg p-3 rounded-lg font-bold py-1">
                View Contacts
              </button>
            </Link>
            <Link to="/add-contact">
              <button className="bg-blue-300 shadow-lg p-3 rounded-lg font-bold py-1">
                Add Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <img
            className="mix-blend-darken"
            src={homeImage}
            alt=""
            style={{ width: '80%', height: '80%' }}
          />
        </div>
      </section>
    </main>
  );
}
