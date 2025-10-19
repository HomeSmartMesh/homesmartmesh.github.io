---
title: Room View Bot
description: A car robot platform based on the Yahboom Rosmaster X3-Plus mecanum chassis, customized sensors and fresh new ROS2 Jazzy software for native ubuntu 24 development (no docker) on Raspberry pi 5
order: 1
---

# Description
A car robot platform based on the Yahboom Rosmaster X3-Plus mecanum chassis, customized sensors and fresh new ROS2 Jazzy software for native ubuntu 24 development (no docker) on Raspberry pi 5

:image[]{alt="rovi controlled with joystick" src="./room_view_bot/20251018_141343.jpg" width="400"}

Photo from the latest development stage. The robot can be controlled with PS4 joystick over bluetooth and using python and Rosmaster_Lib.

## BOM
The Bill Of Material consist of the following items

### chassis
Chassis with Mecanum Wheel(L)

:image[]{alt="chassis" src="./rovi_bom/chassis_mecanum_wheels_l.png" width="250"}

* [product link](https://www.amazon.de/-/en/dp/B0BZS2VNPL)
* yahboom learn [ROS-chassis](https://www.yahboom.net/study/ROS-chassis)

### depth camera

The depth camera is a raw camera without a case provided by Orbbec under the name `Astra Stereo S U3`, Yahboom is rebranding it under the name `AI View Depth Camera` and did a great work in providing a metal case with an adjustable tilt very important for robotic usage.

:image[]{alt="depth camera case" src="./rovi_bom/depth_camera_case.png" width="250"}
:image[]{alt="deoth camera raw" src="./rovi_bom/depth_camera_raw.png" width="250"}

The various naming of this camera when detecting it on USB migh be confusing as the camera is detected as two devices:

```shell
Bus 004 Device 005: ID 2bc5:0511 Orbbec 3D Technology International, Inc USB 2.0 Camera
Bus 004 Device 006: ID 2bc5:0614 Orbbec 3D Technology International, Inc ORBBEC Depth Sensor
```
and these devices have rules in the `OpenNI Modules` section of the Orbbec OpenNISDK
- pid 0614, vid 2bc5 : `gemini`
- pid 0511, vid 2bc5: `gemini_rgb`

Links
* yahboom product [aiview-depth-camera](https://category.yahboom.net/collections/ros-depth-camera/products/aiview-depth-camera?variant=49836112937276)
* yahboom learn [AI View Depth camera](https://www.yahboom.net/study/AIVIEW_Camera)
* Orbbec store [Astra Stereo S U3](https://store.orbbec.com/products/astra-stereo-s-u3)
* Orbbec OpenNI SDK : https://github.com/orbbec/OpenNI_SDK
    * OpenNI API : https://github.com/orbbec/OpenNI_SDK/blob/main/Doc/English/0400_API.md

# Bringup testing
before starting with ROS2, every function of the robot is tested separately with native drivers and as few softwre layers as possible.

## Control board

:button[]{label="Control board python joystick" link="https://github.com/Roblibs/rovi_control_board" icon="github"}

Testing the ROS Control board with unitary python scripts, then with a joystick.

# Gallery
```yaml gallery
dir: ./room_view_bot
```
