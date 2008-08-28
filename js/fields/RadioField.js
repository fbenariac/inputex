(function() {	
	var inputEx = YAHOO.inputEx, lang = YAHOO.lang, Event = YAHOO.util.Event, Dom = YAHOO.util.Dom;
/**
 * @class Create a radio button. Here are the added options :
 * <ul>
 *    <li>checked: boolean, initial state</li>
 *    <li>sentValues: couple of values that schould be returned by the getValue. (default: [true, false])</li>
 * </ul>
 * @extends inputEx.Field
 * @constructor
 * @param {Object} options inputEx.Field options object
 */
inputEx.Radio = function(options) {
	inputEx.Radio.superclass.constructor.call(this,options);
};
	
lang.extend(inputEx.Radio, inputEx.Field, 
/**
 * @scope inputEx.Radio.prototype   
 */
{
	   
	/**
	 * Adds the Radio button specific options
	 */
	setOptions: function() {
	   
	   this.options.className = this.options.className || 'inputEx-Field inputEx-Radio';
	   
	   inputEx.Radio.superclass.setOptions.call(this);
	   
	   this.sentValues = this.options.sentValues || [true, false];
	   this.checkedValue = this.sentValues[0];
	   this.uncheckedValue = this.sentValues[1];
	},
	   
	/**
	 * Render the checkbox and the hidden field
	 */
	renderComponent: function() {
	
	   this.el = inputEx.cn('input', {
	        type: 'radio', 
	        checked:(this.options.checked === false) ? false : true 
	   });
	   this.fieldContainer.appendChild(this.el);
	
	   this.label = inputEx.cn('label', {className: 'inputEx-radio-rightLabel'}, null, this.options.label || '');
	   this.fieldContainer.appendChild(this.label);
	
	   // Keep state of radio in a hidden field (format : this.checkedValue or this.uncheckedValue)
	   this.hiddenEl = inputEx.cn('input', {type: 'hidden', name: this.options.name || '', value: this.el.checked ? this.checkedValue : this.uncheckedValue});
	   this.fieldContainer.appendChild(this.hiddenEl);
	},
	   
	/**
	 * Clear the previous events and listen for the "change" event
	 */
	initEvents: function() {
	   Event.addListener(this.el, "change", this.onChange, this, true);	
	},
	   
	/**
	 * Function called when the checkbox is toggled
	 * @param {Event} e The original 'change' event
	 */
	onChange: function(e) {
	   this.hiddenEl.value = this.el.checked ? this.checkedValue : this.uncheckedValue;
	   
	   inputEx.Radio.superclass.onChange.call(this,e);
	},
	
	/**
	 * Get the state value
	 * @return {Any} one of [checkedValue,uncheckedValue]
	 */
	getValue: function() {
	      return this.el.checked ? this.checkedValue : this.uncheckedValue;
	},
	
	/**
	 * Set the value of the checkedbox
	 * @param {Any} value The value schould be one of [checkedValue,uncheckedValue]
	 */
	setValue: function(value) {
	   if (value===this.checkedValue) {
			this.hiddenEl.value = value;
			this.el.checked = true;
		}
	   else if (value===this.uncheckedValue) {
			this.hiddenEl.value = value;
			this.el.checked = false;
		}
		else {
		   throw new Error("inputEx.Radio.setValue: "+value+" schould be in ["+this.checkedValue+","+this.uncheckedValue+"]");
		}
	}
	
});   
	
/**
 * Register this class as "boolean" type
 */
inputEx.registerType("radio", inputEx.Radio);
	
})();