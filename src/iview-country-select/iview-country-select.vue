<template>
    <div>
        <i-select :model.sync="result" filterable>
            <i-option v-for="country in countries" :value="country.code" :label="country.name">
                <span class="flag-icon" :class="[ `flag-icon-${country.code.toLowerCase()}` ]"></span>
                <span class="country-name" style="padding-left: 10px">{{ country.name }}</span>
                <span class="country-code">{{ country.code }}</span>
            </i-option>
        </i-select>
    </div>
</template>

<script>
import countries from './countries';

export default {
    props: {
        result: {
            type: String
        }
    },

    data () {
        return {
            countries
        };
    }
};
</script>

<style scoped>
.country-code {
    color: #9ea7b4;
    float: right;
}
</style>
