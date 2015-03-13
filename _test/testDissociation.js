var diagramPath = "databases/Whole-Cell/Diagrams/RepInit_Dissociation";

var dissociation = "dissociation";

var varName1 = "DnaA_1mer_ADP";
var varName2 = "DnaA_2mer_ATP";
var varName3 = "DnaA_3mer_ATP";
var varName4 = "DnaA_4mer_ATP";
var varName5 = "DnaA_5mer_ATP";
var varName6 = "DnaA_6mer_ATP";
var varName7 = "DnaA_7mer_ATP";
var varName8 = "water";
var okVar = 1;

//get the diagram
var diagram = data.get(diagramPath)
var peaks = ["DnaA_1mer_ADP", "DnaA_2mer_ATP", "DnaA_3mer_ATP", "DnaA_4mer_ATP", "DnaA_5mer_ATP", "DnaA_6mer_ATP", "DnaA_7mer_ATP", "water"];

//vars values
var values1 = [3,1,1,1,1,1,1,29];
var values2 = [0,1,1,1,1,1,1, 4];

//result values
var res1 = [30, 0, 0, 0, 0, 0, 0, 2];
var res2 = [2, 1, 0, 0, 0, 0, 0, 2];
var res3 = [3, 0, 1, 0, 0, 0, 0, 1];
var res4 = [4, 0, 0, 1, 0, 0, 0, 0];

var var1 = diagram.getRole().getVariable(varName1);
var var2 = diagram.getRole().getVariable(varName2);
var var3 = diagram.getRole().getVariable(varName3);
var var4 = diagram.getRole().getVariable(varName4);
var var5 = diagram.getRole().getVariable(varName5);
var var6 = diagram.getRole().getVariable(varName6);
var var7 = diagram.getRole().getVariable(varName7);
var var8 = diagram.getRole().getVariable(varName8);
var dissociationVar = diagram.getRole().getVariable(dissociation);
var span = simulationEngine.createSpan(0, 100, 1);
//run first test
{
   var1.setInitialValue(values1[0]);
   var2.setInitialValue(values1[1]);
   var3.setInitialValue(values1[2]);
   var4.setInitialValue(values1[3]);
   var5.setInitialValue(values1[4]);
   var6.setInitialValue(values1[5]);
   var7.setInitialValue(values1[6]);
   var8.setInitialValue(values1[7]);
   dissociationVar.setInitialValue(1.0);
   var result = simulationEngine.simulate(diagram, span);
   var values = result.getValues(peaks);
   
   for( var i = 0; i<values1.length; i++)
   {
       if( values[i][1] !== res1[i] )
       {
           print("first test fails: " + peaks[i] + " not right");
           print("was " + values[i][1] + " but was expected " + res1[i]);
           okVar = 0;
       }
   }
   if( okVar !== 1 )
       print("First test fails!");
}
//run second test
for( var j = 0; j< 15; i++)
{
   okVar = 1;
   var1.setInitialValue(values2[0]);
   var2.setInitialValue(values2[1]);
   var3.setInitialValue(values2[2]);
   var4.setInitialValue(values2[3]);
   var5.setInitialValue(values2[4]);
   var6.setInitialValue(values2[5]);
   var7.setInitialValue(values2[6]);
   var8.setInitialValue(values2[7]);
   dissociationVar.setInitialValue(1.0);
   var result = simulationEngine.simulate(diagram, span);
   var values = result.getValues(peaks);
    
   if( values[7][1] === res1[7] )
      var res = res1;
   else
   {
      if( values[7][1] === res2[7] )
          var res = res2;
      else
      {
         if( values[7][1] === res3[7] )
            var res = res3;
         else
            print("Second test fails!" + values[7][1]);
      }
   }
   for( var i = 0; i<values1.length; i++)
   {
       if( values[i][1] !== res[i] )
       {
           print("second test fails: " + peaks[i] + " not right");
           print("was " + values[i][1] + " but was expected " + res[i]);
           okVar = 0;
       }
   }
   if( okVar !== 1 )
       print("Second test fails!");
}

if( okVar === 1 )
   print("Success!");