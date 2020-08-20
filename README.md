This project demonstrates a memory leak on `axios-hooks@2.1`.

1. Run `yarn install` to install dependencies.
1. Run `yarn build` to build the nextjs project
1. Run `yarn analyze` to start up a server debugger.
1. Open the Chrome inspector at chrome://inspect/#devices and click "Open dedicated DevTools for Node"
1. Take a heap snapshot as a baseline for just the server.
1. Load http://localhost:3000/ in your browser to load the page once.
1. Take another heap snapshot as a baseline for a single render.
1. Run `yarn artillery` to simulate a server load for about half a minute.
1. Take a heap snapshot every 10s or so and one after the artillery command is finished, and see the memory leak.

![Heap Inspector Screenshot](/screenshot.png)
