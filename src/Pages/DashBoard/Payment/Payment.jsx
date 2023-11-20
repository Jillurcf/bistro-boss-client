import { loadStripe } from "@stripe/stripe-js";
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";
import { Elements } from "@stripe/react-stripe-js";

// TODO add publishable key
const stripePromise = loadStripe('')
const Payment = () => {
    return (
        <div>
            <Sectiontitle heading="Payment" subHeading="Please pay to eat"></Sectiontitle>
            <div>
               <Elements stripe={stripePromise}>

               </Elements>
            </div>
        </div>
    );
};

export default Payment;