import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { Button, Container, Grid, Typography } from "@mui/material";
import Banner from "../images/Group-4477.webp";
import "../styles/HomeStyles.css";
import Core from "./card";
import SignupForm from "./SignupForm";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Gallery from "./Gallery";
import HomeEnquiryModal from "../components/Modal/HomeEnquiryModal";
import { Box } from "@mui/system";
import restaurantImage from "../images/transformation.png";
const Home = () => {
  const [typedText, setTypedText] = useState("");
  const dynamicText = " IT Career Development with QR solutions ";
  const typingSpeed = 100;
  const imageMoveSpeed = 0.01;
  const [open, setOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    let timerId;

    const typeText = () => {
      currentText += dynamicText[currentIndex];
      setTypedText(currentText);
      currentIndex++;

      if (currentIndex === dynamicText.length) {
        clearTimeout(timerId);
      } else {
        timerId = setTimeout(typeText, typingSpeed);
      }
    };

    timerId = setTimeout(typeText, typingSpeed);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  const features = [
    "World class training and 100% placement ensured with course completion certification by our Industry experienced professional trainers,Feel the live productive IT environment right at our No.1 Training & Placement Institute in Trichy.",
   
   
  ];

  return (
    <Layout>
      <Grid container className="home" style={{ height: "100%" }}>
      <Container maxWidth="xl"> 


<Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 15,
          p: 2,
          "@media (max-width:600px)": {
            flexDirection: "column",
            alignItems: "stretch",
            mt: 0,
          },
        }}
      >
       
        <Box sx={{ flex: 1 , marginLeft:1}}>
          <Typography variant="h4" sx={{ fontWeight: "bold", my: 2, fontSize: "2rem", color: "#FF0000" }}>
            THE <span style={{ fontSize: "2.5rem", color: "#252B48" }}>SMART</span>
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", my: 2, fontSize: "2rem", color: "#FF0000" }}>
          CHOICE  FOR <span style={{ fontSize: "2.5rem", color: "#252B48" }}>FUTURE</span>
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" ,fontSize: "1.1rem"}}>
          Smartcliff Skill Development through measurable transformation Tailor-made learning with flexible & scalable programs, problem solving, decision-making, critical thinking 
          Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...           
          </Typography>
         
        </Box>
        <Box id="strength-box" sx={{ flex: 1, marginLeft:"40px" }}>
          <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&ga=GA1.2.627200388.1688378200&semt=ais" alt="Restaurant"  style={{ width: "80%", borderRadius: "8px", marginLeft: "20px", transition: "transform 0.3s", "&:hover": { transform: "scale(1.1)" } }} />
        </Box>
      </Box>
    </Container>
        
      </Grid>
      <HomeEnquiryModal  open={isModalOpen} handleClose={closeModal} />
      
      <Core />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 15,
          p: 2,
          "@media (max-width:600px)": {
            flexDirection: "column",
            alignItems: "stretch",
            mt: 0,
          },
        }}
      >
        <Box id="strength-box" sx={{ flex: 1, marginRight: "2rem" }}>
          <img src={restaurantImage} alt="Restaurant"  style={{ width: "80%", borderRadius: "8px", marginLeft: "20px", transition: "transform 0.3s", "&:hover": { transform: "scale(1.1)" } }} />
        </Box>
        <Box sx={{ flex: 1 , marginRight:7}}>
          <Typography variant="h4" sx={{ fontWeight: "bold", my: 2, fontSize: "2rem", color: "#FF0000" }}>
           <span style={{ fontSize: "2.5rem", color: "#252B48" }}>ABOUT QR SOLUTIONS</span>
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" ,fontSize: "1.1rem"}}>
           A purpose-built global career mobility solutions company transforming individual professionals and enterprise work-force by addressing the digital skills gap, train and empower them to forge a dream career path into future tech. From our perspective, the need for reskilling and upskilling opportunities has never been higher. No matter the times career growth is key for people and the most exciting thing is to train the talent that the university does not cultivate, but that industry needs.
           
          </Typography>
          
        </Box>
      </Box>
   
      <Gallery />
    </Layout>
  );
};

export default Home;
