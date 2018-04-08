$(document).ready(() => {
    listenToFormSubmitEvent()
})



const listenToFormSubmitEvent = () => {
    // const formElement = $(".article-search-form");
    // formElement.on("submit", async event => {
    //     event.preventDefault();
    //     search();
    // })

    // Tao ra 1 function search moi goi toi da 1s 1 lan
    const throttledSearch = _.debounce(search, 1000)

    const inputElement = $("#article-search-form__input");
    inputElement.on("input", () => {
        clearData();
        throttledSearch();
    });
    

};

async function search(){
    
    const searchQuery = getUserSearchQuery();
    const data = await searchWiki(searchQuery);

    // check tu khoa search co igong voi tu khoa hien tai cua user khong
    if(searchQuery != getUserSearchQuery()) {
        return // khong chay cai ben duoi nua                   
    }

    processData(data);
}

function clearData(){
    $("div.article-list").empty();
}

async function searchWiki(query) {
    return await $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: { // cau truc data do sever quy dinh
            action: "query",
            list: "search",
            format: "json",
            srprop: "snippet",
            origin: "*",
            srsearch: encodeURI(query) // Thay dau cach = "%20"
        },
        //success: processData
    })
    // .then(processData) // thay cho callback success ben tren
    // .catch(console.log)
}

function getUserSearchQuery() {
    const inputElement = $("#article-search-form__input");
    const searchQuery = inputElement.val();
    return searchQuery;
}

function processData(data) {
    // ham nay duoc goi sau khi du lieu duoc server tra ve

    let articleElements = "";

    //map chuyen tu array article thanh array cac the <a>

    if(!(data.query && data.query.search)) {
        return
    }

    const elementString = data.query.search
        .map(article => `
            <a href="https://en.wikipedia.org/?curid=${article.pageid}" target="_blank"class="article-view">
            <h3 className="article-view__title">${article.title}</h3>
            <p className="article-view__snippet">${article.snippet}</p> </a>`
        )
        .join("") // ghep array string lai thanh 1 string

        $("div.article-list").append(elementString);
    // for(let i = 0; i < data.query.search.length; i++) {
    //     const article = data.query.search[i];

    //     const articleElement = `
    //     <a href="https://en.wikipedia.org/?curid=${article.pageid}" target="_blank"class="article-view">
    //     <h3 className="article-view__title">${article.title}</h3>
    //     <p className="article-view__snippet">${article.snippet}</p> </a>`

    //     articleElements += articleElement;
    // }
}


function debounce(func, wait) {
    var timeout;
  
    return function() {
      var context = this,
          args = arguments;
  
      var executeFunction = function() {
        func.apply(context, args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(executeFunction, wait);
    };
  };

  function throttle(func, time) {
    var wait = false;
    
    return function() {
      if (!wait) {
        func.call();
        wait = true;
        
        setTimeout(function() {
          wait = false;
        }, time);
      }
    }
  }