<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
import Products from "./components/Products.vue";
import ProductsJsonData from "./assets/products.json";
export default defineComponent({
  components: { AppHeader, Products },
  data() {
    return {
      ProductsData: ProductsJsonData,
    };
  },
  computed: {
    categories() {
      return this.ProductsData.map((p) => p.category).filter(
        (value, index, array) => array.indexOf(value) === index
      );
    },
  },
  methods: {
    //filterCategory:
  },
});
</script>

<template>
  <AppHeader :categories="categories" @filterCategory="filterCategory" />
  <Products :productsList="ProductsData"></Products>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: ’’;
  content: none;
}
/* remember to define visible focus styles! 
:focus{
  outline:?????;
} */

/* remember to highlight inserts somehow! */
ins {
  text-decoration: none;
}
del {
  text-decoration: line-through;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*------------------------------------*\
  $MAIN
\*------------------------------------*/

/* Product Layout */

.product-filter {
  display: flex;
  padding: 30px 0;
}

label {
  color: #666;
  font-size: 10px;
  font-weight: 500;
  line-height: 2em;
  text-transform: uppercase;
}
</style>

