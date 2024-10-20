import {
  Card,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  FormControlLabel,
  CircularProgress,
  Autocomplete,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Popular from "../Images/Popular.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
const UploadMeal = () => {
  const [meal, setMeal] = useState(false);
  const [updateMeal, setUpdateMeal] = useState(false);
  //states for form
  const [mealCategory, setMealCategory] = useState("");
  const [mealTitle, setMealTitle] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealPrice, setMealPrice] = useState("");
  const [meal_id, setMeal_id] = useState("");
  const [mealImage, setMealImage] = useState("");
  const notifySuccess = (success) =>
    toast.success(success, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyError = (error) =>
    toast.success(error, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const addProduct = async (e) => {
    e.preventDefault();
    if (
      !(
        mealCategory &&
        mealTitle &&
        mealDescription &&
        mealPrice &&
        meal_id &&
        mealImage
      )
    ) {
      notifyError("🦄 Fill all the fields!");
    }
    let mealData = {
      mealCategory,
      mealDescription,
      mealImage,
      mealPrice,
      meal_id,
      mealTitle,
    };
    console.log("mealData", mealData);

    notifySuccess("🦄 Your item add Successfully");
  };

  return (
    <>
      {/* Add Item modal */}
      <Modal
        size="md"
        isOpen={meal}
        toggle={() => setMeal(!meal)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Vertically centers the modal
          height: "100vh", // Full viewport height to center vertically
        }}
        contentClassName="custom-modal-content" // For further customization
      >
        <ModalHeader toggle={() => setMeal(!meal)}>
          <h1 className="jacques-francois-shadow-regular ">
            Add <span style={{ color: "rgb(295, 150, 0)" }}>Items</span>
          </h1>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={addProduct}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <Autocomplete
                  placeholder="Category"
                  options={["Dinner", "Lunch", "Desert", "Drink"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgb(295, 150, 0)", // Change border color to black
                          },
                          "&:hover fieldset": {
                            borderColor: "rgb(295, 150, 0)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(295, 150, 0)",
                          },
                        },
                        input: { color: "black" }, // Change input text color to black
                      }}
                    />
                  )}
                  onChange={(event, value) => setMealCategory(value)}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  required
                  value={mealTitle}
                  label="name"
                  onChange={(e) => setMealTitle(e.target.value)}
                  placeholder="Meal Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  //   value={description}
                  label="Description"
                  onChange={(e) => setMealDescription(e.target.value)}
                  multiline
                  rows={3}
                  placeholder="Meal Description..."
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  required
                  label="Price"
                  onChange={(e) => setMealPrice(e.target.value)}
                  placeholder="mealPrice"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  required
                  value={meal_id}
                  label="meal_Id"
                  onChange={(e) => setMeal_id(e.target.value)}
                  placeholder="id"
                  type="number"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  type="file"
                  onChange={(e) => setMealImage(e.target.files[0])}
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              {/* button */}
              <Grid
                xs={12}
                item
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  className="button px-5"
                  //   onClick={productUpload}
                  //   disabled={isLoading}
                >
                  {/* {isLoading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "upload"
                      )} */}
                  Upload
                </button>
              </Grid>
            </Grid>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ModalBody>
      </Modal>

      {/* Edit item modal */}
      <Modal
        size="md"
        isOpen={updateMeal}
        toggle={() => setUpdateMeal(!updateMeal)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Vertically centers the modal
          height: "100vh", // Full viewport height to center vertically
        }}
        contentClassName="custom-modal-content" // For further customization
      >
        <ModalHeader toggle={() => setUpdateMeal(!updateMeal)}>
          <h1 className="jacques-francois-shadow-regular ">
            Update <span style={{ color: "rgb(295, 150, 0)" }}>Item</span>
          </h1>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={addProduct}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <Autocomplete
                  placeholder="Category"
                  options={["Dinner", "Lunch", "Desert", "Drink"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category"
                      variant="outlined"
                      InputLabelProps={{
                        style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgb(295, 150, 0)", // Change border color to black
                          },
                          "&:hover fieldset": {
                            borderColor: "rgb(295, 150, 0)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(295, 150, 0)",
                          },
                        },
                        input: { color: "black" }, // Change input text color to black
                      }}
                    />
                  )}
                  onChange={(event, value) => setMealCategory(value)}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  required
                  value={mealTitle}
                  label="name"
                  onChange={(e) => setMealTitle(e.target.value)}
                  placeholder="Meal Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  //   value={description}
                  label="Description"
                  onChange={(e) => setMealDescription(e.target.value)}
                  multiline
                  rows={3}
                  placeholder="Meal Description..."
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  required
                  label="Price"
                  onChange={(e) => setMealPrice(e.target.value)}
                  placeholder="mealPrice"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  required
                  value={meal_id}
                  label="meal_Id"
                  onChange={(e) => setMeal_id(e.target.value)}
                  placeholder="id"
                  type="number"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  required
                  type="file"
                  onChange={(e) => setMealImage(e.target.files[0])}
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
              {/* button */}
              <Grid
                xs={12}
                item
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  className="button px-5"
                  //   onClick={productUpload}
                  //   disabled={isLoading}
                >
                  {/* {isLoading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "upload"
                      )} */}
                  Upload
                </button>
              </Grid>
            </Grid>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ModalBody>
      </Modal>
      {/* item Page */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "850px", // Sets a max-width for larger screens
            margin: "0 auto",
            padding: "20px",
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <h1
              className="d-flex justify-content-start fw-bold jacques-francois-shadow-regular"
              style={{ fontSize: "42px", color: "rgb(295, 150, 0)" }}
            >
              Meal Items
            </h1>
            <hr
              style={{
                height: "3px",
                color: "black",
                backgroundColor: "black",
              }}
            />

            {/* buttons */}
            <div className="d-flex justify-content-between jacques-francois-shadow-regular">
              <button className="UButton" onClick={() => setMeal(true)}>
                Add Item
              </button>

              <Grid item xs={5}>
                <TextField
                  label="Search"
                  placeholder="Item Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: { color: "rgb(295, 150, 0)" }, // Change label color to black
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(295, 150, 0)", // Change border color to black
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(295, 150, 0)",
                      },
                    },
                    input: { color: "black" }, // Change input text color to black
                  }}
                />
              </Grid>
            </div>
            <hr
              style={{
                height: "3px",
                borderWidth: "0",
                color: "black",
                backgroundColor: "black",
              }}
            />

            {/* Table */}
            <div
              style={{
                marginTop: "10px",
                maxHeight: "220px",
                overflowY: "auto",
              }}
            >
              <table className="table table-striped ">
                <thead>
                  <tr className="jacques-francois-shadow-regular fs-5">
                    <th scope="col">#</th>
                    <th scope="col">Item Image</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <img src={Popular} height={70} width={70} alt="" />
                    </td>
                    <td className="pt-4">Otto</td>
                    <td className="pt-4">@mdo</td>
                    <td className="pt-4">
                      {" "}
                      <FormControlLabel
                        sx={{ display: "block" }}
                        control={
                          <Switch
                            name="On/Off"
                            sx={{
                              "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "rgb(295, 150, 0)",
                              },
                              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                {
                                  backgroundColor: "rgb(295, 150, 0)",
                                },
                            }}
                          />
                        }
                      />
                    </td>
                    <td className="pt-4">
                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid black",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                        }}
                      >
                        <EditIcon />
                      </button>

                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid red",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                          marginLeft: "10px", // Add some spacing between the buttons
                        }}
                      >
                        <DeleteIcon className="text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <img src={Popular} height={70} width={70} alt="" />
                    </td>
                    <td className="pt-4">Otto</td>
                    <td className="pt-4">@mdo</td>
                    <td className="pt-4">
                      {" "}
                      <FormControlLabel
                        sx={{ display: "block" }}
                        control={
                          <Switch
                            name="On/Off"
                            sx={{
                              "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "rgb(295, 150, 0)",
                              },
                              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                {
                                  backgroundColor: "rgb(295, 150, 0)",
                                },
                            }}
                          />
                        }
                      />
                    </td>
                    <td className="pt-4">
                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid black",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                        }}
                        onClick={() => setUpdateMeal(true)}
                      >
                        <EditIcon />
                      </button>

                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid red",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                          marginLeft: "10px", // Add some spacing between the buttons
                        }}
                      >
                        <DeleteIcon className="text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <img src={Popular} height={70} width={70} alt="" />
                    </td>
                    <td className="pt-4">Otto</td>
                    <td className="pt-4">@mdo</td>
                    <td className="pt-4">
                      {" "}
                      <FormControlLabel
                        sx={{ display: "block" }}
                        control={
                          <Switch
                            name="On/Off"
                            sx={{
                              "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "rgb(295, 150, 0)",
                              },
                              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                {
                                  backgroundColor: "rgb(295, 150, 0)",
                                },
                            }}
                          />
                        }
                      />
                    </td>
                    <td className="pt-4">
                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid black",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                        }}
                      >
                        <EditIcon />
                      </button>

                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid red",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                          marginLeft: "10px", // Add some spacing between the buttons
                        }}
                      >
                        <DeleteIcon className="text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <img src={Popular} height={70} width={70} alt="" />
                    </td>
                    <td className="pt-4">Otto</td>
                    <td className="pt-4">@mdo</td>
                    <td className="pt-4">
                      {" "}
                      <FormControlLabel
                        sx={{ display: "block" }}
                        control={
                          <Switch
                            name="On/Off"
                            sx={{
                              "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "rgb(295, 150, 0)",
                              },
                              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                {
                                  backgroundColor: "rgb(295, 150, 0)",
                                },
                            }}
                          />
                        }
                      />
                    </td>
                    <td className="pt-4">
                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid black",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                        }}
                      >
                        <EditIcon />
                      </button>

                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid red",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                          marginLeft: "10px", // Add some spacing between the buttons
                        }}
                      >
                        <DeleteIcon className="text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <img src={Popular} height={70} width={70} alt="" />
                    </td>
                    <td className="pt-4">Otto</td>
                    <td className="pt-4">@mdo</td>
                    <td className="pt-4">
                      {" "}
                      <FormControlLabel
                        sx={{ display: "block" }}
                        control={
                          <Switch
                            name="On/Off"
                            sx={{
                              "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "rgb(295, 150, 0)",
                              },
                              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                {
                                  backgroundColor: "rgb(295, 150, 0)",
                                },
                            }}
                          />
                        }
                      />
                    </td>
                    <td className="pt-4">
                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid black",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                        }}
                      >
                        <EditIcon />
                      </button>

                      <button
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid red",
                          borderRadius: "50%",
                          height: "40px", // Same fixed height
                          width: "40px", // Same fixed width
                          backgroundColor: "transparent", // No background
                          cursor: "pointer", // Pointer cursor for a button
                          marginLeft: "10px", // Add some spacing between the buttons
                        }}
                      >
                        <DeleteIcon className="text-danger" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UploadMeal;
