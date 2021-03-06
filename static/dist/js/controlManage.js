(function($, root) {
    function controlManage(length) {
        this.index = 0;
        this.length = length;
    }
    controlManage.prototype = {
        prev: function() {
            return this.getIndex(-1);
        },
        next: function() {
            return this.getIndex(1);
        },
        getIndex: function(val) {
            var index = this.index;
            var length = this.length;
            var curIndex = (index + val + length) % length;
            this.index = curIndex;
            return curIndex;
        }
    }
    root.controlManage = controlManage;
})(window.Zepto, window.player)