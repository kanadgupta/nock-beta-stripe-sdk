# issue with `nock@beta` and `stripe`

this repository demostrates an issue (https://github.com/nock/nock/issues/2785) with [`nock@14.0.0-beta.15`](https://github.com/nock/nock/tree/v14.0.0-beta.15) where API requests from [the stripe SDK](https://github.com/stripe/stripe-node) aren't being intercepted.

## reproduction steps

with node.js installed (this was tested on v20.16.0), run the following commands:

```sh
npm install
node index.js
```

note how the `stripe.customers.create` function hangs.

if you install [`nock@14.0.0-beta.7`](https://github.com/nock/nock/tree/v14.0.0-beta.7) or [`nock@latest`](https://github.com/nock/nock/tree/v13.5.5), the stripe SDK will successfully make the request:

```sh
npm install nock@14.0.0-beta.7
node index.js
```
