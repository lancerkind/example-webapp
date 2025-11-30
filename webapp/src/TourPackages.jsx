import React from "react";
import "./TourPackages.css";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  User,
  UserDropdown,
  UserProfile,
} from "@asgardeo/react";

export default function TourPackages() {
  const packages = [
    {
      title: "Round-trip Flights to Sri Lanka",
      description:
        "Affordable return flights from major hubs with flexible dates.",
      image: "flight",
    },
    {
      title: "Car Rental with Driver",
      description:
        "Private car + experienced local driver for full tour flexibility.",
      image: "car",
    },
    {
      title: "3–5 Star Hotel Booking",
      description:
        "Choose from luxury beach resorts, city hotels, and hill country stays.",
      image: "hotel",
    },
    {
      title: "Elephant Safari Experience",
      description:
        "Guided tour in Minneriya / Udawalawe to see herds of wild elephants.",
      image: "elephant",
    },
    {
      title: "River / Lake Boat Ride",
      description:
        "Relaxing Madu River boat ride through mangroves + cinnamon island.",
      image: "boat",
    },
    {
      title: "Bike & Scooter Rental",
      description:
        "Daily rentals perfect for exploring beach towns and city areas.",
      image: "bike",
    },
  ];

  return (
    <div className="packages-page">
      <div className="user-bar">
        <div className="user-info">
          <div className="avatar-circle">
            <SignedIn>
              <UserDropdown />
            </SignedIn>
          </div>
          <div className="user-name"></div>
        </div>
      </div>
      <header className="packages-header">
        <h1>Explore Sri Lanka Tour Packages</h1>
        <p>
          Choose your travel experience from curated, all-inclusive packages.
        </p>
      </header>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.title} className="package-card">
            <div className="package-image">
              {pkg.image === "flight" && (
                <img
                  src="https://cdn.airlines-inform.ru/upload/iblock/a75/SriLankan-Airlines.jpg"
                  alt="Flight"
                />
              )}
              {pkg.image === "car" && (
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                  alt="Car rental"
                />
              )}
              {pkg.image === "hotel" && (
                <img
                  src="https://travelandkeepfit.com/wp-content/uploads/2024/05/DJI_0456-1024x768.jpg"
                  alt="Hotel"
                />
              )}
              {pkg.image === "elephant" && (
                <img
                  src="https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2018/07/sri-lanka-elephant-gathering-16.jpg"
                  alt="Elephant safari"
                />
              )}
              {pkg.image === "boat" && (
                <img
                  src="https://srilankacaranddriverhire.com/wp-content/uploads/2023/03/Gazebo-Tours-Wonder-of-Sri-Lanka.jpg"
                  alt="Boat ride"
                />
              )}
              {pkg.image === "bike" && (
                <img
                  src="https://www.rentbikeunawatuna.com/wp-content/uploads/2021/12/bike-rent-gallery-4.jpg"
                  alt="Bike rental"
                />
              )}
            </div>

            <div className="package-info">
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <button className="book-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
