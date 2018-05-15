/**
 * Especificacion del modulo de nutrientes de GRO  sobre la plataforma GROCKLY
 * 
 */



Blockly.Blocks['Nutrients'] = {
  init: function() {
    this.appendDummyInput("Nutrients").setAlign(Blockly.ALIGN_CENTRE)
    .appendField("Nutrients");
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Nutrients Amount")
        .appendField(new Blockly.FieldNumber(0, 0), "NAM");
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE)  
        .appendField("Nutrient Consumption Rate")
        .appendField(new Blockly.FieldNumber(0, 0), "NCR");
        
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE)  
        .appendField("Nutrient Grid Length")
        .appendField(new Blockly.FieldNumber(0, 0), "NGL");

         this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE)  
        .appendField("Nutrient Grid Cell Size")
        .appendField(new Blockly.FieldNumber(0, 0), "NGCS")
        .appendField("Nutrient Consumption Mode")
        .appendField(new Blockly.FieldDropdown([
                       ['0', '0'],['1', '1'],['2', '2']]),'NCM');
    
    this.setOutput(false, 'Nutrients');
    this.setNextStatement(true,  ['Action','Signal_Settings','Signal']);
    this.setPreviousStatement(true,'Nutrients');
    
    
    this.setColour(230);
    
  }
};