//VersionSys v1.26.8a
//Credits: mMeneske
//Requirements: ScatchGame v1.26.8a

class libarySys {

    #debugSys;
    #cloneSys;

    constructor() {
        this.#debugSys = false;
        this.#cloneSys = false;
    }

    loadLib(){
        for(let i = 0; i < arguments.length; ++i){
            this.loadScript("./lib/" + arguments[i] + ".js");
            console.log("./lib/" + arguments[i] + ".js");
        }
    }

    register(libary) {
        this[libary] = true;
    }

    set debugSys(set){
        if(set == true || set == false){
            this.#debugSys = set;
        }
        if(set == 0 || set == 1){
            if(set == 1){
                this.#debugSys = true;
            } else {
                this.#debugSys = false;
            }
        }
    }

    get debugSys(){
        return this.debugSys;
    }

    set cloneSys(set){
        if(set == true || set == false){
            this.#cloneSys = set;
        }
        if(set == 0 || set == 1){
            if(set == 1){
                this.#cloneSys = true;
            } else {
                this.#cloneSys = false;
            }
        }
    }

    get cloneSys(){
        return this.cloneSys;
    }

    loadScript(url){    
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        head.appendChild(script);
    }

}

let versionSys = new libarySys();
