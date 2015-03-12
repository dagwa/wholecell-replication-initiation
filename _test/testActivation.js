var diagramPath = "databases/Whole-Cell/Diagrams/RepInit_Activation"; // here path to the diagram is hardcoded
                                                                      // it should be changed before using
                                                                      // just use path to imported diagram

var activation = "activation";

var varName1 = "ATP";
var varName2 = "DnaA";
var varName3 = "DnaA_1mer_ATP";
var okVar = 1;

//get the diagram
var diagram = data.get(diagramPath)
var peaks = ["ATP", "DnaA", "DnaA_1mer_ATP"];

//vars values
var vals1 = [100, 50 , 150, 100, 100, 0 , 10, 0 ];
var vals2 = [50 , 200, 120, 100, 100, 10, 0 , 0 ];
var vals3 = [0  , 0  , 30 , 0  , 100, 0 , 0 , 10];

//result values
var res1 = [50, 0  , 30 , 0  , 0  , 0 , 10, 0 ];
var res2 = [0 , 150, 0  , 0  , 0  , 10, 0 , 0 ];
var res3 = [50, 50 , 150, 100, 200, 0 , 0 , 10];

//get variables from the diagram
var var1 = diagram.getRole().getVariable(varName1);
var var2 = diagram.getRole().getVariable(varName2);
var var3 = diagram.getRole().getVariable(varName3);
var activationVar = diagram.getRole().getVariable(activation);
//create span for the simulation (start time, end time, step)
var span = simulationEngine.createSpan(0, 1, 1);

//loop over all test cases
for (var i=0; i<vals1.length; i++)
{
   var1.setInitialValue(vals1[i]);
   var2.setInitialValue(vals2[i]);
   var3.setInitialValue(vals3[i]);
   activationVar.setInitialValue(1.0);
   var result = simulationEngine.simulate(diagram, span);
   var values = result.getValues(peaks);

   if( values[0][1] !== res1[i] )
   {
      print("ATP differs in the step " + i + " was " + values[0][1] + " , but was expected " + res1[i]);
      okVar = 0;
   }
   if( values[1][1] !== res2[i] )
   {
      print("DnaA differs in the step " + i + " was " + values[1][1] + " , but was expected " + res2[i]);
      okVar = 0;
   }
   if( values[2][1] !== res3[i] )
   {
      print("ATP differs in the step " + i + " was " + values[2][1] + " , but was expected " + res3[i]);
      okVar = 0;
   }
}

//print if succeed
if( okVar === 1 )
   print("Success!");