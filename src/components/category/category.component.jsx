import React from "react";
import "./category.styles.scss";
import Item from "../items/items.component";
class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          categoryName: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          categoryName: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          categoryName: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          categoryName: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          categoryName: "men",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="category">
        {this.state.categories.map(({ categoryName, imageUrl, id, size }) => (
          <Item key={id} imageUrl={imageUrl} title={categoryName} size={size} />
        ))}
      </div>
    );
  }
}

export default Category;
