# iview-country-select

> A iView component to select countries.

**this component only support Vue 1 and iView 1 currently**

## Screenshot

![]()

## Use in iView Project

1. install package and dependencies via npm
    ``` bash
    npm install iview-country-select flag-icon-css iview --save-dev
    ```

2. add loaders to webpack

    ```js
    module: {
        loaders: [
            {
                test: /iview-country-select.*?js$/,
                loader: 'babel'
            },
        ]
    }
    ```

3. import lib in vue file

    ```vue
    import iviewCountrySelect from 'iview-country-select';

    export default {
        components: { iviewCountrySelect },
    };
    ```

4. bind result

    ```vue
    <iview-country-select
        :result.sync="result">
    </iview-country-select>
    ```

## Development Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```