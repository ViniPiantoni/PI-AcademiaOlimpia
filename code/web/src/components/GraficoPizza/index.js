import React from 'react';
import { Chart } from "react-google-charts";

import './styles.css';

export default function GraficoPizza(props){


    const data = [
        ["Task", "receita e despesa"],
        ["RECEITA", 11],
        ["DESPESA", 5],
    ];

    const options = {
        title: "Status Mensal - Comparativo entre receita e despesa.",
    };

    return(
        <>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </>
    )
}