---
title: Round Display
description: smart watch like Round touch display ESP32-2424S012
image: /images/esp32/round-display.webp
tags: [C3, display, touch]
features:
- ESP32-C3-Mini-U1
- LDC touch 1.28 Inch
- GC9A01 240 x 240
- CST816D
---
:button[]{link="/microcontrollers/esp32/datasheets#esp32-c3" label="ESP32-C3"}

:image[]{src=/images/esp32/round-display.webp width=300 center}

# Features
* ESP32-C3 : RISC-V single core, wifi blutooth
* [ESP32-C3-Mini-U1](https://www.espressif.com/sites/default/files/documentation/esp32-c3-mini-1_datasheet_en.pdf)
* Board : ESP32-2424S012
* Size : 37 x 38.5 mm without the box

## Display Features
* Display controller GC9A01
* Touch controller CST816D

# Pinout

|Pin|Function|
|---------|---|
|TFT_MOSI | 7  |
|TFT_SCLK  | 6  |
|TFT_CS   | 10  |
|TFT_DC | 2  |
|TFT_RST  | EN |
|TFT_BL  | 3 |
|TP_SDA   | 4  |
|TP_SCL   | 5  |
|TP_INT   | 0  |
|TP_RST   | 1  |
