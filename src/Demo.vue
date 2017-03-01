<template>
    <div id="demo">
        <iview-country-select
            :result.sync="result">
        </iview-country-select>

        Select: {{ result }}
    </div>
</template>

<script>
import iviewCountrySelect from './iview-country-select';

export default {
    components: { iviewCountrySelect },

    data () {
        return {
            result: null
        };
    }
};
</script>

<style>
#demo {
    max-width: 400px;
    padding: 20px;
}
</style>
