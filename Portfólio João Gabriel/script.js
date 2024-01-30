document.getElementById('botaoCurriculo').addEventListener('mouseover', function() {
    document.body.style.backgroundImage = "url('backgroundCurriculo.jpg')"; 
  });
  
  document.getElementById('botaoCurriculo').addEventListener('mouseout', function() {
    document.body.style.backgroundImage = "url('backgroundIndex.jpg')"; 
  });

  document.getElementById('botaoPort').addEventListener('mouseover', function() {
    document.body.style.backgroundImage = "url('backgroundPort.jpg')"; 
  });
  
  document.getElementById('botaoPort').addEventListener('mouseout', function() {
    document.body.style.backgroundImage = "url('backgroundIndex.jpg')"; 
  });

  document.getElementById('botaoPort').addEventListener('mouseover', function() {
    document.body.style.backgroundImage = "url('backgroundPort.jpg')"; 
  });

  document.getElementById('botaoCurriculo').addEventListener('click', function() {
    window.location.href = 'curriculo.html';
  });

  function mostrarAlert() {
    var modal = document.getElementById('modal');
    modal.style.display = 'flex';
  }
  
  function fecharModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }