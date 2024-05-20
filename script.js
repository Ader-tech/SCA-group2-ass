const apiKey = "cj2OQS1tU5ks6fGDqHo2PO1hVOaMKATV"
const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`


const getData = async() => {
    try {
        const gifGrid = document.getElementById("gif-box");

        const response = await fetch(apiUrl)
        const data = await response.json()
    
        data.data.map((gif) => {
            const gifElement = document.createElement("img")
            gifElement.classList.add("single-gif");
            gifElement.src = gif.images.fixed_height.url;
            gifElement.alt = gif.title
            gifGrid.appendChild(gifElement)
        })

    } catch (error) {
    console.log("Error:", error);
  }
}

getData()