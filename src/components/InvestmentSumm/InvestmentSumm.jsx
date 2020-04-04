import React from 'react';
import propTypes from 'prop-types';
import { Form } from 'reactstrap';
import './InvestmentSumm.scss';

class InvestmentSumm extends React.Component {

    constructor(props) {
        super(props);
        const { investSummLevels } = props;
        this.state = {
            currentInvestmentSumm: investSummLevels[0],
            maxInvestSumm: investSummLevels[investSummLevels.length - 1],
        };
    }

    handleInputChange = e => {
        const currentInvestmentSumm =
            e.currentTarget.value > this.state.maxInvestSumm
                ? this.state.maxInvestSumm
                : +e.currentTarget.value;

        this.setState({ currentInvestmentSumm, });
        this.props.updateInvestmentSumm(currentInvestmentSumm);
    };



    render() {
        const { investSummLevels } = this.props;
        const { currentInvestmentSumm, maxInvestSumm } = this.state;
        let currentProgress = `${(currentInvestmentSumm / maxInvestSumm * 100)}%`;
        const investScaleStep = 100 / this.state.maxInvestSumm;

        return (
            <Form className="investment-summ p-4">
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <span>Сумма для инвестирования</span>
                    <input
                        className="investment-summ__summ rounded-pill bg-white border border-secondary"
                        type="text"
                        value={maxInvestSumm}
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
                            min={investSummLevels[0]}
                            max={(investSummLevels[investSummLevels.length - 1])}
                            value={maxInvestSumm}
                            step="1"
                            list="steplist" />
                        <div className="sliderticks">
                            {
                                investSummLevels.map((level, i) =>
                                    <label key={i} className="rangeLink" style={{ left: `${investScaleStep * level}%` }}>
                                        <span className="d-table" >{level / 1000}т.</span>
                                        <input hidden type="text" value={`${+level}`} onClick={this.handleInputChange} />
                                    </label>
                                )
                            }
                        </div>
                        <span className="range__thumb" style={{ left: currentProgress }}></span>
                    </div>
                </div>
            </Form>
        )
    }
}

InvestmentSumm.propTypes = {
    investSummLevels: propTypes.array,
}

export default InvestmentSumm;