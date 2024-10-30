import { Checkout } from "../models/Checkout.model.js";
import { Table } from "../models/TableReservation.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import nodemailer from "nodemailer";

// Create the email transporter once
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables for security
    pass: process.env.EMAIL_PASS,
  },
});

const AcceptedOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Fetch the order details by ID
  const order = await Checkout.findById(id);

  // Error handling if order is not found
  if (!order) {
    return res.status(404).send("Order not found");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER || "emadalikhan5@gmail.com",
    to: order.email || "merajali@gmail.com",
    subject: "Order Accepted",
    text: `Dear ${order.firstName} ${order.lastName},\n\nYour order of ${
      order.addToCart[0].name // Assuming `addToCart` is an array and accessing the first item
    } has been confirmed. \n\nThank you for choosing us!\n\nBest regards,\nFresco Restaurant`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

const RejectedOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Fetch the order details by ID
  const RejectedOrder = await Checkout.findById(id);

  // Error handling if order is not found
  if (!RejectedOrder) {
    return res.status(404).send("Order not found");
  }
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: RejectedOrder.email,
    subject: "Order Accepted",
    text: `Dear ${RejectedOrder.firstName} ${
      RejectedOrder.lastName
    },\n\nYour order of ${
      RejectedOrder.addToCart[0].name // Assuming `addToCart` is an array and accessing the first item
    } has been confirmed. \n\nThank you for choosing us!\n\nBest regards,\nFresco Restaurant`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});
const AcceptedReservation = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Fetch the order details by ID
  const AcceptedReservation = await Table.findById(id);

  // Error handling if order is not found
  if (!AcceptedReservation) {
    return res.status(404).send("Order not found");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: AcceptedReservation.email,
    subject: "Order Accepted",
    text: `Dear ${AcceptedReservation.fullName},\n\nYour reservation for
     ${AcceptedReservation.partySize} people on ${AcceptedReservation.ReservationDate} at ${AcceptedReservation.ReservationTime}
      has been confirmed. \n\nThank you for choosing us!\n\nBest regards,\nRestaurant Name,
`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});
const RejectedReservation = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Fetch the order details by ID
  const RejectedReservation = await Table.findById(id);

  // Error handling if order is not found
  if (!RejectedReservation) {
    return res.status(404).send("Order not found");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: RejectedReservation.email,
    subject: "Order Rejected",
    text: `Dear ${RejectedReservation.fullName},\n\nYour reservation for
     ${RejectedReservation.partySize} people on ${RejectedReservation.ReservationDate} at ${RejectedReservation.ReservationTime}
      has been rejected for some issues. \n\nThank you for choosing us!\n\nBest regards,\nRestaurant Name,
`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

export {
  AcceptedOrder,
  AcceptedReservation,
  RejectedOrder,
  RejectedReservation,
};
