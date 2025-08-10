import FeaturesComponent from "../Components/features"
import FooterComponent from "../Components/footer"
import NavbarComponent from "../Components/header"
import HeroComponent from "../Components/heroSection"




function Index() {
  return (
    <div className="min-h-screen relative">
       <div
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-blue-500 pointer-events-none"
        style={{
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <NavbarComponent />
      <HeroComponent />
      <FeaturesComponent />
      <FooterComponent />

    </div>
  )
}

export default Index
