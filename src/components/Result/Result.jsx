import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'reactstrap'
import './Result.scss';

function Result({ investmentSumm, addingPercent }) {
    return (
        <div className="result">
            <div className="size22">Стоимость паев</div>
            <div className="result__profit">
                {Math.round((+investmentSumm + (+investmentSumm * +addingPercent))).toLocaleString()}
                <i className="rouble">руб.</i>
            </div>
            <Button className="rounded-pill result__btn">Получить</Button>
        </div>
    )
}

Result.propTypes = {
    investmentSumm: propTypes.number,
    addingPercent: propTypes.number
}

export default Result;