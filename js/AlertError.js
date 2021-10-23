"use strict";
Vue.component("alert-error", {
    props: {
    },
    data: function () {
        return {
            msg: "",
            show: false,
        };
    },
    methods: {
        alert(msg, duration=5){
            this.msg = msg;
            this.show = true;
            setTimeout(() => {
                this.show=false;
            }, duration * 1000);
        }
    },
    template: `
    <transition name="slide-fade">
        <div class="alert error top right" v-if="show" @click="show=false">
            <p>{{msg}}</p>
        </div>
    </transition>
    `,
});
