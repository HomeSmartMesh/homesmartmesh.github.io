This webapp from the [web/home-next](./web/home-next/) directory is based on [next.js](https://nextjs.org/), [Material UI](https://mui.com/) and [MQTT.js](https://github.com/mqttjs/MQTT.js#readme).
* The Heat panel controls the temperature with `Eurotronics` Zigbee valves running on [Zigbee2mqtt](https://zigbee2mqtt.io/). The room humidity is also shown from [nRF custom sensors](https://github.com/nRFMesh/nRF52_Mesh)
* The sound panel controls sonos system to switch it on and off through `Tuya` smart sockets, and it controls the volume through [node-sonos-http-api](https://github.com/jishi/node-sonos-http-api). The sockets can also be controlled with an `Aqara` button.
* The power panel controls `Tuya` smart sockets and displays the power consumption. On and Off images are updated depending on the state. The PC socket is switched on with an `Aqara` button and switched off with an auto power off [pc_control](./js/pc_control/) script.
* The Ambient Panel is a Grafana dashboard that shows the last day charts of humidity, temperature and light from the [nRF custom sensors](https://github.com/nRFMesh/nRF52_Mesh)
* The Energy panels is also a Grafana dashboard that shows cumulated energy for the last 24h or last 30d, combining energy measures from `Shelly plug s` wifi and `Tuya` zigbee sockets.

![webapp](/images/home-next.gif)

