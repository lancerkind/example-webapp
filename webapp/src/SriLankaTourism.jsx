import React from "react";
import "./SriLankaTourism.css"; // We'll add styles next
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@asgardeo/react";

export default function SriLankaTourism() {
  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="site-title">Discover Sri Lanka</h1>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </header>

      {/* Body Section */}
      <main className="main-content">
        <div className="content-wrapper">
          <section className="intro-section">
            <h2>Welcome to Paradise</h2>
            <p>
              Sri Lanka, the pearl of the Indian Ocean, offers an unforgettable
              journey through ancient wonders, pristine beaches, and culinary
              delights that will captivate your senses.
            </p>
          </section>

          <section className="attraction sigiriya-bg">
            <h3>Sigiriya - The Lion Rock</h3>
            <p>
              Marvel at the ancient rock fortress of Sigiriya, a UNESCO World
              Heritage site rising 200 meters above the surrounding plains. This
              5th-century architectural masterpiece features stunning frescoes,
              water gardens, and breathtaking panoramic views from the summit.
            </p>
          </section>

          <section className="attraction beaches-bg">
            <h3>Pristine Beaches</h3>
            <p>
              From the golden shores of Unawatuna to the surfing paradise of
              Arugam Bay, Sri Lanka's coastline stretches over 1,300 kilometers.
              Relax on palm-fringed beaches, dive into crystal-clear waters, or
              watch majestic whales and playful dolphins in their natural
              habitat.
            </p>
          </section>

          <section className="attraction seafood-bg">
            <h3>Exquisite Seafood</h3>
            <p>
              Indulge in the freshest catch prepared with aromatic spices and
              coconut. From spicy crab curry to grilled prawns and traditional
              fish ambul thiyal, Sri Lankan seafood cuisine is a gastronomic
              adventure that reflects centuries of coastal culinary tradition.
            </p>
          </section>

          <section className="attraction">
            <h3>And Much More...</h3>
            <p>
              Explore lush tea plantations in the hill country, encounter
              elephants in national parks, wander through ancient temples,
              experience vibrant cultural festivals, and immerse yourself in the
              warm hospitality of the Sri Lankan people.
            </p>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Your trusted partner in exploring the wonders of Sri Lanka since
              2020.
            </p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@discoversrilanka.com</p>
            <p>Phone: +94 11 234 5678</p>
            <p>Address: Colombo, Sri Lanka</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Stay connected for travel tips and updates</p>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2024 Discover Sri Lanka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
