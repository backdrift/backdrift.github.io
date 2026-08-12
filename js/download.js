function downloadTrack(url, filename) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
    })
    .catch(error => {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const downloadButtons = document.querySelectorAll('.download-btn');
  
  downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.href.url;
      const filename = this.download.filename;
      downloadTrack(url, filename);
    });
  });
});