angular.module 'builder.components', ['builder', 'validator.rules']

.config ['$builderProvider', ($builderProvider) ->
    # ----------------------------------------
    # text input
    # ----------------------------------------
    $builderProvider.registerComponent 'textInput',
        group: 'Default'
        label: 'Text Input'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        validationOptions: [
            {label: 'none', rule: '/.*/'}
            {label: 'number', rule: '[number]'}
            {label: 'email', rule: '[email]'}
            {label: 'url', rule: '[url]'}
        ]
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{label}}</label>
                <div class="col-sm-8">
                    <input type="text" ng-model="inputText" validator-required="{{required}}" validator-group="{{formName}}" id="{{formName+index}}" class="form-control" placeholder="{{placeholder}}"/>
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Placeholder</label>
                    <input type='text' ng-model="placeholder" class='form-control'/>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="required" />
                        Required</label>
                </div>
                <div class="form-group" ng-if="validationOptions.length > 0">
                    <label class='control-label'>Validation</label>
                    <select ng-model="$parent.validation" class='form-control' ng-options="option.rule as option.label for option in validationOptions"></select>
                </div>

                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """

    # ----------------------------------------
    # Text area
    # ----------------------------------------
    $builderProvider.registerComponent 'textArea',
        group: 'Default'
        label: 'Text Area'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{label}}</label>
                <div class="col-sm-8">
                    <textarea type="text" ng-model="inputText" validator-required="{{required}}" validator-group="{{formName}}" id="{{formName+index}}" class="form-control" rows='6' placeholder="{{placeholder}}"/>
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Placeholder</label>
                    <input type='text' ng-model="placeholder" class='form-control'/>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="required" />
                        Required</label>
                </div>

                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """

    # ----------------------------------------
    # checkbox
    # ----------------------------------------
    $builderProvider.registerComponent 'checkbox',
        group: 'Default'
        label: 'Checkbox'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        options: [ 
            { value:'v1', label:'value one' }, 
            { value:'v2', label:'value two' } 
        ]
        arrayToText: yes
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{label}}</label>
                <div class="col-sm-8">
                    <input type='hidden' ng-model="inputText" validator-required="{{required}}" validator-group="{{formName}}"/>
                    <div class='checkbox' ng-repeat="opt in options track by $index">
                        <!--<label><input type='checkbox' ng-model="$parent.inputArray[$index]" value='{{ opt.value }}'/>-->
                        <label><input type='checkbox' ng-model="$parent.inputArray[$index]" />
                            {{opt.label}}
                        </label>
                    </div>
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <hr>
                <div class="form-group">
                    <ol ng-model="options">
                        <li class="fb-li" ng-repeat="opt in options track by $index">
                            <label class='control-label' title="displayed in data collection">Option Label</label>
                            <input ng-model="opt.label" type="text" class='form-control fb-subinput'/>
                            <label class='control-label' title="displayed in output excel file">Output Value</label>
                            <input ng-model="opt.value" type="text" class='form-control fb-subinput'/>
                            <i class="fa-times fa fb-remove" title="Remove" ng-click="options.splice($index, 1)"></i><label class="control-label fb-remove">&nbsp;Remove</label>
                            <hr>
                        </li>
                        <div class="fb-li">
                            <label class='control-label'>Option Label</label>
                            <input ng-model="newLab" placeholder="New Option Label" class="form-control fb-subinput"></input>
                            <label class='control-label'>Output Value</label>
                            <input ng-model="newVal" placeholder="New Option Value" class="form-control fb-subinput"></input>
                            <i class="fa-plus fa fb-add" title="Add" ng-click="options.push({label: newLab, value: newVal}); newVal=null; newLab=null;"></i><label class="control-label fb-add">&nbsp;Add</label>
                        </div>
                        <hr>
                    </ol>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="required" />
                        Required
                    </label>
                </div>
                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """

    # ----------------------------------------
    # radio
    # ----------------------------------------
    $builderProvider.registerComponent 'radio',
        group: 'Default'
        label: 'Radio'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        options: [ 
            { value:'v1', label:'value one' }, 
            { value:'v2', label:'value two' } 
        ]
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label" ng-class="{'fb-required':required}">{{label}}</label>
                <div class="col-sm-8">
                    <div class='radio' ng-repeat="item in options track by $index">
                        <label><input name='{{formName+index}}' ng-model="$parent.inputText" validator-group="{{formName}}" value='{{item.value}}' type='radio'/>
                            {{item.label}}
                        </label>
                    </div>
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <hr>
                <div class="form-group">
                    <ol ng-model="options">
                        <li class="fb-li" ng-repeat="opt in options track by $index">
                            <label class='control-label' title="displayed in data collection">Option Label</label>
                            <input ng-model="opt.label" type="text" class='form-control fb-subinput'/>
                            <label class='control-label' title="displayed in output excel file">Output Value</label>
                            <input ng-model="opt.value" type="text" class='form-control fb-subinput'/>
                            <i class="fa-times fa fb-remove" title="Remove" ng-click="options.splice($index, 1)"></i><label class="control-label fb-remove">&nbsp;Remove</label>
                            <hr>
                        </li>
                        <div class="fb-li">
                            <label class='control-label'>Option Label</label>
                            <input ng-model="newLab" placeholder="New Option Label" class="form-control fb-subinput"></input>
                            <label class='control-label'>Output Value</label>
                            <input ng-model="newVal" placeholder="New Option Value" class="form-control fb-subinput"></input>
                            <i class="fa-plus fa fb-add" title="Add" ng-click="options.push({label: newLab, value: newVal}); newVal=null; newLab=null;"></i><label class="control-label fb-add">&nbsp;Add</label>
                        </div>
                        <hr>
                    </ol>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="required" />
                        Required
                    </label>
                </div>
                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """

    # ----------------------------------------
    # select
    # ----------------------------------------
    $builderProvider.registerComponent 'select',
        group: 'Default'
        label: 'Select'
        description: 'description'
        placeholder: 'placeholder'
        required: no
        options: [ 
            { value:'v1', label:'value one' }, 
            { value:'v2', label:'value two' } 
        ]
        template:
            """
            <div class="form-group">
                <label for="{{formName+index}}" class="col-sm-4 control-label">{{label}}</label>
                <div class="col-sm-8">
                    <select ng-options="opt.value as opt.label for opt in options" id="{{formName+index}}" class="form-control"
                        ng-model="inputText" />
                    <p class='help-block'>{{description}}</p>
                </div>
            </div>
            """
        popoverTemplate:
            """
            <form>
                <div class="form-group">
                    <label class='control-label'>Label</label>
                    <input type='text' ng-model="label" validator="[required]" class='form-control'/>
                </div>
                <div class="form-group">
                    <label class='control-label'>Description</label>
                    <input type='text' ng-model="description" class='form-control'/>
                </div>
                <hr>
                <div class="form-group">
                    <ol ng-model="options">
                        <li class="fb-li" ng-repeat="opt in options track by $index">
                            <label class='control-label' title="displayed in data collection">Option Label</label>
                            <input ng-model="opt.label" type="text" class='form-control fb-subinput'/>
                            <label class='control-label' title="displayed in output excel file">Output Value</label>
                            <input ng-model="opt.value" type="text" class='form-control fb-subinput'/>
                            <i class="fa-times fa fb-remove" title="Remove" ng-click="options.splice($index, 1)"></i><label class="control-label fb-remove">&nbsp;Remove</label>
                            <hr>
                        </li>
                        <div class="fb-li">
                            <label class='control-label'>Option Label</label>
                            <input ng-model="newLab" placeholder="New Option Label" class="form-control fb-subinput"></input>
                            <label class='control-label'>Output Value</label>
                            <input ng-model="newVal" placeholder="New Option Value" class="form-control fb-subinput"></input>
                            <i class="fa-plus fa fb-add" title="Add" ng-click="options.push({label: newLab, value: newVal}); newVal=null; newLab=null;"></i><label class="control-label fb-add">&nbsp;Add</label>
                        </div>
                        <hr>
                    </ol>
                </div>
                <div class="checkbox">
                    <label>
                        <input type='checkbox' ng-model="required" />
                        Required
                    </label>
                </div>
                <hr/>
                <div class='form-group'>
                    <input type='submit' ng-click="popover.save($event)" class='btn btn-primary' value='Save'/>
                    <input type='button' ng-click="popover.cancel($event)" class='btn btn-default' value='Cancel'/>
                    <input type='button' ng-click="popover.remove($event)" class='btn btn-danger' value='Delete'/>
                </div>
            </form>
            """
]
