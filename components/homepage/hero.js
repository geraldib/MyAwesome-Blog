import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpeg"
          alt="An image of me"
          width={300}
          height={500}
        />
      </div>
      <h1>Hi, I'm Gerald</h1>
      <p>
        I blog about web development - mainly platforms using technologies like
        React or PHP/Laravel
      </p>
    </section>
  );
};

export default Hero;
