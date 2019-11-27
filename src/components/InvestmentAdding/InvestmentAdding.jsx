import React from 'react';
import propTypes from 'prop-types';
import { Row, Col } from 'reactstrap'
import './InvestmentAdding.scss';

function InvestmentAdding({ investmentSummArr, investmentSumm, addingPercent }) {

    let investmentSummHeight = investmentSumm / (investmentSummArr[investmentSummArr.length - 1]) * 50 + '%';
    let investmentAddingHeight = addingPercent * investmentSumm / investmentSummArr[0] / 2 + '%';

    return (
        <div className="investment-adding pl-4 pt-4 pr-4 text-center">
            <Row className="align-items-end">
                <Col xs={6} className="investment-adding__col">
                    <div className="value-container">
                        <div>Инвестиции</div>
                        <span className="size18">{(+investmentSumm).toLocaleString()}<i className="rouble">руб.</i></span>
                        <div className="invest-value" style={{ height: investmentSummHeight }}></div>
                    </div>
                </Col>
                <Col xs={6} className="investment-adding__col">
                    <div className="value-container">
                        <div>Прирост стоимости паев</div>
                        <span className="size18">{(+investmentSumm * addingPercent).toLocaleString('ru')}<i className="rouble">руб.</i></span>
                        <div className="adding-value" style={{ height: investmentAddingHeight }}></div>
                        <div className="invest-value" style={{ height: investmentSummHeight }}></div>
                    </div>
                </Col>
            </Row>
            <hr />
            <p className="size14">Прирост стоимости паев <span>{(Math.round(addingPercent * 10000)) / 100}%</span></p>
            <hr className="mb-0" />
        </div>
    )
}

InvestmentAdding.propTypes = {
    investmentSummArr: propTypes.array,
    investmentSumm: propTypes.number,
    addingPercent: propTypes.number
}

export default InvestmentAdding;