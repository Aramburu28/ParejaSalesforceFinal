({
    myAction : function(component, event, helper) {

    },
    ManejarEvento : function(component, event, helper){
                component.getElement("numero").style.display = "block";
                component.getElement("numero").style.left = "" + ((Math.random() * 800) + 100) + "px";
                component.getElement("numero").style.top = "" + ((Math.random() * 600) + 100) + "px";
                var activar = event.getParam("Jugar");
                component.set("v.activo", activar);
                var activo = component.get("v.activo");
                if(activo){
                    var x = setInterval(function(){
                    console.log("hola");
                    var num = component.get("v.secu");
                    
                    var num2 = num + 1;
                    if(num2 > 9){
                        component.set("v.finalizado", true);
                        clearInterval(x);
                    }
                component.set("v.secu", num2);
            },1000)
        }
    },
    Parar : function(component,event,helper){
        component.getElement("numero").style.display = "none";
        component.set("v.secu", 0)
    },
    doInit : function(component,event,helper){
        var x = setInterval(function(){
            if(component.get("v.finalizado") && component.getElement("numero").style.display == "block" ){
                alert("Has perdido");
                component.set("v.finalizado", false);
                component.set("v.secu", 0);
                component.set("v.perdido", true);
                clearInterval(x);
            }
            else if(component.get("v.finalizado")){
                var ganar = true;
                const as = document.getElementsByClassName("num");
                for(let i = 0; i < as.length; i++){
                    if(as[i].style.display == "block"){
                        ganar = false;
                    }
                }
                if(ganar){
                    alert("Has ganado");
                    component.set("v.finalizado", false);
                    component.set("v.secu", 0);
                    component.getElement("numero").style.display = "none";
                    clearInterval(x);
                }
            }
    },1000)
        }
})
