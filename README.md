<img width="1012" alt="GitHub - Artillery README header" src="https://user-images.githubusercontent.com/1490/145245341-340bde06-c6f8-41d9-98e7-8c1a227826f3.png">


<h2 align="center">
  keep <code>production</code> fast & reliable,<br />
  customers happy,</br>
  and pagers silent
</h2>

<p align="center">
  Got a question? Want to share how you use Artillery? <a href="https://github.com/artilleryio/artillery/discussions">Artillery Discussion Board</a> &nbsp;💬
</p>

<p align="center">
  Enjoying using Artillery? Give us a star for good karma 🌟
  (We <a href="#artillery-forest">plant a tree</a> for every Github star we get)
</p>


# Use Cases

- Prepare for traffic surges - run load tests to help prepare your API or service for upcoming peak traffic
- Run load tests in CI/CD to catch and prevent performance regressions before they cause issues for users
- Profile and debug performance issues such as memory leaks, high tail latency caused by GC pauses or high CPU usage, or misconfigured resource pools
- Run smoke tests continuously against production to catch issues (also known as production scripted testing or synthetic monitoring)
- Designed for modern web APIs, headless CMS and e-commerce systems, IoT backends, real-time services, and microservice architectures
- Test internal microservices and components as well as external endpoints
- Scale out and run your tests from your own AWS account with ease

# Features

- **Test ANY stack**:  Load test HTTP, WebSocket, Socket.io, Kinesis, HLS, and more
- **Scenarios**: Support for complex *scenarios* to test multi-step interactions in your API or web app (great for ecommerce, transactional APIs, game servers etc).
- **Load testing & smoke testing**: reuse the same scenario definitions to run performance tests or functional tests on your API or backend.
- **Detailed performance metrics**: get detailed performance metrics (response time, TTFB, transactions per second, concurrency, throughput). Track [**custom metrics**](https://artillery.io/docs/guides/guides/extending.html#Tracking-custom-metrics) with high precision (histograms, counters and rates)
- **Scriptable**: write custom logic in JS, using any of the thousands of useful `npm` modules.
- **Batteries-included**: out-of-the-box integrations with external monitoring systems (Datadog, InfluxDB, Honeygcomb, Lightstep [and more](https://artillery.io/docs/guides/plugins/plugin-publish-metrics.html)), [per-URL metrics](https://artillery.io/docs/guides/plugins/plugin-metrics-by-endpoint.html), file uploads, SSL auth, [fuzz testing](https://artillery.io/docs/guides/plugins/plugin-fuzzer.html), and more!
- **Extensible**: write custom reporters, custom plugins, and custom engines, or customize VU scenarios and behavior
- **Cloud-native**: built for the cloud from day one - run [distributed load tests](https://artillery.io/pro/) from your own AWS account with ease
- **and more!** HTML reports, nice CLI, parameterization with CSV files, CICD integrations

---

- **Docs**: [https://artillery.io/docs/](https://artillery.io/docs/)
- **Q&A and discussions**: [https://github.com/artilleryio/artillery/discussions](https://github.com/artilleryio/artillery/discussions)
- **Website**: [https://artillery.io](https://artillery.io)
- **Twitter**: [@artilleryio](https://twitter.com/artilleryio)
- **Source**: [https://github.com/artilleryio/artillery](https://github.com/artilleryio/artillery) - `master` build status: [![CircleCI](https://circleci.com/gh/artilleryio/artillery.svg?style=svg)](https://circleci.com/gh/artilleryio/artillery)
- **Issues**: [https://github.com/artilleryio/artillery/issues](https://github.com/artilleryio/artillery/issues)

---

# Getting Started With Artillery

👉&nbsp;&nbsp;[Artillery Getting Started Guide](https://artillery.io/docs/guides/getting-started/installing-artillery.html)

# Using Artillery?

Add your team to the [Artillery users list on the wiki](https://github.com/shoreditch-ops/artillery/wiki/Companies-using-Artillery).

# Artillery Forest

We have planted [close to 5000 trees](https://ecologi.com/artilleryio) with the help of Artillery community. That's a small forest! We're aiming to grow that to a *large* forest - we're thinking 100,000 trees would be neat.

Want to help us grow the forest?
- Just star this repo! We plant a tree for every star we get on Github. 🌟 ➡️ 🌳
- Plant some extra trees through Ecologi → https://ecologi.com/artilleryio (use your name or the name of your company for credit)


# License

**Artillery** is open-source software distributed under the terms of the [MPLv2](https://www.mozilla.org/en-US/MPL/2.0/) license.
