      const arr = [];
      const ul = document.getElementById('ul-obj');
      const btn = document.getElementById('my-btn');
      const box = document.getElementById('text_box');
      const save_btn = document.getElementById('save_btn');
      var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

      function append_item()
      {
          arr.push(box.value);
          var new_btn_str = "Adicionar #" + (arr.length +1);
          btn.innerHTML = new_btn_str;
          const li = document.createElement('li');
          li.innerHTML = box.value +
          '<button onclick=remove(this.parentNode)' +
          ' type="button" class="btn-close" aria-label="Close"></button>';
          li.classList.add("list-group-item")
          ul.appendChild(li);

        // Apaga texto na textbox
          box.value = '';
          // console.log(arr.length);
                    $('.alert').alert('close')
      }
     btn.onclick = append_item;
    box.onkeypress = function (event)
    {
        if(event.keyCode ===  13){ // Pressionar Enter
            event.preventDefault();
            append_item(); 
        }
    }
      function remove(el) {
        var element = el;
        // arr.filter((value) => {return el.innerHTML.includes(value)})
        for (var x=0; x<arr.length; x++)
        {
          if (el.innerHTML.includes(arr[x])) {arr.splice(x,1)};
        }
        btn.innerHTML = "Adicionar #" + (arr.length + 1);
        element.remove();
        console.log(arr);
      }
      // var fs = require('fs');
      function save_json()
      {
          var dict = {};
            for (j=0; j<arr.length; j++)
            {
                // dict.push({j : arr[j]});
                dict[j.toString()] = arr[j];
            }
            var dicstring = JSON.stringify(dict);
            // dict.writeFile("thing.json", dictstring);
           console.log(dicstring);
          //console.log(dict)
          $.post("http://localhost:8080/save", dict, function(data)
            {
                if(data ==='yes')
                {
                    // alert("Sucesso!");
                    alert('Lista salva com sucesso!', 'success')
                }
            });
      }
      save_btn.onclick = save_json;

  function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML =
      '<div class="alert alert-' + type +
      ' alert-dismissible" role="alert">' + message +
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
