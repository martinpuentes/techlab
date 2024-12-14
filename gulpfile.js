'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiPaper-root' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'navbar-brand' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'container-nav-second' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'nav-coll' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'navbar-toggler' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiInputBase-root' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiPopover-root' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiMenu-paper' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiCheckbox-colorSecondary' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'Mui-checked' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiSelect-icon' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiInput-formControl' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiInput-underline' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiSelect-select' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'carousel-control-next-icon' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'carousel-control-prev-icon' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'sr-only' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiPaper-elevation1' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiCardActions-spacing' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'dropdown-menu' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'collasible-nav-dropdown' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'react-multi-carousel-item' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] src/webparts/techLab/styles/App.scss: filename should end with module.sass or module.scss`);
build.addSuppression(`Warning - [sass] The local CSS class 'carousel-item-next' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'carousel-item-prev' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'carousel-item-left' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'carousel-item-right' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'dropdown-item' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiInput-root' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'Mui-focused' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiInputBase-formControl' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiInputLabel-shrink' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiSelect-iconOpen' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiPopover-paper' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiFormLabel-filled' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiButtonBase-root' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiListItem-root' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiMenuItem-root' is not camelCase and will not be type-safe.`);
build.addSuppression(`Warning - [sass] The local CSS class 'MuiCheckbox-root' is not camelCase and will not be type-safe.`);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function() {
    var result = getTasks.call(build.rig);

    result.set('serve', result.get('serve-deprecated'));

    return result;
};

build.initialize(require('gulp'));