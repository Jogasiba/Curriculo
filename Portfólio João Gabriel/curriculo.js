document.getElementById('voltar').addEventListener('click', function() {
window.location.href = 'index.html';
});
  
document.getElementById('voltar').addEventListener('mouseover', function() {
document.body.style.backgroundImage = "url('backgroundIndex.jpg')";
});
  
document.getElementById('voltar').addEventListener('mouseout', function() {
document.body.style.backgroundImage = "url('backgroundCurriculo.jpg')";
});