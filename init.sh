#!/bin/bash

while true; do
  read -p "Enter a project name: " folder_name

  if [ -d "$folder_name" ]; then
    if [ "$(ls -A $folder_name)" ]; then
      echo "Error: the folder already exists and is not empty."
    else
      break
    fi
  else
    mkdir $folder_name
    break
  fi
done

cd $folder_name
ddev config --project-type=craftcms --docroot=web
ddev composer create-project -y szenario-fordesigners/craft-vite-starter
make install
sleep 2 && ddev launch & ddev yarn dev