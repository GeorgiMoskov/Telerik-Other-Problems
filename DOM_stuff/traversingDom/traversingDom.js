var traverseDom = function (parent,level){
    var dashes = "-".repeat(level*2);
    console.log(dashes + parent.tagName);

    for(child of parent.children){
        traverseDom(child,level+1);
    }

}

var html = document.documentElement;
traverseDom(html,0);