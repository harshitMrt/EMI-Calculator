import './App.css';
import { useEffect, useState } from "react";
import { tenureData } from "./utils/tenuredata";
import TextInput from "./components/text-input.jsx";
import SliderInput from "./components/slider-input.jsx";
import { getCLS, getFID, getLCP } from 'web-vitals';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Description from './components/description.jsx';

function App() {
  const [cost, setCost] = useState();
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEMI = (downpayment) => {
    // EMI Calculate = [P*R*(1+R)^N]/[(1+R)^N-1]
    if (!cost) return;

    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((rateOfInterest + 1) ** numOfYears - 1);

    return Number(EMI / 12).toFixed(0);
  };

  const calculateDP = (emi) => {
    if (!cost) return;

    const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
    return Number((downPaymentPercent / 100) * cost).toFixed(0);
  };

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    // Calculate the EMI and update it

    const emi = calculateEMI(dp);
    setEmi(emi);
  };

  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    //calculate Down Payment and update it

    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  const totalDownPayment = () => {
    const precoessingFee = (cost - downPayment) * (fee / 100);
    return (Number(downPayment) + precoessingFee).toFixed(0);
  };

  const totalEmi = () => {
    return (emi * tenure).toFixed(0);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure, cost]);

  return (
    <>
    <SpeedInsights/>
    <div className="container">
  <div className="emi">EMI Calculator</div>

  <div className="text-input">
    <TextInput
      title="Total Cost of Asset"
      state={cost}
      setState={setCost}
    />
  </div>

  <div className="text-input">
    <TextInput
      title="Interest Rate"
      state={interest}
      setState={setInterest}
    />
  </div>

  <div className="text-input">
    <TextInput
      title="Processing Fee"
      state={fee}
      setState={setFee}
    />
  </div>

  <div className="slider-input">
  <span className="slider-input-title">Down Payment</span>
    <SliderInput
      underlineTitle={`Total Down Payment => ${totalDownPayment()}`}
      onChange={updateEMI}
      state={downPayment}
      min={0}
      max={cost}
      labelMin="0%"
      labelMax="100%"
    />
  </div>

  <div className="slider-input">
    <span className="slider-input-title">Loan per Month</span>
    <SliderInput
      underlineTitle={`Total Loan Amount => ${totalEmi()}`}
      onChange={updateDownPayment}
      state={emi}
      min={0}
      max={calculateEMI(0)}
      labelMin="0%"
      labelMax="100%"
    />
  </div>

  <div className="title-tenure">Tenure (in Months)</div>
  <div className="tenure">
    {tenureData.map((t) => (
      <button
        key={t}
        className={`tenure ${t === tenure ? "tenure__selected" : ""}`}
        onClick={() => setTenure(t)}
      >
        {t}
      </button>
    ))}
  </div>
  
</div>
<Description/>
</>

  );
}

export default App;
