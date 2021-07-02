# Employee Emergency App

Winning submission to EY GDS Hackpions 2.0. A complete end-to-end platform to aid companies in evacuating large buildings during emergency situations.

[Here's](https://youtu.be/V5GQzZ3xN3w) a video showing the project and its features (note: the video is slightly outdated, some changes have been made since then, especially to the AR features).

## Features


 - [x] Three interfaces for Employee, ERT (Emergency Response Team) and command center
 - [x] Indoor positioning with **trilateration using BLE Beacons** and WiFi APs (RSSI)
 - [x] Image processing to automatically **extract paths from map images**.
    - [x] Also places beacons at appropriate (configurable) distances
 - [x] Indoor navigation using **A-star shortest path** algorithm.
 - [x] Realtime communication using WebSockets and Firebase Realtime DB.
    - [x] **Realtime chat** between Employee and nearest ERT
 - [x] **Realtime map** showing locations of everyone involved.
 - [x] **Simulator** to test a scenario with multiple employees and ERTs.
 - [x] **AR Map** view
 - [x] Navigation to different rooms during non-emergency situations


## Technology Stack

 - Angular - for web app
 - Ionic - for mobile app, also uses Angular
 - Express JS - for API and websocket server
 - FastAPI - for image processing and simulation server
 - OpenCV - image processing for uploaded maps
 - Firebase Realtime Database
 - HM10 and ESP32 Bluetooth Low Energy module: for the BLE Beacons

## Code structure

 - `orange-ecc`: Ionic-Angular mobile app, also includes the web interface.
 - `server`: backend servers
    - `command-center-api`: includes map image processing, pathfinding, simulator and beacon estimator.
    - `ws-api`: WebSocket server for realtime location updates
 - `analysis`: some basic analysis of iBeacon sensor data


## Screenshots

Command Center Dashboard

![Command Center](0-cc-dash.png)

Showcase

![Screen 1](1-showcase.png)
![Screen 2](2-showcase.png)
![Screen 3](3-showcase.png)

App Features

![Login](4-login.png)
![Chat](5-chat.png)
![SOS](6-emp.png)

