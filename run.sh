#!/bin/bash
PATHSTEAMCD=$(realpath .)

rm "${PATHSTEAMCD}/work_dir" -r
steamcmd +force_install_dir "${PATHSTEAMCD}/work_dir/" +login anonymous +runscript "${PATHSTEAMCD}/steamcmd_script.txt"