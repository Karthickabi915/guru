import React, { useEffect, useRef } from "react";
import "./HealthBenefitsData.css";
import { useNavigate } from "react-router-dom";

const HealthBenefitsData = () => {
  const benefitItemsRef = useRef([]);
  const nutritionCardsRef = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Animate benefit items on scroll
    benefitItemsRef.current.forEach((item, index) => {
      if (item) {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
      }
    });

    nutritionCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const moringaBenefits = [
    {
      icon: "💪",
      title: "Rich in Antioxidants",
      description:
        "Moringa contains quercetin, chlorogenic acid, and beta-carotene that fight free radicals and support cellular health",
    },
    {
      icon: "🧠",
      title: "Boosts Energy & Mental Clarity",
      description:
        "Natural vitamins B1, B2, and B3 support brain function and provide sustained energy without sugar crashes",
    },
    {
      icon: "🛡️",
      title: "Immune System Support",
      description:
        "High in Vitamin C (7x more than oranges) and iron to strengthen your natural defenses",
    },
    {
      icon: "❤️",
      title: "Heart Health",
      description:
        "Contains compounds that may help maintain healthy cholesterol levels and support cardiovascular wellness",
    },
    {
      icon: "🩺",
      title: "Blood Sugar Balance",
      description:
        "Natural compounds help regulate blood glucose levels, making it a diabetic-friendly treat",
    },
  ];

  const karuppuKavuniBenefits = [
    {
      icon: "🔬",
      title: "Anthocyanin Powerhouse",
      description:
        "Black rice contains the highest levels of anthocyanins, powerful antioxidants that give blueberries their superfood status",
    },
    {
      icon: "🏃",
      title: "Sustained Energy Release",
      description:
        "Complex carbohydrates provide steady energy levels throughout the day without blood sugar spikes",
    },
    {
      icon: "🌾",
      title: "Rich in Fiber",
      description:
        "Supports digestive health, promotes satiety, and helps maintain healthy weight management",
    },
    {
      icon: "💎",
      title: "Essential Minerals",
      description:
        "High in iron, magnesium, and zinc for bone health, muscle function, and metabolic support",
    },
    {
      icon: "🧬",
      title: "Anti-inflammatory Properties",
      description:
        "Natural compounds help reduce inflammation and support overall wellness and recovery",
    },
  ];

  const nutritionHighlights = [
    {
      icon: "🌱",
      title: "100% Natural",
      description:
        "No artificial preservatives, colors, or flavors. Only pure, traditional ingredients",
    },
    {
      icon: "🍯",
      title: "Natural Sweeteners",
      description:
        "Sweetened with jaggery and natural sugars, providing minerals and avoiding refined sugar",
    },
    {
      icon: "🥄",
      title: "Portion Controlled",
      description:
        "Perfectly sized portions for guilt-free snacking and optimal nutrient absorption",
    },
    {
      icon: "⏰",
      title: "Long-lasting Energy",
      description:
        "Balanced nutrition provides sustained energy without energy crashes",
    },
  ];

  const BenefitItem = ({ benefit, index }) => (
    <li
      className="benefit-item"
      ref={(el) => (benefitItemsRef.current[index] = el)}
      style={{
        width:"100%"
      }}
    >
      <div className="benefit-icon">{benefit.icon}</div>
      <div className="benefit-text">
        <div className="benefit-title">{benefit.title}</div>
        <div className="benefit-description">{benefit.description}</div>
      </div>
    </li>
  );

  const ProductCard = ({ title, subtitle, benefits, emoji }) => (
    <div className="products-card">
      <h2 className="products-title">
        {emoji} {title}
      </h2>
      <p className="products-subtitle">{subtitle}</p>
      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} benefit={benefit} index={index} />
        ))}
      </ul>
    </div>
  );

  const NutritionCard = ({ highlight, index }) => (
    <div
      className="nutrition-card"
      ref={(el) => (nutritionCardsRef.current[index] = el)}
    >
      <div className="nutrition-icon">{highlight.icon}</div>
      <h3 className="nutrition-title">{highlight.title}</h3>
      <p className="nutrition-description">{highlight.description}</p>
    </div>
  );

  return (
    <div className="health-benefits-page">
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <h2 className="testimonial-title">Health Benefits</h2>
        <div className="heading-divider"></div>
      </div>

      <section className="products-section">
        <div className="container con">
          <div className="products-grid">
            <ProductCard
              title="Moringa Mittai"
              subtitle="The Miracle Tree's Gift to Wellness"
              emoji="🌿"
              benefits={moringaBenefits}
            />
            <ProductCard
              title="Karuppu Kavuni Mittai"
              subtitle="Ancient Black Rice Superfood"
              emoji="⚫"
              benefits={karuppuKavuniBenefits}
            />
          </div>
        </div>
      </section>

      <section className="nutrition-section">
        <div className="container con">
          <h2 className="nutrition-heading">Nutritional Highlights</h2>
          <p className="nutrition-subheading">
            Both our traditional mittais are crafted to provide maximum
            nutritional benefit while maintaining authentic taste
          </p>

          <div className="nutrition-grid">
            {nutritionHighlights.map((highlight, index) => (
              <NutritionCard key={index} highlight={highlight} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container con">
          <div className="cta-content">
            <h2>Experience Wellness Through Tradition</h2>
            <p>
              Join thousands who have made the healthy switch to our premium
              traditional snacks. Taste the difference that quality ingredients
              and traditional wisdom can make in your daily wellness journey.
            </p>
            <button
              className="shop-btn"
              onClick={() => {
                navigate("/contact");
              }}
            >
              SHOP NOW <span>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthBenefitsData;
