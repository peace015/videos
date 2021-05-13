import axios from 'axios';

const KEY = 'AIzaSyCughJzj1IBDRAqpkaHdwMrclpRm4SG3wo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
param: {
part: 'snippet',
maxResults:5,
key;KEY,


}

});


