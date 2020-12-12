Vue.component('modal', {
    template:/*html*/`
        <div>            
            <b-modal id="addModal" ref="modal" hide-footer title="Add Commodity">
                <b-form-group>
                    <label>
                    Hu Count
                        <b-form-input
                            id="hu_count"
                            v-model="new_row.hu_count"
                            ref="hucount"
                            >
                        </b-form-input>
                    </label>
                    <label>
                    Dimensions
                        <b-form-input
                            id="dimensions"
                            v-model="new_row.dimensions"
                            >
                        </b-form-input>
                    </label>
                    <label>
                    Weight
                        <b-form-input
                            id="weight"
                            v-model="new_row.weight"
                            >
                        </b-form-input>
                    </label>
                </b-form-group>

            <b-button variant="success" @click="addRow">Add Row</b-button> 
        </b-modal>

        </div>
    `,
    data() {
        return {
            new_row:
            {
                nmfc: '',
                nmfc_calculated: '',
                dimensions: '',
                hu_count: '',
                weight: '',
                description: '',
                contribution: '',
                oversize: ''
            }
        }
    },
    methods: {
        addRow: function () {
            if(this.$refs.hucount.value === ''){
                swal({
                    title: "Debes diligenciar al menos el primer campo.",
                    icon: "warning"
                })
            } else {
            this.$emit('add', { ...this.new_row })
            this.$refs.modal.hide()
            this.new_row.hu_count = ''
            this.new_row.dimensions = ''
            this.new_row.weight = ''
            }
        }
    },
    mounted() {

    }
})
