'use strict';
Vue.component('loader', {
    data: function () {
        return {
            show: false,
        };
    },
    template: `
        <div class="page-loader">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        </div>
    `,
});
