import React, { useState, useEffect } from "react";
import { inputSchema } from "../schema/inputSchema";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../style/style.css";
import axios from "axios";

const Input = () => {
  const [categories, setCategories] = useState([]);
  const URL = "https://northwind.vercel.app/api/categories";
  const fetchCategories = async () => {
    await axios.get(URL).then((res) => setCategories(res.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    handleChange,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(inputSchema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };
  
const [data,setData]=useState(null)

const BAse_url="https://northwind.vercel.app/api/products"
  const myfnc=()=>{
    axios
    .post(BAse_url, data)
    .then((data ) => {
      setData(data);
    });
;
  }
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(formSubmit)}>
        <h1>My Form</h1>

        <p>
          <a
            style={{ color: "black", textDecoration: "none", fontSize: 20 }}
            href="https://northwind.vercel.app/api/products"
          >
            My api link
          </a>
        </p>
        <div>
          <InputLabel id="demo-simple-select-label">Catecories</InputLabel>
          <Select
            style={{ width: 300 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
            value={categories}
          >
            {categories &&
              categories.map((category) => {
                return (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                );
              })}
          </Select>
        </div>
        <TextField
        
          className="input"
          {...register("name")}
          id="name"
          label="name"
          variant="outlined"
        />
        {errors.name ? (
          <span style={{ color: "red", fontSize: 20 }}>
            {errors.name.message}
          </span>
        ) : (
          <></>
        )}
        <TextField
          className="input"
          type="number"
          {...register("quantityPerUnit")}
          id="quantityPerUnit"
          label="quantityPerUnit"
          variant="outlined"
        />
        {errors.quantityPerUnit ? (
          <span style={{ color: "red", fontSize: 20 }}>
            {errors.quantityPerUnit.message}
          </span>
        ) : (
          <></>
        )}
        <TextField
          className="input"
          {...register("unitPrice")}
          id="unitPrice"
          label="unitPrice"
          variant="outlined"
        />
        {errors.unitPrice ? (
          <span style={{ color: "red", fontSize: 20 }}>
            {errors.unitPrice.message}
          </span>
        ) : (
          <></>
        )}
        <TextField
          className="input"
          {...register("unitsInStock")}
          id="unitsInStock"
          label="unitsInStock"
          variant="outlined"
        />
        {errors.unitsInStock ? (
          <span style={{ color: "red", fontSize: 20 }}>
            {errors.unitsInStock.message}
          </span>
        ) : (
          <></>
        )}
        <FormControlLabel
          control={<Checkbox defaultChecked color="success" />}
          label="Is Discounted"
        />
        <Button 
        onClick={myfnc}
          style={{ backgroundColor: "green", width: 70, padding: "10px 40px" }}
          variant="contained"
          type="submit"
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default Input;
