// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var computedValue = context.variableManager.getValue("null");
//if (myVar==null) {
//        context.fail("Variable 'myVar' not found");
//}

// Do some computation using the methods
// you defined in the JS Library
//var computedValue = myLibraryFunction(myVar);
//var computedValue = 1;
logger.debug("ComputedValue="+computedValue);

// Inject the computed value in a runtime variable
context.variableManager.setValue("computedVar",computedValue);