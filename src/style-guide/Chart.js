import Chart from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { THEME } from 'common';

Chart.defaults.global.defaultFontFamily = 'Poppins';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultLineHeight = 2;
Chart.defaults.global.defaultFontStyle = 'bold';

const data = {
  labels: ['Open Rate', 'Answer Rate', 'Unsubscriptions'],
  datasets: [
    {
      label: '',
      data: [120, 80, 60],
      barThickness: 50,
      backgroundColor: [
        THEME.colors.primary.DEFAULT,
        THEME.colors.primaryAlpha.DEFAULT,
        THEME.colors.primaryBeta.DEFAULT,
      ],
    },
  ],
};

const ChartDrawer = () => {
  const [ctx, setCtx] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setCtx(canvasRef.current.getContext('2d'));
  }, []);

  useEffect(() => {
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data,

        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 0,
              right: 50,
              top: 0,
              bottom: 0,
            },
          },
          defaultColor: THEME.colors.primary.DEFAULT,
          scales: {
            xAxes: [
              {
                gridLines: true,
                ticks: {
                  fontColor: THEME.colors.dark.DEFAULT,
                  fontStyle: '400',
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: true,
                ticks: {
                  beginAtZero: true,
                  fontColor: THEME.colors.primary.DEFAULT,
                  fontStyle: '500',
                  labelOffset: 0,
                  showLabelBackdrop: true,
                  stepSize: 20,
                  padding: 0,
                },
              },
            ],
          },
          events: [],
        },
      });
    }
  }, [ctx]);

  return <canvas ref={canvasRef} />;
};

export default ChartDrawer;
