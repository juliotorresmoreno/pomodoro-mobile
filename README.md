## Requerimientos
1. node v8.9.1
2. npm
3. create-react-native
4. react-native-scripts
5. Android SDK configurado

## Instalando dependencias
Asumiendo que ya tienen node y el Android SDK configurado
### Android SDK
1. Descargar Android Studio https://developer.android.com/studio/index.html?hl=es-419
2. Ejecutar Android Studio
3. Instalar todo lo que pida Android Studio.
4. Adicionalmente instalar la versión 5, 6 y 7 del emulador de Android en arquitectura x86_64.
5. en caso de que tengan problemas con la ejecucuin del emulador agregar 
export ANDROID_EMULATOR_USE_SYSTEM_LIBS=1 al final del archivo ~/.bashrc y reiniciar.

## Instalando node
1. sudo apt install nodejs npm
2. sudo npm i -g n
3. sudo n v8.9.1
4. sudo apt purge nodejs npm
5. sudo npm install node-gyp
6. sudo apt install build-essential

## Instalar react-native
1. sudo npm i -g create-react-native
2. sudo npm i -g react-native-scripts

## Clonando el proyecto
1. git clone git@github.com:juliotorresmoreno/pomodoro-mobile.git
2. cd pomodoro-mobile
3. yarn install
4. edita el archivo src/config/index.js y cambia la dirección ip del servidor
5. react-native-scripts start