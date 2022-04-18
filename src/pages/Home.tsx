import React, { useState } from "react";
import {
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface UserData {
  name: string;
  gender: string;
  lang: string;
}

const Home = () => {
  const navigate = useNavigate();

  const [UserData, setUserData] = useState<UserData>({
    name: "",
    gender: "Male",
    lang: "React",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({ ...UserData, [name]: value });
  };

  const handleSubmit = () => {
    navigate("/exam", { state: UserData });
  };

  return (
    <Container data-testid="container">
      <Typography variant="h4" sx={{ margin: "20px 0" }}>
        Please Enter your name
      </Typography>

      <div>
        <TextField
          name="name"
          value={UserData.name}
          onChange={handleInputChange}
        />{" "}
        <div>
          <TextField
            name="gender"
            value={UserData.gender}
            onChange={handleInputChange}
            select
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
        </div>
        <div>
          <TextField
            name="lang"
            value={UserData.lang}
            onChange={handleInputChange}
            select
          >
            <MenuItem value="React">React</MenuItem>
            <MenuItem value="React Native">React Native</MenuItem>
          </TextField>
        </div>
      </div>

      <Button
        variant="outlined"
        disabled={UserData.name.length < 1}
        onClick={handleSubmit}
      >
        Start
      </Button>
    </Container>
  );
};

export default Home;
