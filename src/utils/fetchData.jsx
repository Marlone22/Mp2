export const exerciseOptions = {
    method: 'GET',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': '8a4f5a6ca5msh2da4b416502f1bap175610jsn6ff0cd998571',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8a4f5a6ca5msh2da4b416502f1bap175610jsn6ff0cd998571',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) =>
{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}

