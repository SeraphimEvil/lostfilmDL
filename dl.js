javascript:
  (function() {
    const dl = document.querySelector('.external-btn2');
    const link = document.querySelector('.mark-rate-pane');
    const linkRel = link.getAttribute('rel');
    const linkRelArr = linkRel.split(',');
    let downloadLinkRel = '';

    linkRelArr.forEach(function (item) {
      if (item.length === 3) {
        downloadLinkRel = downloadLinkRel + '' + item;
      } else if (item.length === 2) {
        downloadLinkRel = downloadLinkRel + '0' + item;
      } else if (item.length === 1) {
        downloadLinkRel = downloadLinkRel + '00' + item;
      }
    });

    dl.setAttribute('onclick', `PlayEpisode(${downloadLinkRel})`);
    dl.setAttribute('style', 'opacity: 1;');
  })();
