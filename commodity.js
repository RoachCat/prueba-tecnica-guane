Vue.component('commodity', {
    props: ['json_data'],
    template: /*html*/`
    <div class="mx-auto commodity card">
            <div class="commodity__div-buttons">
                <div class="commodity__buttons">
                    <b-button variant="success" v-b-modal.addModal>Add Row</b-button> 
                    <b-button variant="danger" @click="deleteRows">Delete</b-button> 
                </div>
            </div>

        <b-table striped hover responsive :fields="fields" :items="commodity_data">

            <template #head(index)="data">
                <input type="checkbox" @click="selectAll" ref="checkAll">
            </template>

            <template #cell(index)="data">        
                <input type="checkbox" @click="selectRows(data.index)">
            </template> 

        </b-table>

        <modal id="addModal" @add="addData" :commodity_data="commodity_data"></modal>
        
    </div>
    `,
    data() {
        return {
            commodity_data: [],
            table: '',
            checkboxes: '',
            fields: [
                {
                    key: 'index'
                },
                {
                    key: 'hu_count',
                    label: 'Hu Count'
                },
                {
                    key: 'dimensions',
                    label: 'Dimensions'
                },
                {
                    key: 'weight',
                    label: 'Weight'
                }
            ]
        }
    },
    methods: {
        selectRows: function (e) {
            this.commodity_data[e].checked = !this.commodity_data[e].checked
        },
        deleteRows: function () {
            for (let i = 0; i < this.commodity_data.length; i++) {
                if (this.commodity_data[i].checked) {
                    this.commodity_data.splice(i, 1)
                    i--
                }
            }
            this.checkboxes.forEach(element => {
                element.checked = false
            });
        },
        selectAll: function () {
            this.commodity_data.forEach(element => {
                element.checked = !element.checked
            });

            if (this.$refs.checkAll.checked) {
                this.checkboxes.forEach(element => {
                    element.checked = true
                });
            } else {
                this.checkboxes.forEach(element => {
                    element.checked = false
                });
            }
        },
        addData(data) {
            this.commodity_data.push(data)
        }
    },
    created: function () {
        this.commodity_data = this.json_data.commodity
    },
    mounted() {
        /* Este fragmento de código se encarga de controlar a nivel visual los checkboxes, haciendo que
        su comportamiento sea el correcto. Intenté traer la tabla con los refs, pero hacía referencia
        a un VueComponent. Desconozco si existe otra forma de hacerlo en una tabla de Bootstrap Vue. */
        const table = document.querySelector('table')
        this.table = table
        this.checkboxes = this.table.querySelectorAll('input')
    },
    updated() {
        /* Al igual que en el fragmento anterior, controla el comportamiento visual de los checkboxes
        al actualizar el array al detectar un cambio. */
        this.checkboxes = this.table.querySelectorAll('input')
    }
})