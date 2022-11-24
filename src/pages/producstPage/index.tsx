import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalProduct from "../../components/ModalProduct";

// export interface IProductPageProps {
//   //   show: boolean;
// }

export default function ProductPage(): JSX.Element {
  const [show, setShow] = useState(false);

  //   const handleClose = () => {
  //     setShow(false);
  //   };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //   const handleCloseAndSubmit = (e: any) => {
  //     setShow(false);
  //   };
  //   const handleChangeData = (e: any) => {};
  return (
    <div
      style={{
        display: "flex",
        width: 500,
        height: 800,
        paddingTop: 30,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          background: "aqua",
          padding: 10,
          borderRadius: 20,
        }}
      >
        <h1 style={{ marginBottom: 0 }}>Product</h1>
        <div>
          <Button variant="primary" onClick={handleShow}>
            Add Product
          </Button>

          <ModalProduct show={show} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
