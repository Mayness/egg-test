<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
    <div>
      <lable>参数</lable>
      <input value="0" id="params"/>
    </div>
    <button onClick="beg('get')">GET</button>
    <button onClick="beg('post')">POST</button>
    <button onClick="beg('put')">PUT</button>
    <button onClick="beg('delete')">DELETE</button>
    
    <div>
      <form method="post" id="form2" action="/upload" enctype="multipart/form-data">
        title: <input name="title" />
        file: <input name="file" type="file" />
        <button onclick="document.getElementById('form2').submit()">上传</button>
      </form>
    </div>
    <script src="https://cdn.bootcss.com/jquery/1.11.0/jquery.js"></script>
    <script>
      function beg(type, params) {
        const url = $('#params').val() ? `/users/${$('#params').val()}` : '/users'
        $.ajax({
          url,
          type,
          data: {dat:2},
          success (res) {
            console.log(res)
          },
          error (err) {
            console.log(err)
          }
        })
      }
      
    </script>
  </body>
</html>