import FAQs from "../../components/FAQs"
import Features from "../../components/Features"
import PaymentPlan from "../../components/PaymentPlan"
import Slider from "../../components/Slider"

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Features />
      <PaymentPlan />
      <FAQs />
    </div>
  )
}

export default HomePage
