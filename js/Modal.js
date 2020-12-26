"use strict";
Vue.component("modal", {
    props: {
        dados: { type: Array, default: null, required: false },
    },
    data: function () {
        return {
            show: false,
        };
    },
    methods: {
        close() {
            this.show = false;
        },
        open() {
            this.show = true;
        },
    },
    template: `
    <transition name="slide-fade">
        <div class="modal" v-show="show">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </transition>
    `,
});
