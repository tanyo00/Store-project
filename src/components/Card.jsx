import React from "react";
import styled from "styled-components";
import { Badge } from "react-bootstrap";
import store from "../store";
import { Button } from "react-bootstrap";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Sizes from "./Sizes";

const MyButton = styled(Button)`
  width: 94%;
  border-radius: 0px;
  height: 8vh;
  margin-bottom: 10px;
  background-color: #141414;
  border: none;
  color: white;
  &:hover {
    box-shadow: 3px 3px 3px #ccc;
  }
  cursor: pointer;
`;

const Card = styled.div`
  height: "300px";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export default function Item(props) {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState("");
  const addItem = () => {
    store.dispatch({
      type: "ADD_ITEM",
      payload: {
        brand: props.brand,
        type: props.type,
        price: props.price,
        image: props.pic,
        size: size,
      },
    });
    setOpen(true);
    console.log(store.getState());
    localStorage.setItem("dataItems", JSON.stringify(store.getState()));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Card>
        <img
          alt="tshirt"
          width="90%"
          height="300px"
          style={{ margin: "20px" }}
          src={props.pic}
          onClick={() => {
            window.open(`${props.pic}`, "_self");
          }}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h5>{props.brand}</h5>
          <h5>
            <Badge
              variant="primary"
              style={{ padding: "5px", marginLeft: "10px" }}
            >
              {props.new}
            </Badge>
          </h5>
        </div>
        <p>{props.type}</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sizes size={size} changeSize={setSize} />
        </div>
        <hr width="50%" color="dodgerblue" />
        <p>
          <b>{props.price}</b>
        </p>
        <MyButton onClick={addItem}>Add to cart</MyButton>

        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            You successfully added item to the shopping cart!
          </Alert>
        </Snackbar>
      </Card>
    </>
  );
}
