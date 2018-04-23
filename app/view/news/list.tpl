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
    <script src="https://cdn.bootcss.com/jquery/1.11.0/jquery.js"></script>
    <script>
      $.ajax({
        url: '/users',
        type: 'post',
        data: {a: 1},
        success (res) {
          console.log(res)
        },
        error (err) {
          console.log(err)
        }
      })
    </script>
  </body>
</html>