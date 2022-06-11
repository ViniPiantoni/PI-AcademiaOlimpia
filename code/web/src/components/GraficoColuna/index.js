import React from 'react';
import { Chart } from "react-google-charts";

import './styles.css';

export default function GraficoColuna(props){


    const data = [
        ["Mês", "Lucro Bruto", "Saída"],
        ["Maio",8000, 2000],
        ["Junho", 7000, 2500],
        ["Julho", 10000, 3500],
        ["Agosto", 9000, 4000],
      ];

    const options = {
        chart: {
          title: "Relatório Financeiro",
          subtitle: "Comparativo entre lucro e saída nos últimos meses.",
        },
    };

    return(
        <>
            <Chart
                chartType="Bar"
                width="100%"
                height="340px"
                data={data}
                options={options}
            />
        </>
    )
}