import React from "react";
import { Link } from "react-router-dom";
import frontImage from "../../assets/front.png";
import Footer from "../../components/Footer";

const Front = () => {
  return (
          <div className="absolute top-0 left-0 w-full h-[280px] bg-[#2EC4A6] rounded-b-[50%]">

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "50px",
          flexGrow: 1,
        }}
      >
         {/* Blue line */}
   
        <div
          style={{
            position: "relative",
            width: "85%",
            maxWidth: "1200px",
          }}
        >
                  <img
          src={frontImage}
          alt="Front"
          style={{
            width: "84%",
            display: "block",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        />

          <Link
            to="/option"
            style={{
              position: "absolute",
              top: "110%",
              left: "48%",
              transform: "translate(-50%, -50%)",
              color: "black",
              fontSize: "78px",
              fontWeight: "bold",
              textShadow: "2px 2px 8px rgba(30,144,255,0.8)",
              textDecoration: "underline",
              textAlign: "center",  
          
            }}
          >
            EduTrack
          </Link>
          
        </div>
                <h1>Click Here</h1>

        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Front;
