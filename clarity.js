function showPodDetails(name, type, namespace) {
    $("#selectedpod-podname").val(name);
    $("#selectedpod-podtype").val(type);
    $("#selectedpod-namespace").val(namespace);
}

function hidePodDetails() {
    $("#selectedpod-podname").val("");
    $("#selectedpod-podtype").val("");
    $("#selectedpod-namespace").val("");
}

function clickOnlyEduk8s() {
    let onlyeduk8s = $("#onlyeduk8s")
    if (onlyeduk8s.hasClass("selected")){
        onlyeduk8s.removeClass("selected");
        app.reload();
    }else{
        onlyeduk8s.addClass("selected");
        app.reload();
    } 
}