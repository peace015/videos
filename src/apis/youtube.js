import axios from 'axios';

const KEY = 'AIzaSyBrK_acExbtq0mINiwLNvpNZ8hLBVL2hOI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  param: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
