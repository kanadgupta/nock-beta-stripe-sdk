import nock from "nock";

// Intercept Stripe API request
const stripeMock = nock("https://api.stripe.com").post("/v1/customers").reply(200, {
  id: "cus_test",
  description: "Customer for example@example.com",
  email: "example@example.com",
});

const { makeRequest } = await import("./request.js");

await makeRequest();

stripeMock.done();
