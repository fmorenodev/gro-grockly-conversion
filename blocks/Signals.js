/**
 * Clase principal donde se encuentra la implementacion de todos los bloques relativos 
 * a las Senales  que se utilizan en GROCKLY.
 * 
 */
Blockly.Blocks['Signal_Settings'] = {
  init: function() {
  this.appendDummyInput("Signal_Settings")
      .appendField("Draw Signals")
      .appendField(new Blockly.FieldDropdown([
                       ['ON', '1.0'],['OFF','0.0']]),'POWER');
  this.appendDummyInput("Signal_Settings")
      .appendField("Length")
      .appendField(new Blockly.FieldNumber(0,0), "LENGTH")
      .appendField("Cell Size")
      .appendField(new Blockly.FieldNumber(0,0), "SIZE")
      .appendField("Neighborhood")
      .appendField(new Blockly.FieldNumber(0,0), "NBH");

  this.setNextStatement(true, ['Signal']);
  this.setPreviousStatement(true,['Signal_Settings'] ); 
  this.setColour(300);
  }
}



Blockly.Blocks['Signal'] = {
  init: function() {
  this.appendDummyInput("Signal")
      .appendField("Signal")
      .appendField(new Blockly.FieldTextInput("Name"), "NAME")
      .appendField("kDiff")
      .appendField(new Blockly.FieldNumber(0,0), "KDIFF")
      .appendField("kDeg")
      .appendField(new Blockly.FieldNumber(0,0), "KDEG");
        
  this.setNextStatement(true,  ['Action','Signal']);
  this.setPreviousStatement(true, ['Signal_Settings','Signal']);
  this.setColour(300);
  }
}