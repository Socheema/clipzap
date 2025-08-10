import { useEffect } from "react";
import FeaturesComponent from "../Components/features";
import NavbarComponent from "../Components/header";
import FooterComponent from "../Components/footer";

function Features() {
  useEffect(() => {
    document.title = "ClipZap | Features";
    window.scrollTo(0, 0);
  });

  return (
    <div className="relative h-screen">
      <div
        className="absolute w-[70vw] h-full left-[15vw] top-[-225px] bg-blue-500 pointer-events-none"
        style={{
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <NavbarComponent />

        <FeaturesComponent />

      <FooterComponent />
    </div>
  );
}

export default Features;
