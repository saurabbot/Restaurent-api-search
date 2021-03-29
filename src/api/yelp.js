import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer tANDbkPCECpdtUOdeqDqDgN9pIY-OOvX3ewcZMjP8EsSFpT6OaqotWjykMjYuVdafFVTMchRfcn401kygOnfDKdTTlU9eQt0to-z8FM6fL0BNJqidRl4ZcuZQ9xVYHYx'
    }
});