import React from 'react';
import './App.scss';
import { Container } from 'reactstrap';
import InvestmentSumm from './components/InvestmentSumm/InvestmentSumm';
import InvestmentPeriod from './components/InvestmentPeriod/InvestmentPeriod';
import InvestmentAdding from './components/InvestmentAdding/InvestmentAdding';
import Result from './components/Result/Result';
import data from 'data';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      addingPercent: 0,
      investmentSumm: data.investmentSummArr[0],
    };
  }

  updateInvestmentSumm = (value) => {
    this.setState({ investmentSumm: value })
  }

  updateAddingPercent = (value) => {
    this.setState({ addingPercent: value })
  }



  render() {
    return (
      <Container>
        <div className="App">
          <p className="App-title text-center">Калькулятор</p>
          <div className="app-body d-flex flex-wrap">
            <InvestmentSumm
              updateInvestmentSumm={this.updateInvestmentSumm}
              investmentSummArr={data.investmentSummArr}
              minInvestmentSumm={data.minInvestmentSumm}
              maxInvestmentSumm={data.maxInvestmentSumm}

            />
            <InvestmentAdding
              investmentSummArr={data.investmentSummArr}
              investmentSumm={this.state.investmentSumm}
              addingPercent={this.state.addingPercent}
            />
            <InvestmentPeriod
              updateAddingPercent={this.updateAddingPercent}
              addingPercent={data.addingPercent}
            />
            <Result
              investmentSumm={this.state.investmentSumm}
              addingPercent={this.state.addingPercent} />
          </div>
        </div>
      </Container>

    )
  }
}

export default App;
