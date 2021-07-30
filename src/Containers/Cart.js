import React from "react";
import { useSelector } from "react-redux";
import { Card, Cart } from "../Components";
import * as ROUTES from "../Constants/routes";

export default function CartContainer() {
  const { listCart } = useSelector((state) => state.coursesReducer);

  return (
    <>
      <Cart.List>
        {listCart.map((item, index) => {
          return (
            <Cart.Item key={index}>
              <Cart.Wrapper display="block">
                <Cart.Link to="/">
                  <Cart.Image src={item.hinhAnh} />
                  <Cart.Wrapper display="block">
                    <Cart.Name>{item.tenKhoaHoc}</Cart.Name>
                    <Cart.Desc>{item.moTa}</Cart.Desc>
                  </Cart.Wrapper>
                </Cart.Link>
              </Cart.Wrapper>
            </Cart.Item>
          );
        })}
        <Cart.Wrapper display="flex" justify="center" align="center">
          {listCart.length < 1 ? (
            <div>
              <Cart.ImageNoCart>
                <span className="material-icons">remove_shopping_cart</span>{" "}
                Chưa có khoá học nào được đăng kí
              </Cart.ImageNoCart>
            </div>
          ) : (
            <Card.ButtonMore to={ROUTES.CART}>
              Xem khoá học đã đăng kí
            </Card.ButtonMore>
          )}
        </Cart.Wrapper>
      </Cart.List>
    </>
  );
}
