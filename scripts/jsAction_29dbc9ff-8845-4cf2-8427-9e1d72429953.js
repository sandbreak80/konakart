// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var hour = context.variableManager.getValue("hour");
//if (myVar==null) {
//        context.fail("Variable 'myVar' not found");
//}
var result;
var compare = 12;
if (hour >= compare) {
    var result=">";
} else { 
    var result =1111111;
}







// Do some computation using the methods
// you defined in the JS Library
//var computedValue = myLibraryFunction(myVar);
logger.debug("hour="+hour);
//ogger.debug("math="+math);
logger.debug("result="+result);

// Inject the computed value in a runtime variable
context.variableManager.setValue("result",result);