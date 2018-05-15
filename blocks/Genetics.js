/**
 * Clase principal donde se encuentra la implementacion de todos los bloques geneticos 
 * que se utilizan en GROCKLY.
 * 
 */
Blockly.Blocks['Experiment'] = {
  init: function() {
    this.appendStatementInput("Experiment") 
        .appendField('Simulation block')
        .setCheck(["EColi"]);
        this.appendDummyInput()
        .appendField("dt")
        .appendField(new Blockly.FieldNumber(0,0), "dt")
        .appendField("Max population")
        .appendField(new Blockly.FieldNumber(0,0), "Mppl");

    this.setNextStatement(true, ['Action','Signal_Settings','Nutrients','DumpSingle']);
    this.setPreviousStatement(false, ['Experiment']); 

    this.setColour(230);
    
  }
};
Blockly.Blocks['Ecoli'] = { 
  init: function() {
    this.appendStatementInput("Ecoli") 
        .appendField('Ecoli')
        .setCheck(['Plasmid']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Name"), "NAME");
    this.appendDummyInput()
        .appendField('N Cells')
        .appendField(new Blockly.FieldNumber(0,0), "Ncells");

    this.appendDummyInput()
        .appendField('X')
        .appendField(new Blockly.FieldNumber(0,0), "x")
        .appendField('Y')
        .appendField(new Blockly.FieldNumber(0,0), "y");

    this.appendDummyInput()
        .appendField('Radio')
        .appendField(new Blockly.FieldNumber(0,0), "Radius");

     this.setPreviousStatement(true, ['Experiment','EColi']);
     this.setNextStatement(true, 'EColi');
    
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['Plasmid'] = {
  init: function() {
    this.appendStatementInput("Plasmid")
        .appendField("Plasmid")
        .setCheck(["Operon"])
        .appendField(new Blockly.FieldTextInput("Name"), "NAME");
    this.setNextStatement(true, 'Plasmid');
    
    this.setPreviousStatement(true, 'Plasmid');
       
    this.setColour(120);
    
    
  }
};
Blockly.Blocks['Operon'] = {
  init: function() {
    this.appendValueInput("Operon").setAlign(Blockly.ALIGN_CENTRE) 
        .setCheck(["Promoter"])
        .appendField("Operon")
        .appendField(new Blockly.FieldTextInput("Name"), "NAME");
    this.appendValueInput("NAME").setAlign(Blockly.ALIGN_CENTRE) 
        .setCheck(['Protein'])
        .appendField("Noise up")
        .appendField(new Blockly.FieldNumber(0, 0), "Nup")
        .appendField("Noise Down")    
        .appendField(new Blockly.FieldNumber(0, 0), "Ndown")
        .appendField("Time Noise")    
        .appendField(new Blockly.FieldNumber(0, 0), "Tnoise");
    
    this.setPreviousStatement(true, ['Operon']);
    this.setNextStatement(true, ['Operon']);
    
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['Promoter'] = {
  init: function() {
    this.appendValueInput("ProteinL")
        .appendField("TF")
        .setCheck(["ProteinL"]);
    this.appendDummyInput("Promoter")
        .appendField("Gate")
        .appendField(new Blockly.FieldDropdown([
                       ['TRUE', 'TRUE'],['FALSE', 'FALSE'],['YES', 'YES'],['NOT', 'NOT'],
                       ['AND', 'AND'],['OR', 'OR'],['XOR', 'XOR sxs']]),'GATE');   
    this.setOutput(true, 'Promoter');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['Protein'] = {
  init: function() {

    this.appendValueInput("Protein").setAlign(Blockly.ALIGN_CENTRE)   
        .setCheck("Protein")
        .appendField("Protein")
        .appendField(new Blockly.FieldTextInput("Name"), "NAME");
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Tact")
        .appendField(new Blockly.FieldNumber(0, 0), "Act")
        .appendField("Tdeac")
        .appendField(new Blockly.FieldNumber(0, 0), "Deac");
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE)  
        .appendField("Var Up")
        .appendField(new Blockly.FieldNumber(0, 0), "Vup")
        .appendField("Var Down")
        .appendField(new Blockly.FieldNumber(0, 0), "Vdown");
     
    this.setOutput(true, 'Protein');
    this.setColour(230);
    
  }
};
Blockly.Blocks['ProteinL'] = {
  init: function() {

    this.appendValueInput("ProteinL").setAlign(Blockly.ALIGN_CENTRE)   
        .setCheck("ProteinL")
        .appendField(new Blockly.FieldTextInput("Name"), "NAME");
        
     
    this.setOutput(true, 'ProteinL');
    this.setColour(180);
    
  }
};
