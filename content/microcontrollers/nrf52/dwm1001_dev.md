---
title: UWB DWM1001 dev
description: An Ultra Wide Band development kit including the DWM1001C Module
order: 2
date: 2021-05-08T08:00:00+00:00
lastmod: 2021-05-08T08:00:00+00:00
image: ./DWM1001_DevKit.png
tags: [nRF52832, uwb]
features:
    - nRF52832
    - UWB DWM1001C Module
---

:button[]{link="/networks/ultrawideband/" label="Networks / Ultra Wide Band RTLS" }

# Development Board
:image[]{src="./DWM1001_DevKit.png" width="250" center}

* DWM1001C Module
* STM32F072 as J-Link OB debugger
* USB and battery conenctors
* Raspberry PI Header connector
* User Leds buttons

:button[]{ link="https://www.decawave.com/product/dwm1001-development-board/" icon="new" label="product page" }
:button[]{ link="https://www.mouser.de/datasheet/2/412/DWM1001_DEV_Data_Sheet-1950462.pdf" icon="pdf" label="datasheet" }
:button[]{ link="https://eu.mouser.com/datasheet/2/412/MDEK1001_System_User_Manual-1.1-1878639.pdf" icon="pdf" label="user manual" }

## DWM1001C Module
:image[]{ src="./dwm1001_module.webp" width="250" center}

* DW1000 Transciever
* TWR-RTLS : Two Way Ranging - Real Time Location System
* nRF52832 for a Bluetooth API
* LIS2DH12TR STM 3-Axis Motion Detector

The product page includes datasheets, schematics, firmware,...
:button[]{link="https://www.decawave.com/product/dwm1001-module/" icon="new" label="product page" }

## DW1000 Transciever
:image[]{src="./dw1000.webp" width="150" center}

* IEEE 802.15.4-2011 UWB
* 6 RF bands : 3.5 GHz - 6.5 GHz
* Datarates : 110 kbps, 850 kbps, 6.8 Mbps
* Voltage 2.8 V - 3.6 V
* sleep 1 uA - deep sleep 50 nA
* TWR, TDOA : Two Way Ranging, Time Difference Of Arrival
* Location precision : 10 cm
* Range : 290 m

:button[]{link="https://www.mouser.de/datasheet/2/412/DW1000_Data_Sheet-1950775.pdf" icon="pdf" label="datasheet" }


# Application

:button[]{link="/networks/ultrawideband#mesh-positioning-framework" label="Mesh Positioning Framework" }

# 3d printed box for 18650 battery
![08a UWB 18650 battery](./uwb_devkit/08a_UWB_18650_battery.png)

:button[]{link="https://raw.githubusercontent.com/HomeSmartMesh/models/main/DWM1001-Dev-3dprint-18650.f3d" icon="download" label="Fusion360 model"}
# Gallery

```yaml gallery
dir: ./uwb_devkit
```

* `01 Unboxing` : A cable and x4 usb angles provided that can keep x4 Anchors up right.
* `06 Additional Passive Tag as serial listener` : Make sure that the listener is configured with the app to join the Network intended to be listened to

# FAQ - Discussion

* Support is available on the [official forum](https://decaforum.decawave.com/). Reviews, experience exchange and ideas related to this page content can be discussed in the forum category
:button[]{link="https://github.com/HomeSmartMesh/website/discussions" icon="github" label="Home Smart Mesh - UWB General"}
:button[]{link="https://github.com/nRFMesh/sdk-uwb-zephyr/discussions" icon="github" label="Home Smart Mesh - UWB nRF52 Zephyr"}

:::details{summary="How difficult is it to setup a demo ?"}
It's actually surprisingly easy. The hardest step is to install the App which I could not find on the appstore and Android prevents installing .apk by default, a trick was to long press "save link as" as simple click does not work, then in the settings the ip of the server has to be set as trusted. The rest is very well documented in the Quick Start guide.
:::

:::details{summary="What to do if the localization in the app is terribly wrong ?"}
By default the refresh rate of stationary tags is set to 10 sec, and the algorithm has an additional filter that prevents the tag position from moving to a new absolute measure and rather only improving by a given percentage. By incrinsing the "Stationary update rate" within the range of ~ 2 sec, it's possible to get an expected user experience with a tag visibly converging to the correct location.
:::

:::details{summary="Is it possible to communicate between DWM1001C and DMW1004C ?"}
Yes, given that they both use the same DW1000 tranceiver. But they have two different Host microcontrollers so algorith,s have to be ported on both targets nRF52 and STM32 and calibration has to be done accordingly.
:::
