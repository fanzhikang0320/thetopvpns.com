// (function() {
//     var curWidth = document.documentElement.clientWidth;
//     var curWidth = window.innerWidth;
//     var curWidth = window.screen.width;

//     var targetWidth = 414;
//     var scale = curWidth / targetWidth;

//     var view = document.getElementById('view');
//     view.content = `initial-scale=${scale},user-scalable=no,minimum-scale=${scale},maximum-scale=${scale}`
// }())


(function() {
    var curWidth = document.documentElement.clientWidth;
    var curWidth = window.innerWidth;
    var curWidth = window.screen.width;

    var targetWidth = 414;
    var scale = curWidth / targetWidth;
  
    var metaDom = document.createElement('meta');
    metaDom.name = 'viewport';
    metaDom.content = `initial-scale=${scale},user-scalable=no,minimum-scale=${scale},maximum-scale=${scale}`
    
    document.getElementsByTagName('head')[0].appendChild(metaDom)
    // var view = document.getElementById('view');
    // view.content = 
}())