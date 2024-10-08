import { Table } from "../models/TableReservation.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/AsyncHandler";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables for security
    pass: process.env.EMAIL_PASS,
  },
});
const TableData = asyncHandler(async (req, res) => {
  //Getting product Detail from frontend
  const {
    ReservationDate,
    ReservationTime,
    email,
    fullName,
    occassion,
    partySize,
    phoneNumber,
    request,
  } = req.body;

  try {
    //checking validation
    if (
      !(
        ReservationDate &&
        ReservationTime &&
        email &&
        fullName &&
        occassion &&
        partySize &&
        phoneNumber
      )
    ) {
      throw new ApiError(400, "All Fields are required..!");
    }
    const tableData = await Table.create({
      ReservationDate,
      ReservationTime,
      email,
      fullName,
      occassion,
      partySize,
      phoneNumber,
      request,
    });
    // Sending Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Table Reservation Confirmation",
      text: `Dear ${fullName},\n\nYour reservation for ${partySize} people on ${ReservationDate} at ${ReservationTime} has been confirmed. \n\nThank you for choosing us!\n\nBest regards,\nRestaurant Name`,
    };
    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent successfully!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to send email");
    }
    return res
      .status(201)
      .json(new ApiResponse(200, tableData, "Table Data send Successfully..."));
  } catch (error) {
    throw new ApiError(500, error);
  }
});

const GetTableData = asyncHandler(async (req, res) => {
  try {
    const getTableData = await Table.find({});
    if (!getTableData) {
      throw new ApiError(400, "Table Data Not found");
    }

    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          getTableData,
          "Table Data retrieve Successfully..."
        )
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

const DelTableData = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(400, "Message ID is required... ...");
    }
    const delTableData = await Table.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json(
        new ApiResponse(200, delTableData, "Tabale data delete Successfully...")
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

export { TableData, GetTableData, DelTableData };
