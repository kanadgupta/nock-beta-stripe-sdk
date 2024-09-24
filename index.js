import nock from "nock";
import Stripe from "stripe";

const stripe = new Stripe("your-stripe-secret-key");

async function makeRequest() {
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

// Intercept Stripe API request
const stripeMock = nock("https://api.stripe.com").post("/v1/customers").reply(200, {
  id: "cus_test",
  description: "Customer for example@example.com",
  email: "example@example.com",
});

await makeRequest();

stripeMock.done();
