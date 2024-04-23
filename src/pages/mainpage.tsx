import React from "react";
import one from "../resource/one.jpg";
const MainPage: React.FC = () => {
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          paddingLeft: "2%",
          paddingTop: "2%",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Aerogenesis</div>
        <div style={{ display: "flex", marginRight: "100px" }}>
          <div style={{ marginRight: "20px" }}>Home</div>
          <div style={{ marginRight: "20px" }}>Diagnosis</div>
          <div style={{ marginRight: "20px" }}>Contact</div>
          <div>About</div>
        </div>
      </div>
      <div style={{ display: "flex", paddingTop: "60px" }}>
        <img src={one} style={{ height: "700px" }} />
        <div>
          <div style={{ alignContent: "center" }}>AeroGenesis</div>
          <div>Guarding Lungs  </div>
          <div>with Precision</div>
          <div> Pneumonia is a condition that requires timely diagnosis to ensure effective treatment. Aerogenesis revolutionizes the way pneumonia is detected, offering a fast, accurate, and non-invasive solution right at your fingertips. </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
