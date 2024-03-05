import React from "react";
import "../Accueil/Accueil.css";
import chat from "../../assets/img/icon-chat.png";
import security from "../../assets/img/icon-security.png";
import money from "../../assets/img/icon-money.png";
import Template from "../../components/Templates/PageTemplate";
import Header from "../../components/Organisms/Header/Header";

function Accueil() {
  return (
    <Template>
      <Header name="Login" link="/Login" />
      <main class="main bg-dark">
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">No withdrawal limit.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <div class="feature-item">
            <img src={chat} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div class="feature-item">
            <img src={money} alt="Money Icon" class="feature-icon" />
            <h3 class="feature-item-title">More savings means higher</h3>
            <p>The more you save with us, the higher your will be!</p>
          </div>
          <div class="feature-item">
            <img src={security} alt="Security Icon" class="feature-icon" />
            <h3 class="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
    </Template>
  );
}

export default Accueil;
