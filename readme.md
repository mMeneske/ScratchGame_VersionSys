# VersionSys v1.26.8b for ScratchGame v1.26.8a
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

DebugSys is a useful debugging library:
https://github.com/mMeneske/ScratchGame_DebugSys

CloneSys is a library that adds clones similar to the ones in scratch 3:
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
If you are using any of the "Optional supported libraries" they will be connected automatically.

```html
<head>
    <script src="lib/phaser.min.js"></script>
    <script src="lib/ScratchGame.js"></script>
    <script src="lib/VersionSys.js"></script>
</head>
```

## Overwiew

This is a pretty unique libary since it only has one function you can read, the rest is run by he other libaries it suports. VersionSys job is to automatically connect all other libaries that it supports and run check if any of them might not be compatible, it also allows libaries to use functions from other libaries.

## Functions

```js
function create(){
    // versionSys.debugSys will equal true if VersionSys has detceted DebugSys, this can be done 
    // with all libaries in "Optional supported libraries"
    console.log(versionSys.debugSys);
    console.log(versionSys.cloneSys);
}
```

## Version

```js
function update(){
    // versionSys.version will return the version of VersionSys.
    console.log(versionSys.version);
    // versionSys.versionId will return the id for the version of VersionSys.
    console.log(versionSys.versionId);
}
```
