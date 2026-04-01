// Set the current date
document.getElementById('current-date').innerText = new Date().toDateString();

// Initialize Pie Chart
const ctx = document.getElementById('studyPieChart').getContext('2d');
const studyPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Mathematics', 'Programming', 'History', 'Breaks'],
        datasets: [{
            data: [40, 30, 20, 10], // Percentages or hours
            backgroundColor: [
                '#4facfe', // Blue
                '#00f2fe', // Cyan
                '#706fd3', // Purple
                '#f7f1e3'  // Off-white
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});