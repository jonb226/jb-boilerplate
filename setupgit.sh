#!/bin/sh
git init
git add *
git add .[!.]*
git commit -m "initial commit"
