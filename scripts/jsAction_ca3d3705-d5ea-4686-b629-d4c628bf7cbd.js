// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var f_name = context.variableManager.getValue("f_name");
var l_name = context.variableManager.getValue("l_name");


// Do some computation using the methods
// you defined in the JS Library
var login = f_name+ "@" + l_name + ".com";
logger.debug("Login="+login);