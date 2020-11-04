<script>
var x = document.getElementById("myAudio");

function getVolume() { 
  alert(x.volume)
} 

function setHalfVolume() { 
  x.volume = 0.2
}
   
function setFullVolume() { 
  x.volume = 1.0
} 
</script>