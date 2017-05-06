/**
 * @module ui/task-cell.reel
 * @requires montage/ui/component
 */
let { Component } = require("montage/ui/component");


/**
 * @class TaskCell
 * @extends Component
 */
exports.TaskCell = Component.specialize(/** @lends TaskCell# */ {
    constructor: {
        value: function TaskCell() {
            this.super();
        }
    }
});
