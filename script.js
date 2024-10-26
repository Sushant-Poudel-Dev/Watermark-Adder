function addWatermark() {
    const image = document.getElementById('image').files[0];
    const text = document.getElementById('text').value;
    
    if (!image || !text) {
      alert('Please select an image and enter a watermark text.');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.font = '24px Arial';
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.5;
        ctx.fillText(text, canvas.width - ctx.measureText(text).width - 10, canvas.height - 10);
        const result = document.getElementById('result');
        result.src = canvas.toDataURL();
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(image);
  }
  