const catsFactsApiUrl = "https://cat-fact.herokuapp.com/facts";

const getCatsFacts = async () => {
    console.log("Fetching catsFactsApiUrl");
    const promise = await fetch(catsFactsApiUrl);
    console.log(promise);
}

getCatsFacts();