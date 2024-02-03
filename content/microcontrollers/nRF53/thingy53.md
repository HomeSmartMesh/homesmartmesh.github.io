---
board: thingy53
frameworks:
    - zephyr
    - raspi
protocol:
    - thread
    - matter
    - bluetooth
---
# Thingy53 Overview

:button[]{link="https://github.com/HomeSmartMesh/sdk-hsm-thingy53" label="Github Repo"}

![USB Attachments](./thingy53-usb-attachments.webp)

## Features

* SoC nRF5340
    * [nRF5340 Product Page](https://www.nordicsemi.com/Products/nRF5340)
    * [nRF5340 Product Specification](https://infocenter.nordicsemi.com/pdf/nRF5340_PS_v1.3.pdf)
    * 128/64 MHz Arm Cortex-M33 application processor with 1 MB Flash & 512 KB RAM
    * 64 MHz Arm Cortex-M33 network processor with 256 KB Flash & 64 KB RAM
    * Thread (Matter), Zigbee, ANT, NFC, Bluetooth (LE - Mesh - Arrival Departure Direction)
    * USB
    * Trusted Firmware M, CryptoCell-312, key management unit (KMU)

* Sensors
    * RGB Led
    * Color sensor BH1749NUC
        * [BH1749NUC Datasheet](https://fscdn.rohm.com/en/products/databook/datasheet/ic/sensor/light/bh1749nuc-e.pdf)
        * Measures Red, Green, Blue and IR
        * Illuminance Detection Range 80 klx (0.0125 lux/count)
    * BME688 Digital nose : low power gas, pressure, temperature & humidity sensor with AI
        * [BME688 Product page](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme688/)
        * [BME688 Datasheet](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bme688-ds000.pdf)

    * Accelerometers
        * ADXL362 Low Power accelerometer
        * BMI270 Accelerometer and gyroscope
        * Disconnect switch for ADXL362 and BMI270
    * Magentometer BMM150

    * VM3011 Microphone
    * Buzzer Piezo_4kHz


* RF Front End Module nRF21540
    * [nRF21540 Product Page](https://www.nordicsemi.com/products/nrf21540)
    * [nRF21540 Product Specification](https://infocenter.nordicsemi.com/pdf/nRF21540_PS_v1.2.pdf)
    * up to +21 dBm with TX gain control
    * 13 dB RX gain with 2.7 dB noise figure
    * 6.3 up to x10 raneg extension

* Power Management Integrated Circuit
    * [nPM1100 Product Page](https://www.nordicsemi.com/products/npm1100)
    * [nPM1100 Product Specification](https://infocenter.nordicsemi.com/pdf/nPM1100_PS_v1.3.pdf)
    * USB input
    * 400 mA battery charger
    * 150 mA regulated output
    * Overvoltage protection
    * charge and error status

* Interfaces and peripherals
    * 2 Buttons, one user, second is internal
    * USB for Firmware update, application Data and chargin
    * External QSPI Flash MX25R6435F 64 Mbit
    * NFC Antenna
    * 10 pin SWD interface
    * Expansion for trace debug and current measurement


# Development with Zephyr
* Board name `thingy53_nrf5340`
* Board reference `PCA20053`
* build targets
    * `thingy53_nrf5340_cpuapp`
    * `thingy53_nrf5340_cpuapp_ns`
    * `thingy53_nrf5340_cpunet`

Zephyr Board documentation

* https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/boards/arm/thingy53_nrf5340/doc/index.html#
* https://docs.zephyrproject.org/latest/boards/arm/thingy53_nrf5340/doc/index.html

# nRF Connect SDK
## Working with nRF53 Series
* https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/nrf53.html

## Applications
* [Machine Learning](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/applications/machine_learning/README.html)
* [Matter - Weather Station](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/applications/matter_weather_station/README.html)
* [Zigbee - Weather Station](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/applications/zigbee_weather_station/README.html)

## nrf sdk samples
* [Bluetooth - Peripheral LBS](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/bluetooth/peripheral_lbs/README.html)
* [Bluetooth - Mesh Light](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/bluetooth/mesh/light/README.html)
* [Bluetooth - Mesh Light Fixture](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/bluetooth/mesh/light_ctrl/README.html)
* [Bluetooth - Lesh Light Switch](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/bluetooth/mesh/light_switch/README.html)
* [Bluetooth - Mesh Sensor](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/bluetooth/mesh/sensor_server/README.html)
* [Bluetooth - Peripheral UART](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/bluetooth/peripheral_uart/README.html)
* [nrf 5340](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/nrf5340.html)
* [Thread](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/thread.html)
* [Edge Impulse](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/samples/edge.html)

## nrf zephyr samples
* [Accelerometer Polling](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/samples/sensor/accel_polling/README.html)
* [Magnetometer polling](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/samples/sensor/magn_polling/README.html)


# Examples build

```bash
cd nrf/v2.3.0/zephyr/samples/sensor/bme680
>west build -b thingy53_nrf5340_cpuapp

```
* nRF Desktop Programmer
    * keep internal sw2 while power on with sw1 see [Updating through USB](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/working_with_nrf/nrf53/thingy53_gs.html#updating-through-usb)
    * on success a new port is detected
    * use `dfu_application.zip` see [MCUboot output build files](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/app_dev/build_and_config_system/index.html#mcuboot-output-build-files)
* restore example application firmwa with the same procedure with binaries available on the [Nordic Thingy53 downloads](https://www.nordicsemi.com/Products/Development-hardware/Nordic-Thingy-53/Downloads#infotabs)

# Current measure
:image[]{src="./current_measure.webp" height="353" alt="USB Attachments"}
