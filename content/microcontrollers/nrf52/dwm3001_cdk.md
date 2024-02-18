---
title: "UWB DWM3001 cdk"
description: "2nd Generation Ultra Wide Band development kit including the DW3110 transciever"
date: 2021-05-08T08:00:00+00:00
lastmod: 2021-05-08T08:00:00+00:00
image: /images/uwb/dwm3001-cdk.webp
order: 2
---

:button[]{link="/docs/networks/ultrawideband/" label="Networks / Ultra Wide Band RTLS" }

# Development Board
:button[]{link="https://www.qorvo.com/products/p/DWM3001CDK" icon="new" label="product page"}

:image[]{src="/images/uwb/dwm3001-cdk.webp" width="200" }

* DWM3001C Module
* STM32 as J-Link OB debugger
* x2 micro USB for nRF Data and J-Link Program/serial
* battery conenctor
* Raspberry PI Header connector
* User Leds and buttons

## DWM3001C Module
:button[]{link="https://www.qorvo.com/products/p/DWM3001C" icon="new" label="product page"}

* DW3110 Transciever
* nRF52833 Thread, Zigbee and Bluetooth (Mesh, Direction finding)
* IMU : Inertial Motion Unit
* TWR and TDoA : Two Way Ranging and Time Difference of Arrival

:button[]{link="https://www.nordicsemi.com/Products/Low-power-short-range-wireless/nRF52833" icon="new" label="nRF52833"}

## DW3110 Transciever
:button[]{link="https://www.qorvo.com/products/p/DW3110" icon="new" label="product page"}

* 2 RF bands : channel 5 (6.5 GHz) and channel 9 (8 GHz)
    * `IEEE 802.15.4z (BPRF mode)`, `IEEE802.15.4-2015 UWB`, `IEEE 802.15.4-2011 UWB`, `IEEE 802.15.8`
    * FiRa interoperability for PHY and MAC
    * Apple U1 chip interoperability in beta evaluation
* TWR, TDOA : Two Way Ranging, Time Difference Of Arrival
    * PDoA : Phase Difference of Arrival for DW3120 and DW3220 only
* Datarates : 850 kbps, 6.8 Mbps
* 1 Antenna : see DW3120/DW3220 for 2 antenna ports
* Backwards compatible with DW1000 for channel 5 6.8 Mbps and 850 kbps
* Location precision : 10 cm
    * Angle precision (for dual antenna) : +/- 10° accuracy, 5° std dev

:button[]{link="https://www.decawave.com/wp-content/uploads/2021/03/DW3000_Datasheet.pdf" icon="pdf" label="DW3000 datasheet"}
:button[]{link="https://www.decawave.com/wp-content/uploads/2021/05/DW3000-User-Manual.pdf" icon="pdf" label="DW3000 user manual"}

:button[]{link="https://www.firaconsortium.org/news/press-releases/2020/05/fira-consortium-publishes-uwb-mac-technical-requirements-to-build-ultrawideband-interoperable-ecosystem" icon="new" label="FiRa"}


# FAQ - Discussion
* Support is available on the [official forum](https://decaforum.decawave.com/). Reviews, experience exchange and ideas related to this page content can be discussed in the forum category
:button[]{link="https://github.com/HomeSmartMesh/website/discussions" icon="github" label="Home Smart Mesh - UWB General"}
:button[]{link="https://github.com/nRFMesh/sdk-uwb-zephyr/discussions" icon="github" label="Home Smart Mesh - UWB nRF52 Zephyr"}

:::details{summary="Is the DWM3001 compatible with the previous generation DWM1001 ?"}
Yes, but only when using channel 5, which might requires specific calibration. Programs designed for channel 9 cannot be directly reused on channel 5.
:::

:::details{summary="What is PDoA:Phase Difference of Arrival how does it compare to TDoA:Time Difference of Arrival ?"}
PDoA is more precise than TDoA when differentiating anchors close to each other, but as soon as they're far enough it becomes ambiguous so TDoA and PDoA can be used as complementary to each other.
:::

:::details{summary="Can the DWM3001 act as a TDoA anchor ? (not answered)"}
TBC
:::

:::details{summary="What is the difference between `IEEE 802.15.4z` and `IEEE 802.15.4-2011 UWB` ? (not answered)"}
TBC
:::
