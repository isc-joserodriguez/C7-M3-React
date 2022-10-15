import { useEffect } from "react";
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButtons = ({ currency, amount, peliculas }) => {
  const style = { layout: "vertical" };
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <>
      {isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              console.log("orderId:", orderId);
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          // Petición para guardar los datos de la compra y limpiar el carrito
          // Stripe
          console.log(peliculas);
          return actions.order.capture().then(function () {
            console.log("data:", data);
          });
        }}
      />
    </>
  );
};

export default PaypalButtons;
