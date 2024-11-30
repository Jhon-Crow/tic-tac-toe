export async function fetchHistory() {
    try {
        const response = await fetch('https://api.ohotaktiv.ru/api/v2/test_front/index.php');
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}



export async function sendData(result: string) {
    const data = {
        cross: result === 'x',
        circle: result === '0',
        date: new Date().toLocaleString("ru-RU", {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }).replace(',', '')
    };

    try {
        const response = await fetch('https://api.ohotaktiv.ru/api/v2/test_front/index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Network response was not ok: ${errorMessage}`);
        }

        const result = await response.json();
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    }
};
