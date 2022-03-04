import React from 'react';
import { connect } from 'react-redux';
import { scoopAmount, toppingAmount } from '../../utils/amounts';
import { formatCurrency } from '../../utils/formatMoney';
import Options from './Options';

const mapStateToProps = state => {
  return {
    total: state.total,
    scoopsTotal: state.scoopsTotal,
    toppingsTotal: state.toppingsTotal
  };
};

function OrderEntry({ total, scoopsTotal, toppingsTotal }) {
  return (
    <div className="order-entry">
      <h1>Order your sundae</h1>
      <h3>Total: {formatCurrency(total)}</h3>
      <hr />

      <h3>Scoops</h3>
      <p>Amount per scoop: {formatCurrency(scoopAmount)}</p>
      <Options optionType="scoops" />
      <h4>Scoops total: {formatCurrency(scoopsTotal)}</h4>
      <hr />

      <h3>Toppings</h3>
      <p>Amount per scoop: {formatCurrency(toppingAmount)}</p>
      <Options optionType="toppings" />
      <h4>Toppings total: {formatCurrency(toppingsTotal)}</h4>
      <hr />
    </div>
  );
}

export default connect(mapStateToProps)(OrderEntry);
