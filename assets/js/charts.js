// Chart Configurations for Chart.js
// Assumes Chart.js is loaded via CDN in the HTML

const chartColors = {
    brand: '#4A1B6D',
    purple: '#7C3A8D',
    blue: '#5176C1',
    coral: '#EC8F6B',
    yellow: '#F5D686',
    green: '#52AD8C'
};

const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: '#7A6B88',
                font: {
                    family: "'Inter', sans-serif"
                }
            }
        }
    }
};

function createDonutChart(ctx, data, labels, isDark = false) {
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    chartColors.brand,
                    chartColors.purple,
                    chartColors.blue,
                    chartColors.green,
                    chartColors.yellow
                ],
                borderWidth: isDark ? 2 : 0,
                borderColor: isDark ? '#2E1E38' : '#FFF'
            }]
        },
        options: {
            ...defaultOptions,
            cutout: '70%',
            plugins: {
                ...defaultOptions.plugins,
                legend: {
                    ...defaultOptions.plugins.legend,
                    labels: {
                        color: isDark ? '#FFF' : '#7A6B88'
                    }
                }
            }
        }
    });
}

function createBarChart(ctx, data, labels, isDark = false) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Projected Value',
                data: data,
                backgroundColor: chartColors.purple,
                borderRadius: 4
            }]
        },
        options: {
            ...defaultOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' },
                    ticks: { color: isDark ? '#FFF' : '#7A6B88' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: isDark ? '#FFF' : '#7A6B88' }
                }
            },
            plugins: {
                ...defaultOptions.plugins,
                legend: { display: false }
            }
        }
    });
}
