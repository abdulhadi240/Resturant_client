import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export const Usps = () => {
  return (
    <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
      <FadeIn>
        <p>Our services are perfect for events, parties, corporate gatherings, weddings, and more.
        </p>
      </FadeIn>
      <FadeIn>
        <p>
        Enjoy our diverse menu featuring cuisines from around the world, crafted by our <span className="text-red-500">expert chefs</span>.

        </p>
      </FadeIn>
      <FadeIn>
        <p>Our catering services come with a commitment to <span className="text-red-500">impeccable</span> service and attention to detail.</p>
      </FadeIn>
      <FadeIn>
        <p>
        Experience seamless <span className="text-red-500">ordering and delivery</span>, tailored to your convenience.</p>
      </FadeIn>
    </Container>
  );
};
