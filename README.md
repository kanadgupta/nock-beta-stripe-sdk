# issue with `stripe` and `nock@beta`

this repository demostrates an issue (https://github.com/nock/nock/issues/2785) where API requests from [the stripe SDK](https://github.com/stripe/stripe-node) aren't being intercepted by [`nock@beta`](https://github.com/nock/nock/tree/beta), nor its underlying interceptor library ([`@mswjs/interceptors`](https://github.com/mswjs/interceptors)).

## reproduction steps

with node.js installed (this was tested on v20.16.0), run the following commands:

```sh
npm install
node nock.js # nock@beta
node msw.js # @mswjs/interceptors
```

note how the `stripe.customers.create` function in `request.js` hangs.

if you install [`nock@14.0.0-beta.7`](https://github.com/nock/nock/tree/v14.0.0-beta.7) or [`nock@latest`](https://github.com/nock/nock/tree/v13.5.5), the stripe SDK will successfully make the request:

```sh
npm install nock@14.0.0-beta.7
node nock.js
```
