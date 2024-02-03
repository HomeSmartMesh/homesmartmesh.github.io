---
title: Simple Mesh SensorTag
order: 3
description: A Sensor tag to monitor Light brightness with MAX44009, Temperature, Humidity and Pressure with BME280. The SoC is an nRF52832 that communicates through a Simple Mesh Framework
image: /images/simplemesh_sensortag.png
date: 2021-02-14T08:00:00+00:00
lastmod: 2021-02-14T08:00:00+00:00
tags: [Board,NRF52,SimpleMesh]
---

:button[]{link=/docs/networks/nrf/ label="Networks / Simple Mesh" }
:button[]{link=/docs/frameworks/raspi-iot/ label="Frameworks / Raspi IoT" }
:button[]{link=https://www.tindie.com/products/wassfila/nrf52-mesh-sensor-node/ label="Tindie Product Page" icon="new" }

# Concept

![Simple Mesh Sensor Tag](/images/simplemesh_sensortag.png)

It is possible to mount either CR2032 or CR2477

![Mounted](/images/mounted.png)

# Hardware
board render

:button[]{link=https://github.com/nRFMesh/nRF52_Mesh/tree/master/boards/nrf52_sensortag label="repo directory" icon="github" }

:button[]{link=https://www.nordicsemi.com/Products/Low-power-short-range-wireless/nRF52832 label="nRF52832" icon="new" }

:button[]{link=https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/ label="BME280" icon="new" }

:button[]{link=https://www.maximintegrated.com/en/products/interface/sensor-interface/MAX44009.html label="MAX44009" icon="new" }

## Schematics
![Schematics](/images/simplemesh_sensortag/schematics.svg)

## Board
### Top

![Top](/images/simplemesh_sensortag/top.svg)
### Bottom
![Bottom](/images/simplemesh_sensortag/bottom.svg)
### Module
![Module size](/images/module_size.png)

# Application
## Firmware

:button[]{link=https://github.com/nRFMesh/nRF52_Mesh/tree/master/applications/01_sensortag label="repo directory" icon="github" }

### Low Power configuration
|Flags to clear|
--- |
| NRFX_UARTE_ENABLED |
| NRFX_UART_ENABLED | 
| UART_ENABLED | 
| UART0_ENABLED |
| NRF_FPRINTF_ENABLED |
| NRF_LOG_BACKEND_UART_ENABLED |
| NRF_LOG_STR_FORMATTER_TIMESTAMP_FORMAT_ENABLED |
| NRF_LOG_ENABLED |
* removed nrf_drv_uart.c from Makefile
* Required nRF52832 Errata [89] TWI: Static 400 uA current while using GPIOTE

## Low Power Measures
| Mode | Current |
--- | --- |
| RTC + RAM | 9.6 uA |
| // + Sensors | 22 uA |
| // without TWI Woraround | 470 uA |
| Uart Log | 500 uA |
| Uart Log + HF | 700 uA |

* 250 us @ 12 mA
* 1.5 ms @ 3.5 mA
* 50 uA @ infinite

![Power measures](/images/simplemesh_sensortag/Power measures.png)

## PPK-II Measures
### First wakeup
![First wakeup](/images/simplemesh_sensortag/first_wakeup.png)

### wakeup cycle type 1
![wakeup cycle](/images/simplemesh_sensortag/wakeup_cycle.png)

### wakeup cycle type 2
![wakeup cycle t2](/images/simplemesh_sensortag/wakeup_cycle_t2.png)

### sleep period
![sleep perdiod](/images/simplemesh_sensortag/sleep_period.png)


## BME280 vs MS8607
* `Thread sensortag` is using MS8607 and `nRF52832 sensortag` is using BME280
* `Thread sensortag` is sampling every 3 sec while `nRF52832 sensortag` every 40 sec
* `Thread sensortag` has no case while `nRF52832 sensortag` is inside a PLA case
### temperature
![compare temperature](/images/nrf52832_sensortag/compare_temperature.png)
![Temperature hour](/images/nrf52832_sensortag/temperature_hour.png)
### humidity
![Humidity](/images/nrf52832_sensortag/humidity.png)
![Humidity hour](/images/nrf52832_sensortag/humidity_hour.png)
### pressure
![Pressure](/images/nrf52832_sensortag/pressure.png)

## MAX44009 vs VEML6030
* `Thread sensortag` is using VEML6030 and `nRF52832 sensortag` is using MAX44009
### light
![Light](/images/nrf52832_sensortag/light.png)
![Light day](/images/nrf52832_sensortag/light_day.png)
![Light hour](/images/nrf52832_sensortag/light_hour.png)
