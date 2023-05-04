import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>
        Welcome to <br />
        <span>Food Blog</span>
      </h1>
      <p>
        Expect new recipes weekly, with a mix of savory and sweet including{" "}
        <em>desserts, breakfasts, entrées, sides, snacks,</em> and more{" "}
        <Link to="/all-recipes">(find all recipes here).</Link> When you make
        one of our recipes we want you to say, “How was it that simple but still
        tastes that good?!”
      </p>
    </div>
  );
};
export default Hero;
