import React from 'react';
import { Chart } from "react-google-charts";

import './styles.css';

export default function GraficoBar(props){


    const data = [
        ["MÊS", "Musculação", "Artes Marciais", "Musculação e Artes Marciais"],
        ["ABRIL", 30, 20, 15],
        ["MAIO", 35, 20, 20],
        ["JUNHO", 35, 25, 30],
        ["JULHO", 35, 40, 30],
    ];

    const options = {
        chart: {
          title: "Relatório - Clientes",
          subtitle: "Números de clientes em cada categoria.",
        },
    };

    return(
        <>
            <Chart
                chartType="Bar"
                width="98%"
                height="400px"
                data={data}
                options={options}
             />
        </>
    )
}