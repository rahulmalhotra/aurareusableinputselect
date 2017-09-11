# Aura Reusable InputSelect
### An inputselect reusable lightning component implementing ui:inputselect tag

The code files are generated using salesforce dx and is compatible with that.

#### Some important points to understand the code :- 

1. CommonInputSelectComponent consists of ui:inputselect which fires an event on change.
2. The event fired is handled by the component in which it is used.
3. Each event has an event id which is passed as an attribute to the common inputselect component
and used in handler to call different functions according to the change in different inputselect as each inputselect 
has it's own unique id passed by the developer as an attribute.
4. All onchange methods in the parent component are defined by using the aura:method tag so that they can be called inside 
handleCommonInputEvent function in the parent component .
5. CommonInputSelectWrapper consists of common inputselect elements so it act as a parent component.
6. CommonInputSelectApp can be used to preview this component.

### CommonInputSelectApp
![CommonInputSelectApp](https://github.com/rahulmalhotra9620/aurareusableinputselect/blob/master/1.jpg)

#### Some more points to consider :-

1. You can pass any list that you want to display in input select by using the iterationData attribute.
2. You can display a value in inputselect by passing it in the value attribute.
3. CSS classes can be passed by using the labelClass, class and inputSelectOptionClass attribute but these classes 
must be defined in the parent component
4. SLDS (Salesforce Lightning Design System) css clasees are used in the demo so you must download that to view it properly.
Download it from here :- https://www.lightningdesignsystem.com/downloads/

### Feel free to contribute to this component by creating a pull request. Thank You :)
