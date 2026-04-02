import { parseURL } from '../parse-url/parse-url.tsx'

export const constructSubscriptionUrl = (_currentUrl: string, shortUuid: string) => {
    // Параметры твоего Cloud Run фронтинга
    const googleParams = "#?resolve-address=google.com&host=remna-sub-258536259204.europe-north1.run.app";
    
    // Формируем итоговую строку: домен + ID пользователя + параметры
    // Мы игнорируем _currentUrl, чтобы ссылка всегда была через gmail.com
    return `https://google.com/${shortUuid}${googleParams}`;
}
