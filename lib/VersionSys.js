//VersionSys v1.26.8a
//Credits: mMeneske
//Requirements: ScatchGame v1.26.8a

class libarySys {
    
    #libs;
    #debug;

    constructor() {
        this.#libs = {
            debugSys: false,
            cloneSys: false
        };

        if (this.#existsFile("lib/DebugSys.js")){
            this.#libs.debugSys = true;
        }

        if (this.#existsFile("lib/CloneSys.js")){
            this.#libs.cloneSys = true;
        }

    }

    #existsFile(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();


        if(http.status!=404){
            url = "./" + url;

            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            head.appendChild(script);

            if(url == "./lib/DebugSys,js"){
                this.#debug = initDebug();
                versionSys.#debug.log("loaded DebugSys");
            }
        }


        return http.status!=404;
    }

    get debugSys() {
        if(versionSys.#libs.debugSys){
            versionSys.#debug.log(this.#libs.debugSys);
        }
        return this.#libs.debugSys;
    }

    get cloneSys() {
        if(versionSys.#libs.debugSys){
            versionSys.#debug.log(this.#libs.cloneSys);
        }
        return this.#libs.cloneSys;
    }

}

let versionSys = new libarySys();