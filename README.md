# Pixel API

NodeJS API that access Pixel Canvas API, sending the pixels to draw.

Funcionalities:

- It can draw both Y and X axes, you just need to configure.
- Acess via request the Pixel Canvas Api URL and send the parameters.
- If the API is not ready to receive because the time, await and then send agan.

Future Improvementes:

- Tor integration, to send each request from a different IP.
- Error treatment improvement, today is ugly.

Important: Inspect Pixel Canvas to see in the network tab the fingerprint you will use.
