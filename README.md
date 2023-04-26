# WS-system

## Running the Server
To run the WebSocket server, you'll first need to install the dependencies by running the following command in the root directory of the project:

```bash
npm install
```
This will install the `ws` module that's required for the WebSocket server to run.

Once the dependencies are installed, you can start the server by running the following command in the root directory of the project:

```bash
npm run server
```

This will start the WebSocket server on port 8080. You can then connect to the server using your WebSocket clients.

## Running the Python Client
To run the Python client, you'll first need to install the dependencies by running the following command in the root directory of the project:

```bash
pip install -r python/requirements.txt
```

This will install the `websocket-client` module that's required for the Python client to connect to the WebSocket server.

Once the dependencies are installed, you can start the Python client by running the following command in the root directory of the project:

```bash
python python/client.py
```
This will start the Python client, which will wait for user input and send the input to the WebSocket server.

## Running the JavaScript Client
To run the JavaScript client, simply open the `public/index.html` file in your web browser. This will load the JavaScript client and connect to the WebSocket server.
