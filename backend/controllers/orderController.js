import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// CHECK STRIPE KEY
console.log(process.env.STRIPE_SECRET_KEY);

// STRIPE
const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY
);

// FRONTEND URL
const frontend_url = "http://localhost:5173";

// PLACE ORDER
const placeOrder = async (req, res) => {

  try {

    // CREATE ORDER
    const newOrder = new orderModel({

      userId: req.body.userId,

      items: req.body.items,

      amount: req.body.amount,

      address: req.body.address,

    });

    // SAVE ORDER
    await newOrder.save();

    // CLEAR CART
    await userModel.findByIdAndUpdate(
      req.body.userId,
      {
        cartData: {},
      }
    );

    // STRIPE ITEMS
    const line_items = req.body.items.map(
      (item) => ({

        price_data: {

          currency: "usd",

          product_data: {

            name: item.name,
          },

          unit_amount: item.price * 100,
        },

        quantity: item.quantity,
      })
    );

    // DELIVERY CHARGE
    line_items.push({

      price_data: {

        currency: "usd",

        product_data: {

          name: "Delivery Charges",
        },

        unit_amount: 2 * 100,
      },

      quantity: 1,
    });

    // CREATE STRIPE SESSION
    const session =
      await stripe.checkout.sessions.create({

        line_items: line_items,

        mode: "payment",

        success_url:
          `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,

        cancel_url:
          `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,

      });

    // RESPONSE
    res.json({

      success: true,

      session_url: session.url,
    });

  } catch (error) {

    console.log(error);

    res.json({

      success: false,

      message: "Error",
    });
  }
};

export { placeOrder };