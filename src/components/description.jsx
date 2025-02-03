import React from "react";
import "./description.css";

export default function Description() {
  return (
    <>
      <div class="container-2">
        <h1>Loan EMI Calculator</h1>

        <div class="content">
          <h2>Overview</h2>
          <p>
            This EMI calculator shall display the loan EMIs on a car or home
            loan with a down payment (if any). This can be used while investing
            in insurance, house, car, or anything.
          </p>

          <h2>Example</h2>
          <p>
            For example, you want to buy a house for ₹50,00,000. You would make
            a down payment of 20% or ₹50,00,000 × 0.2 = ₹10,00,000.
          </p>
          <p>
            The bank would sanction the home loan of ₹40,00,000. You have
            processing fees of 1% of the loan amount or ₹40,00,000 × 0.01 =
            ₹40,000.
          </p>
          <p>
            The total amount you need for the down payment is ₹10,00,000 +
            ₹40,000 = ₹10,40,000.
          </p>
          <p>
            <strong>Total down payment = ₹10.4 lakh.</strong>
          </p>

          <h2>EMI Calculation</h2>
          <p>EMI amount is calculated using the following formula:</p>
          <pre>EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]</pre>
          <p>
            Where:
            <ul>
              <li>
                <strong>P</strong> stands for the Principal Amount. It is the
                original loan amount given to you by the bank on which the
                interest will be calculated.
              </li>
              <li>
                <strong>R</strong> stands for the Rate of Interest set by the
                bank (monthly interest rate).
              </li>
              <li>
                <strong>N</strong> is the Number of Years given to you for loan
                repayment (converted into months for the calculation).
              </li>
            </ul>
          </p>

          <h2>Note</h2>
          <p>
            This means that the EMI value will change every time you change any
            of the three variables: Principal (P), Interest Rate (R), and Loan
            Tenure (N).
          </p>
        </div>
        <div className="credit">
          <h6>made by harshit chaudhary</h6>
        </div>
      </div>
    </>
  );
}
