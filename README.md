# Employee Emergency App (for EY GDS Hackathon)

## Features

 - [x] Indoor location tracking using iBeacon bluetooth beacons and trilateration
 - [x] WebSocket server for realtime location tracking
 - [x] Command Center app - map view showing all beacons and people inside the building (realtime updates)
 - [x] Employee app - map view, location tracking

## Technology Stack

 - Angular - for web app
 - Ionic - for mobile app, also uses Angular
 - Express JS - for API and websocket server
 - Firebase Realtime Database
 - HM10 Bluetooth Low Energy module: for the BLE Beacons

## Code structure

 - `ionicapp`: Ionic-Angular mobile app
 - `server`: API and WebSocket server
 - `trilateration`: Utilities for trilateration. Now integrated into `ionicapp`
 - `experiments`: for experimenting with packages, modules, features, etc.
