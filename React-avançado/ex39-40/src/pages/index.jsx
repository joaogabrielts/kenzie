import { useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
import formatValue from "../utils/formatValue";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
//import Image from 'next/image';
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart,"cart");

  // const classes = useStyles()
  const history = useNavigate();

  const subtotal = formatValue(
    cart.reduce((product, acc) => acc.price + product, 0).toFixed(2)
  );

  if (!cart.length) {
    return (
      <>
        <h1>Sem produtos no carrinho, que tal ir as compras ?</h1>
        <Button
          onClick={() => history.push("/")}
          variant="contained"
          color="red"
          size="large"
        >
          Bora!
        </Button>
      </>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Produto</strong>
              </TableCell>
              <TableCell>{"  "}</TableCell>
              <TableCell align="right">
                <strong>Preço</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <TableRow key={product.title}>
                <TableCell>
                  <img src={product.img} alt="Produto" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell align="right">{product.priceFormatted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Card>
        <CardContent>
          <Typography variant="h6" component="strong">
            <strong>Resumo do pedido</strong>
          </Typography>
          <h4>{cart.length} Produtos</h4>
          <h4>{subtotal}</h4>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="red"
            size="large"
            onClick={() => history.push("")}
          >
            Finalizar o pedido
          </Button>
          <Link to="/login">
          Concluir pedido 
          </Link>
        </CardActions>
      </Card>
    </>
  );
}


export default Cart;
