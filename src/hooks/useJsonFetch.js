import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * Кастомный хук получения данных с сервера
 * 
 * @param {string} url - url-адрес для запроса;
 * @param {array} opts  - опции;
 * @returns {array} [data, error, loading]
 * data - полученные данные, 
 * error - ошибка (ошибка сети, ошибка ответа - если код не 20x, ошибка парсинга - если пришёл не JSON)
 * loading - boolean флаг, сигнализирующий о том, что загрузка идёт
 */
function useJsonFetch(url, opts) {
    // console.log('run hook "useJsonFetch"');

    const [data, setData] = useState(undefined);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {(async (url, opts) => {
        setLoading(true);
        try {
            const response = await fetch(url, opts);
            if (response.ok) {
                try {
                    const data = await response.json();
                    // console.log(data);
                    setData(data);
                } catch (error) {
                    // console.error(error);
                    setError(error);
                }
            } else {
                const error = new Error(response.statusText);
                // console.error(error);
                setError(error);
            }
        } catch (error) {
            // console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    })(url, opts)}, [url, opts]);

    return [data, error, loading];
}

useJsonFetch.propTypes = {
    url: PropTypes.string.isRequired,
    opts: PropTypes.array,
}

export default useJsonFetch
