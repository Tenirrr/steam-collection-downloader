## Hello
This "project" was created to allow easy downloading of entire collections from Steam. I was looking for a way to easily download entire collections from Steam in a server environment, but couldn't find one. So I decided to develop my own method. A few minutes of work and we have a solution.

I hope that using my scripts will prove to be faster than downloading each one manually.

## Good to know
Sometimes steam can't find files or folders. Then you have to specify the absolute path.

Downloading workshop content of some games requires having them on your steam account. You must then log in to *steamcmd* with the account that has such a game. 





## How to use it

1) Download the latest version of my code.
2) Install the [Tampermonkey](https://www.tampermonkey.net/) extension in your browser.
3) Copy the contents of the *javacript.js* file to a new script in Tampermonkey and save (*ctrl + s*).
4) Open the web page of any collection on steam and click *Download Script* or *Copy Script*. Replace the *steamcmd_script.txt* file or paste what you copied into it.

![](https://github.com/Tenirrr/steam-collection-downloader/blob/main/buttons.png?raw=true)

5) Run the final script.

Linux:
```
chmod +x run.sh
./run.sh
```
Windows (Not tested!):
```
run.bat

```

6) The new *work_dir* folder will contain the downloaded files. The folder will be deleted when you restart the script and the collection will be downloaded again!
