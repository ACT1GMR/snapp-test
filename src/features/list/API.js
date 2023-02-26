export function fetchList() {
  return fetch('http://api.aparat.com/fa/v1/video/video/mostViewedVideos')
    .then(response => response.json())
}
