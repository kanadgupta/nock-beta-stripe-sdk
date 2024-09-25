import { makeRequest } from "./request.js";

import { BatchInterceptor } from "@mswjs/interceptors";
import nodeInterceptors from "@mswjs/interceptors/presets/node";

const interceptor = new BatchInterceptor({
  name: "my-interceptor",
  interceptors: nodeInterceptors,
});

// Intercept Stripe API request
interceptor.apply();

await makeRequest();

interceptor.on("request", ({ controller, request }) => {
  console.log(request.method, request.url);
  controller.respondWith(
    new Response(
      JSON.stringify({
        id: "cus_test",
        description: "Customer for example@example.com",
        email: "example@example.com",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  );
});
