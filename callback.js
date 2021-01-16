function loadScript(src,callback) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null,script);
    script.onerror = () => callback(new Error("hata oldu datlum" + src));
    document.head.append(script);
}



