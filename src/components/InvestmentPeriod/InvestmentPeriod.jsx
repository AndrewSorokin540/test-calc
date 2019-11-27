import React from 'react';
import propTypes from 'prop-types';
import { Form } from 'reactstrap';
import './InvestmentPeriod.scss';

function InvestmentPeriod({ addingPercent, updateAddingPercent }) {

    const periods = addingPercent.map((el, i) => (
        <div className="d-inline" key={i}>
            <input type="radio" className="investment-period__input" id={`investment-period-${i}`}
                name="contact" value="email" hidden />
            <label htmlFor={`investment-period-${i}`} className="investment-period__label border border-secondary rounded-pill px-2 py-1 mr-3 bg-white size12"
                onClick={() => { updateAddingPercent(el.percent) }}
            >{el.period}</label>
        </div>
    ))

    return (
        <Form className="investment-period p-4">
            <p className="mb-4">Срок инвестирования</p>
            {periods}
        </Form>
    )
}

InvestmentPeriod.propTypes = {
    addingPercent: propTypes.arrayOf(propTypes.object),
    updateAddingPercent: propTypes.func,
}

export default InvestmentPeriod;
