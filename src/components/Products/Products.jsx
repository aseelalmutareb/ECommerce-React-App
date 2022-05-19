import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "70€",
    image:
      "https://assets.reebok.com/images/w_600,f_auto,q_auto/7ec1655ed236429ab501ab03014ebeda_9366/Forever_Floatride_Energy_2_Women's_Running_Shoes_Black_EG2119_03_standard.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    price: "999€",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
