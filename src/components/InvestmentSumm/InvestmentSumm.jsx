import React from 'react';
import { Form } from 'reactstrap';
import './InvestmentSumm.scss';
import Numeral from "numeral";

class InvestmentSumm extends React.Component {

    constructor({ investmentSummArr }) {
        super({ investmentSummArr });
        this.state = {
            currentInvestmentSumm: this.props.investmentSummArr[0],
        };
    }

    investmentSummArrLastChild = this.props.investmentSummArr[this.props.investmentSummArr.length - 1];

    handleInputChange = e => {
        if (e.currentTarget.value > this.investmentSummArrLastChild) {
            e.currentTarget.value = this.investmentSummArrLastChild
        }
        this.setState({ currentInvestmentSumm: (e.currentTarget.value) });
        this.props.updateInvestmentSumm(e.currentTarget.value);
    };

    render() {
        const investmentSummArr = this.props.investmentSummArr;
        let currentProgress = (this.state.currentInvestmentSumm / (investmentSummArr[investmentSummArr.length - 1]) * 100 + '%');

        const investScaleStep = 100 / this.investmentSummArrLastChild;
        const sliderticks = this.props.investmentSummArr.map((el, i) => (
            <label key={i} className="rangeLink" style={{ left: `${investScaleStep * el}%` }}>
                <span className="d-table" >{el / 1000}т.</span>
                <input hidden type="text" value={`${+el}`} onClick={this.handleInputChange} />
            </label>
        ))
        return (
            <Form className="investment-summ p-4">
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <span>Сумма для инвестирования</span>
                    <input type="text" className="investment-summ__summ rounded-pill bg-white border border-secondary"
                        value={Numeral(this.state.currentInvestmentSumm).format('0,0')}
                        onInput={this.handleInputChange}
                    />
                </div>
                <div>
                    <div className="range">
                        <span className="range__total" />
                        <span className="range__progress" style={{ width: currentProgress }} />
                        <input
                            onInput={this.handleInputChange}
                            type="range"
                            min={investmentSummArr[0]}
                            max={(investmentSummArr[investmentSummArr.length - 1])}
                            value={(this.state.currentInvestmentSumm)}
                            step="1"
                            list="steplist" />
                        <div className="sliderticks">
                            {sliderticks}
                        </div>
                        <span className="range__thumb" style={{ left: currentProgress }}></span>
                    </div>
                </div>
            </Form>
        )
    }
}

export default InvestmentSumm;