---
title: TTGO T-Display
description: Small dev kit with O-LED display
date: 2020-12-25T00:00:00+09:00
edit: 2024-02-04T00:00:00+00:00
order: 12
image: /images/esp32/ttgo-t-display.webp
tags: [Board,Display]
features:
    - LCD 1.14 Inch
    - ST7789V 135 x 240
    - "Charger : TP4054"
---
# TTGO T-Display
:button[]{label="Product Page" link="https://www.lilygo.cc/en-pl/products/lilygo%C2%AE-ttgo-t-display-1-14-inch-lcd-esp32-control-board"}

:image[]{alt="TTGO T display" src="/images/esp32/ttgo-t-display.webp" width="300" center}

## Simple Example
* [t-display_controller](https://github.com/ESP32Home/t-display_controller)

### dependencies
* [TFT_eSPI_ttgo_t-display](https://github.com/ESP32Home/TFT_eSPI_ttgo_t-display)
    * fork from [Bodmer/TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [GfxUi](https://github.com/ESP32Home/GfxUi)

```ini
lib_deps =    
    https://github.com/ESP32Home/TFT_eSPI_ttgo_t-display.git#2.3.4_t-display
    https://github.com/ESP32Home/GfxUi.git#v1.0.1
```
### Example Code
:::details{summary="click to expand the example code..."}
```c++
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "GfxUi.h"
#include <SPIFFS.h>

TFT_eSPI tft = TFT_eSPI(135, 240);
GfxUi ui = GfxUi(&tft);

void setup()
{
    Serial.begin(115200);

    tft.init();
    tft.setRotation(3);
    SPIFFS.begin(true);//FORMAT_SPIFFS_IF_FAILED
    ui.drawBmp("/esp_home.bmp", 0, 0);//'ui' needs tft and SPIFF

    tft.setCursor(0, 0);
    tft.setTextColor(TFT_GREEN);
    tft.setTextSize(2);
    tft.drawString("Hello TFT World",  tft.width() / 2, tft.height() / 2 );

}

void loop()
{

}
```
:::

## 3D printed case
![ESP32 Remote](/images/3dprinting/esp32_remote.png)

:button[]{link=/3dprinting/esp32_remote label="STL Model for 3D printing"}

## Display
* IPS ST7789V
* 1,14 Zoll
* 135x240

## Suppliers
* [Aliexpress ~ 10€](https://de.aliexpress.com/item/4000829894292.html?spm=a2g0s.9042311.0.0.33794c4dbkKB4T)

## Applications
### Thermostat control

![Display control app all](/images/esp32/display-control-app-all-info.png)

![ESP32 remote](/images/esp32/esp32_remote.png)


:button[]{link=https://github.com/ESP32Home/t-display_controller label="Project Github Repo"}

**Features**
* C++ Platformio project
* Adjust temperature up/down with buttons
* LCD display
    * ongoing request
    * target temperature
    * current temperature
    * metal temperature
    * hot water flow
* rechargeable battery
* Deep Sleep, wake on button press
* MQTT
* Json payload
* LCD Graphics splash screen

:::details{summary="Build info..."}
```log
PACKAGES:
 - framework-arduinoespressif32 3.10004.201016 (1.0.4)
 - tool-esptoolpy 1.30000.201119 (3.0.0)
 - toolchain-xtensa32 2.50200.80 (5.2.0)
Dependency Graph
|-- <TFT_eSPI> 2.3.52+sha.49cdca6
|   |-- <SPI> 1.0
|   |-- <FS> 1.0
|   |-- <SPIFFS> 1.0
|   |   |-- <FS> 1.0
|-- <GfxUi> 1.0.0+sha.64d5ced
|   |-- <TFT_eSPI> 2.3.52+sha.49cdca6
|   |   |-- <SPI> 1.0
|   |   |-- <FS> 1.0
|   |   |-- <SPIFFS> 1.0
|   |   |   |-- <FS> 1.0
|   |-- <SPI> 1.0
|   |-- <FS> 1.0
|   |-- <SPIFFS> 1.0
|   |   |-- <FS> 1.0
|-- <ArduinoJson> 6.16.1
|-- <MQTT> 2.4.7
|-- <SPI> 1.0
|-- <FS> 1.0
|-- <SPIFFS> 1.0
|   |-- <FS> 1.0
|-- <WiFi> 1.0
|-- <Wire> 1.0.1
|-- <Button2>
```
:::
