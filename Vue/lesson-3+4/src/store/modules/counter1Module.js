export const counter1Module = {
    // state: {
    //     count: 0
    // },
    namespaced: true,
    state: () => ({
        count: 0
    }),
    mutations: {
        increment(state, arg) {
            // state.count = arg ? state.count + arg : state.count++;
            // 🖗 simplified record
            console.log(state);
            state.count += arg || 1;
        }
    },
    actions: {
        inc() {
            // console.log(this);

            this.commit('counter1/increment');
        },
        incCustom(context, value) {
            console.log(value);

            context.commit('increment', value);
        }
    },
    getters: {
        counterFormatted(store) {
            return `Current Counter value is ${store.count}`;
        }
    }
};
