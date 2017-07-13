#!/usr/bin/env bash

# Install cordova ionic
npm install -g cordova ionic


# install openjdk
sudo apt-get install openjdk-8-jdk


cd /home/vagrant/
# download android sdk
wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip

# tar -xvf android-sdk_r24.2-linux.tgz
unzip sdk-tools-linux-3859397.zip -d android-sdk-linux
cd android-sdk-linux/tools

# install all sdk packages
./android update sdk --no-ui

# set path
vi ~/.zshrc << EOT

export PATH=${PATH}:$HOME/android-sdk-linux/platform-tools:$HOME/android-sdk-linux/tools:$HOME/android-sdk-linux/build-tools/22.0.1/

EOT

source ~/.zshrc

# adb
sudo apt-get install libc6:i386 libstdc++6:i386
# aapt
sudo apt-get install zlib1g:i386