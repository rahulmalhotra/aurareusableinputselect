({
    doInit: function(component,event,helper) {
      	
        var fruits = [];
        fruits.push("Apple");
        fruits.push("Mango");
        fruits.push("Banana");
        fruits.push("Grapes");
        fruits.push("Orange");

        component.set("v.fruits",fruits);

        var vegetables = [];
        vegetables.push("Tomato");
        vegetables.push("Brinjal");
        vegetables.push("Capsicum");
        vegetables.push("Onion");
        vegetables.push("Potato");

        component.set("v.vegetables",vegetables);

    },

    handleCommonInputEvent : function(component, event, helper) {        

        var id = event.getParam('id');
        if(id=="1") {
        	component.getFruit();
        }

        if(id=="2") {
        	component.getVegetable();
        }
    },

    getFruit : function(component,event,helper) {

        var value = component.find("myFruits").get("v.value");
        alert('You selected fruit : '+value);
    },

    getVegetable : function(component,event,helper) {

        var value = component.find("myVegetables").get("v.value");
        alert('You selected vegetable : '+value);
    }
})