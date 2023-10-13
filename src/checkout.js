import { loadStripe } from "@stripe/stripe-js";
import config from "./config";

export async function checkout({lineItems}) {
    let stripePromise = null
    let getStripe = () => {
        if(!stripePromise){
            stripePromise = loadStripe(config.development.STRIPEKEY)
        }
        return stripePromise
    }
        const stripe = await getStripe()
        await stripe.redirectToCheckout({
            mode:"payment",
            lineItems,
            successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl:window.location.origin
        })
    
}