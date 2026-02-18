//VersionSys v1.26.8a
//Credits: mMeneske
//Requirements: ScatchGame v1.26.8a

class libarySys {

    #libs = {
        debugSys,
        cloneSys,
    };
    

    constructor() {
        this.#libs.debugSys = false;
        this.#libs.cloneSys = false;
    }

    loadLib(){
        for(let i = 0; i < arguments.length; ++i){
            if(versionSys.debugSys){
                versionSysDebug.log("loading path: " + "./lib/" + arguments[i] + ".js");
            }

            this.loadScript("./lib/" + arguments[i] + ".js");
        }
    }

    register(libary) {
        this.#libs[libary] = true;
        if(versionSys.debugSys){
            versionSysDebug.log("loaded libary: " + libary);
        }
    }

    loadScript(url){    
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        head.appendChild(script);
    }

    get debugSys() {
        
    }

}

let versionSys = new libarySys();

if(versionSys.debugSys == true){
    let versionSysDebug = initDebug();
}
