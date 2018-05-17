/**
 * Clase principal donde se encuentra la implementacion de todos los bloques relativos 
 * a las acciones  que se utilizan en GROCKLY.
 * 
 */
Blockly.Blocks['Action'] = {
  init: function() {
   this.appendValueInput("ProteinL")
        .appendField("Action")
        .setCheck(["ProteinL","Conjugate"]);
    this.appendValueInput("Action")
        .setCheck(["Paint","Paint2","Conjugate","ActionR1","ActionR2","ActionR3"]);
    this.appendDummyInput();
    this.setNextStatement(true, ['Action']);
    this.setPreviousStatement(true, ['Action']);

     this.setColour(90);
    
       
  }
}
Blockly.Blocks['Conjugate'] = {
  init: function() {

     this.appendDummyInput("Conjugate")
        .appendField(new Blockly.FieldDropdown([
                       ['Conjugate', 'conjugate'],['Conjugate Direct', 'conjugate_directed']]),'TYPE')
        .appendField(new Blockly.FieldTextInput("Plasmid"), "NAME")
        .appendField(new Blockly.FieldNumber(0, 0), "ratio");
        
    this.setOutput(true, 'Conjugate'); 
    this.setColour(300);
  }
}
Blockly.Blocks['ActionR1'] = {
  init: function() {

    this.appendDummyInput("ActionR1")
        .appendField(new Blockly.FieldDropdown([
                       ['Lose Plasmid', 'lose_plasmid'],['Set Eex', 'set_eex'],['Remove Eex', 'remove_eex']]),'TYPE')
        .appendField(new Blockly.FieldTextInput("Plasmid"), "NAME");
        
    this.setOutput(true, 'ActionR1'); 
    this.setColour(300);
       
  }
}
Blockly.Blocks['Paint'] = {
  init: function() {

   this.appendDummyInput("Paint")
        .appendField(new Blockly.FieldDropdown([
                       ['Paint', 'paint'],['d-Paint', 'd_paint']]),'TYPE')
     .appendField(new Blockly.FieldNumber(0, 0), "Fst")
     .appendField(new Blockly.FieldNumber(0, 0), "Snd")
     .appendField(new Blockly.FieldNumber(0, 0), "Thr")
     .appendField(new Blockly.FieldNumber(0, 0), "Fhr");
    
    this.setOutput(true, 'Paint'); 
    this.setColour(300);
       
  }
}
Blockly.Blocks['Paint2'] = {
  init: function() {

   this.appendDummyInput("Paint2")
        .appendField(new Blockly.FieldDropdown([
                       ['Paint', 'paint'],['d-Paint', 'd_paint']]),'TYPE')
        .appendField(new Blockly.FieldDropdown([
                       ['Red', '"0","3200","0","0"'],['Blue', '"-3200","0","0","3200"'],['Green','"3200","0","0","0"'],['Yellow', '"0","0","3200","0"'],
                       ['Orange','"0","1600","1600","0"'],['Cian','"0","0","0","3200"'],['Purple','"-1600","1600","0","1600"']]),'COLOUR')
    
    this.setOutput(true, 'Paint2'); 
    this.setColour(300);
       
  }
}
Blockly.Blocks['ActionR2'] = {
  init: function() {

   this.appendDummyInput("ActionR2")
        .appendField(new Blockly.FieldDropdown([
                       ['Emit Signal', 's_emit_signal'],['Emit CF', 's_emit_cf']]),'TYPE')
     .appendField(new Blockly.FieldTextInput("Signal ID"), "ID")
     .appendField(new Blockly.FieldNumber(0, 0), "Snd")
     .appendField(new Blockly.FieldDropdown([
                       ['Exact', 'exact'],['Area', 'area'],['Average', 'average']]),'eTYPE');
    
    this.setOutput(true, 'ActionR2'); 
    this.setColour(300);
       
  }
}
Blockly.Blocks['ActionR3'] = {
  init: function() {

   this.appendDummyInput("ActionR3")
      .appendField(new Blockly.FieldDropdown([
                       ['Absorb QS', 's_absorb_QS'],['Get QS', 's_get_QS']]),'TYPE')
      .appendField(new Blockly.FieldTextInput("Signal ID"), "ID")
      .appendField(new Blockly.FieldDropdown([
                       ['>', '>'],['<', '<']]),'COMPARISON')
     .appendField(new Blockly.FieldNumber(0, 0), "Snd")
     .appendField(new Blockly.FieldTextInput("PROTEIN"), "PROTEIN");
    
    this.setOutput(true, 'ActionR3'); 
    this.setColour(300);
       
  }
}
Blockly.Blocks['DumpSingle'] = {
  init: function() {

   this.appendDummyInput("DumpSingle")
       .appendField(new Blockly.FieldTextInput("Route"), "ROUTE")
       .appendField(new Blockly.FieldTextInput("File Name"), "FN")
       .appendField(new Blockly.FieldNumber(0, 0), "RT");
    
    
    this.setNextStatement(true,  ['Action','Signal_Settings','Signal','Nutrients']);
    this.setPreviousStatement(true,'DumpSingle');
    this.setColour(300);
       
  }
}
