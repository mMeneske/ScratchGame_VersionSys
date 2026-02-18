# VersionSys v1.26.8a for ScratchGame v1.26.8a
## An expantion for ScratchGame

## Prior knowledge

Before you can use this libary you need to learn ScratchGame. You can read about ScratchGame on github:
https://github.com/Mperv/scratch-game/blob/main/readme.en.md

## Downloading libaries

### Required libraries

You can download Phaser 3 from:
https://phaser.io/download/phaser3

You can download ScratchGame from:
https://github.com/Mperv/scratch-game

### Optional supported libraries

DebugSys a useful debugging library:
https://github.com/mMeneske/ScratchGame_DebugSys

CloneSys a library that adds clones similar to the ones in scratch 3:
https://github.com/mMeneske/ScratchGame_CloneSys

## Starting server

To run any game you need to run it on a server.

For Python you can use:
```bash
python -m http.server 8080
```

For NodeJS you can use:
```bash
npx http-server . -p 8080
```

## Connecting libaries

First you will need to connnect Phaser, ScratchGame and VersionSys.

```html
<head>
    <script src="lib/phaser.min.js"></script>
    <script src="lib/ScratchGame.js"></script>
    <script src="lib/VersionSys.js"></script>
</head>
```

## Functions

```js
function create(){
    // versionSys.loadLib() you can seperated by comma put the names of the files in the folder lib
    // for it to automaticly to load the libaries in*.
    // * this will only work for the libaries in the section "Optional supported libraries" above.
    versionSys.loadlib(DebugSys, CloneSys);
}
```
