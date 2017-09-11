({
	fireChangeEvent : function(component, event, helper) {
        var event = component.getEvent("CommonInputEvent");
        var id = component.get("v.changeId");
        event.setParams({
            'id': id
        });
        event.fire();
	}
})