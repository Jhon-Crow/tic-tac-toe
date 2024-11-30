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
};

