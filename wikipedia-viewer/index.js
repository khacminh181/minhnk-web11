$(document).ready(() => {
    listenToFormSubmitEvent()
})

const show = async event => {
    event.preventDefault();
    const keyword = $('#article-search-form__input').val();
    $('.article-list').html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>');
    const data = await $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        method: 'get',
        data: {
            action: "query",
            list: "search",
            format: "json",
            srprop: "snippet",
            origin: "*",
            srsearch: encodeURI(keyword)
        }
    })
    if(data.query.search.length==0)
        $('.article-list').append("No Result");
    let box="";
    for(let i =0; i <data.query.search.length ; i++){
        box += `
        <div> 
            <a href="https://en.wikipedia.org/?curid=${data.query.search[i].pageid}" target="_blank"
            class="article-view">
            <h3 className="article-view__title">${data.query.search[i].title}</h3>
            <p className="article-view__snippet">${data.query.search[i].snippet}</p>
            </a>
        </div>     `;
    }
    if(box!="")
        $('.article-list').append(box);
}

const listenToFormSubmitEvent = () => {
    // const formElement = $(".article-search-form");
    // formElement.on("submit", async event => {
    //     event.preventDefault()

    //     /**
    //      * TODO:
    //      *  - Lấy từ khoá search của người dùng
    //      *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
    //      *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
    //      *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
    //      */

    // })
    const formElement = $(".article-search-form");
    formElement.on("keyup", show);
}