import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mateo.png"
          alt="An image of me"
          width={300}
          height={500}
        />
      </div>
      <h1>Hi, I'm Mateo</h1>
      <p>
        I blog about web development - mainly platforms using technologies like
        React or PHP/Laravel
      </p>
    </section>
  );
};

export default Hero;
