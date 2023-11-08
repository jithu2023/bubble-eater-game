document.getElementById('NameButton').addEventListener('click', function() {
    var name = prompt("What is your name?");
    if (name !== null) {
      alert("Your name is: " + name);
    }
  });

  document.getElementById('NicknameButton').addEventListener('click', function() {
    var nickname = prompt("What is your nickname?");
    if (nickname !== null) {
      aler("Your nickname is: " + nickname);
    }
  });