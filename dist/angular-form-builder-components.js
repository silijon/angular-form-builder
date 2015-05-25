(function() {
  angular.module('builder.components', ['builder', 'validator.rules']).config([
    '$builderProvider', function($builderProvider) {
      $builderProvider.registerComponent('textInput', {
        group: 'Default',
        label: 'Text Input',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        validationOptions: [
          {
            label: 'none',
            rule: '/.*/'
          }, {
            label: 'number',
            rule: '[number]'
          }, {
            label: 'email',
            rule: '[email]'
          }, {
            label: 'url',
            rule: '[url]'
          }
        ],
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Placeholder</label>\n        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required</label>\n    </div>\n    <div class=\"form-group\" ng-if=\"validationOptions.length > 0\">\n        <label class='control-label'>Validation</label>\n        <select ng-model=\"$parent.validation\" class='form-control' ng-options=\"option.rule as option.label for option in validationOptions\"></select>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' title='save'   ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' title='cancel' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' title='delete' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('textArea', {
        group: 'Default',
        label: 'Text Area',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <textarea type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" rows='6' placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Placeholder</label>\n        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required</label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' title='save'   ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' title='cancel' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' title='delete' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('checkbox', {
        group: 'Default',
        label: 'Checkbox',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: [
          {
            value: 'v1',
            label: 'value one'
          }, {
            value: 'v2',
            label: 'value two'
          }
        ],
        arrayToText: true,
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input type='hidden' ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\"/>\n        <div class='checkbox' ng-repeat=\"opt in options track by $index\">\n            <!--<label><input type='checkbox' ng-model=\"$parent.inputArray[$index]\" value='{{ opt.value }}'/>-->\n            <label><input type='checkbox' ng-model=\"$parent.inputArray[$index]\" />\n                {{opt.label}}\n            </label>\n        </div>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <hr>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <hr>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n    <hr>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <ol class='fb-flow-container' ng-model=\"options\">\n            <li class=\"fb-li\" ng-repeat=\"opt in options track by $index\">\n                <label class='control-label' title=\"displayed in data collection\">Label:</label>\n                <input ng-model=\"opt.label\" type=\"text\" class='form-control fb-subinput'/>\n                <label class='control-label' title=\"displayed in output excel file\">Output:</label>\n                <span class='clear:both'></span>\n                <input ng-model=\"opt.value\" type=\"text\" class='form-control fb-subinput'/>\n                <i class=\"fa-times fa fb-remove\" title=\"Remove\" ng-click=\"options.splice($index, 1)\"></i>\n                <label ng-click=\"options.splice($index, 1)\" class=\"control-label fb-remove\">&nbsp;remove</label>\n                <hr>\n            </li>\n            <li class=\"fb-li\">\n                <label class='control-label'>Label:</label>\n                <input ng-model=\"newLab\" placeholder=\"New Label\" class=\"form-control fb-subinput\"></input>\n                <label class='control-label'>Output:</label>\n                <input ng-model=\"newVal\" placeholder=\"New Value\" class=\"form-control fb-subinput\"></input>\n                <i class=\"fa-plus fa fb-add\" title=\"Add\" ng-click=\"options.push({label: newLab, value: newVal}); newVal=null; newLab=null;\"></i>\n                <label ng-click=\"options.push({label: newLab, value: newVal}); newVal=null; newLab=null;\" class=\"control-label fb-add\">&nbsp;add</label>\n            </li>\n        </ol>\n    </div>\n    <div class='form-group'>\n        <input type='submit' title='save'   ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' title='cancel' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' title='delete' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      $builderProvider.registerComponent('radio', {
        group: 'Default',
        label: 'Radio',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: [
          {
            value: 'v1',
            label: 'value one'
          }, {
            value: 'v2',
            label: 'value two'
          }
        ],
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <div class='radio' ng-repeat=\"item in options track by $index\">\n            <label><input name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" value='{{item.value}}' type='radio'/>\n                {{item.label}}\n            </label>\n        </div>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <hr>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <hr>                \n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n    <hr/>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <ol class='fb-flow-container' ng-model=\"options\">\n            <li class=\"fb-li\" ng-repeat=\"opt in options track by $index\">\n                <label class='control-label' title=\"displayed in data collection\">Label:</label>\n                <input ng-model=\"opt.label\" type=\"text\" class='form-control fb-subinput'/>\n                <label class='control-label' title=\"displayed in output excel file\">Value:</label>\n                <input ng-model=\"opt.value\" type=\"text\" class='form-control fb-subinput'/>\n                <span class='clear:both'></span>\n                <i class=\"fa-times fa fb-remove\" title=\"Remove\" ng-click=\"options.splice($index, 1)\"></i>\n                <label ng-click=\"options.splice($index, 1)\" class=\"control-label fb-remove\">&nbsp;remove</label>\n                <hr>\n            </li>\n            <li class=\"fb-li\">\n                <label class='control-label'>Label:</label>\n                <input ng-model=\"newLab\" placeholder=\"Option Label\" class=\"form-control fb-subinput\"></input>\n                <label class='control-label'>Value:</label>\n                <input ng-model=\"newVal\" placeholder=\"Option Value\" class=\"form-control fb-subinput\"></input>\n                <i class=\"fa-plus fa fb-add\" title=\"Add\" ng-click=\"options.push({label: newLab, value: newVal}); newVal=null; newLab=null;\"></i>\n                <label ng-click=\"options.push({label: newLab, value: newVal}); newVal=null; newLab=null;\" class=\"control-label fb-add\">&nbsp;add</label>\n            </li>\n        </ol>\n    </div>\n    <div class='form-group'>\n        <input type='submit' title='save'   ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' title='cancel' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' title='delete' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
      return $builderProvider.registerComponent('select', {
        group: 'Default',
        label: 'Select',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: [
          {
            value: 'v1',
            label: 'value one'
          }, {
            value: 'v2',
            label: 'value two'
          }
        ],
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <select ng-options=\"opt.value as opt.label for opt in options\" id=\"{{formName+index}}\" class=\"form-control\"\n            ng-model=\"inputText\" />\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <hr>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <hr>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n    <hr/>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label><hr>\n        <ol class='fb-flow-container' ng-model=\"options\">\n            <li class=\"fb-li\" ng-repeat=\"opt in options track by $index\">\n                <label class='control-label' title=\"displayed in data collection\">Label:</label>\n                <input ng-model=\"opt.label\" type=\"text\" class='form-control fb-subinput'/>\n                <label class='control-label' title=\"displayed in output excel file\">Value:</label>\n                <input ng-model=\"opt.value\" type=\"text\" class='form-control fb-subinput'/>\n                <span class='clear:both'></span>\n                <i class=\"fa-times fa fb-remove\" title=\"Remove\" ng-click=\"options.splice($index, 1)\"></i>\n                <label ng-click=\"options.splice($index, 1)\" class=\"control-label fb-remove\">&nbsp;remove</label>\n                <hr>\n            </li>\n            <li class=\"fb-li\">\n                <label class='control-label'>Label:</label>\n                <input ng-model=\"newLab\" placeholder=\"New Option Label\" class=\"form-control fb-subinput\"></input>\n                <label class='control-label'>Value:</label>\n                <input ng-model=\"newVal\" placeholder=\"New Option Value\" class=\"form-control fb-subinput\"></input>\n                <i class=\"fa-plus fa fb-add\" title=\"Add\" ng-click=\"options.push({label: newLab, value: newVal}); newVal=null; newLab=null;\"></i>\n                <label ng-click=\"options.push({label: newLab, value: newVal}); newVal=null; newLab=null;\" class=\"control-label fb-add\">&nbsp;add</label>\n            </li>\n        </ol>\n    </div>\n    <div class='form-group'>\n        <input type='submit' title='save'   ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' title='cancel' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' title='delete' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });
    }
  ]);

}).call(this);
