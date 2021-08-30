<template>
    <ag-grid-vue style="width: 500px; height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>
</template>

<script>
    import {watch} from 'vue';
    import { AgGridVue } from "ag-grid-vue3";
    import buttonAccount from "./components/buttonAccout.vue"
    import {updateComponentCount} from './store/myStorage'; 

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null
            }
        },
        components: {
            AgGridVue, 
            buttonAccount
        },
        beforeMount() {
            this.columnDefs = [
                { field: 'make' },
                { field: 'model' },
                { field: 'price' }, 
                {field: 'button', cellRendererFramework: 'buttonAccount'}
            ];

            this.rowData = [
                { make: 'Toyota', model: 'Celica', price: 35000 },
                { make: 'Ford', model: 'Mondeo', price: 32000 },
                { make: 'Porsche', model: 'Boxter', price: 72000 }
            ];
        }, 
        setup(){
          watch(updateComponentCount, alertParent)
          watch (()=>{console.log('update the thing', updateComponentCount)})
          function alertParent (){
            console.log ("I'm the parent and I'm warning you it worked :)")
          }
        }
    }
</script>
<style lang="scss">
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
