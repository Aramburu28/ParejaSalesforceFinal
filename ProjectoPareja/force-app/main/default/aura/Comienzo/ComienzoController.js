({
    myAction : function(component, event, helper) {

    },
    ManejarEvento : function(component, event, helper){
        var activar = event.getParam("Resulta");
        component.set("v.resu", activar);
},
    eventar : function (component, event, helper){
        var evt = $A.get("e.c:Jugando");
        if(evt != null){
        }
        evt.setParams({
            "Jugar" : "True"
        });
        evt.fire();
    }
})
