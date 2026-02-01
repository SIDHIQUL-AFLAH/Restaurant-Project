import Navbar from "./Components/Navbar";

// src/pages/MenuPDF.jsx
const MenuPDF = () => {
  return (
    <div className="menu-main-container">
        <Navbar/>
        <div style={{ width: "100%", height: "100vh" }}>
            <iframe
                src="/menu-monarque.pdf"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="Restaurant Menu"
            />
        </div>
    </div>
  );
};

export default MenuPDF;
