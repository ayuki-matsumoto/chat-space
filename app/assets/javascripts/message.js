
$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Chat-main__Message-area__MessageBox">
          <div class="Chat-main__Message-area__MessageBox__MessageInfo">
            <div class="Chat-main__Message-area__MessageBox__MessageInfo__userName">
              ${message.user_name}
            </div>
            <div class="Chat-main__Message-area__MessageBox__MessageInfo__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-main__Message-area__MessageBox__Message">
            <p class="Chat-main__Message-area__MessageBox__Message__content">
              ${message.content}
            </p>
            <img class="Chat-main__Message-area__MessageBox__Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Chat-main__Message-area__MessageBox">
        <div class="Chat-main__Message-area__MessageBox__MessageInfo">
          <div class="Chat-main__Message-area__MessageBox__MessageInfo__userName">
            ${message.user_name}
          </div>
          <div class="Chat-main__Message-area__MessageBox__MessageInfo__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__Message-area__MessageBox__Message">
          <p class="Chat-main__Message-area__MessageBox__Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Chat-main__form-area__message-area').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__Message-area').append(html);  
      $('.Chat-main__Message-area').animate({ scrollTop: $('.Chat-main__Message-area')[0].scrollHeight});
      $('.Chat-main__form-area__message-area__send-btn').prop('disabled', false);
      $('form')[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});