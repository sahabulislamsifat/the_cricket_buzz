import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Available from "./components/available/Available";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [availableBalance, setAvailableBalance] = useState(0);

  const handleAvailableBalance = () => {
    setAvailableBalance(() => availableBalance + 1000000000);
    toast.success("Credit added your account");
  };

  const handleRemoveCoin = (coin) => {
    if (availableBalance != 0) {
      setAvailableBalance(availableBalance - coin.price);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Header  */}
        <Header availableBalance={availableBalance}></Header>
        {/* Banner  */}
        <Banner handleAvailableBalance={handleAvailableBalance}></Banner>
        {/* Available  */}
        <Available
          availableBalance={availableBalance}
          handleRemoveCoin={handleRemoveCoin}
        ></Available>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
