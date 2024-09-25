import Stripe from "stripe";

const stripe = new Stripe("your-stripe-secret-key");

export async function makeRequest() {
  console.log("Making requests...");
  try {
    // Request to Stripe API
    const stripeResponse = await stripe.customers.create({
      description: "Customer for example@example.com",
      email: "example@example.com",
    });

    console.log("Stripe Response:", stripeResponse);
  } catch (error) {
    console.error("Error making requests:", error);
  }
}
