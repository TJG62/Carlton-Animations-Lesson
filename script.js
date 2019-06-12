
$("body").keydown(function(event){
    var pos = $("img").offset();
console.log(pos);
    if (event.which === 37){
    $("img").offset({top:150,left:pos.left -10});
    }else if (event.which ===39){
        $("img").offset({top:150,left:pos.left +10});
        
    }
    
});