const map = L.map('map').setView([29.7604, //latitude
        -95.369804], //longitude
            13);    //zoom
        
        L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution: 'Copyright Google Maps'
            }).addTo(map);
        var marker = L.marker([29.7604, -95.369804]).addTo(map);
        var circle = L.circle([29.76, -95.37], {radius: 600}).addTo(map);
        var latlngs = [[29.7604, -95.369804],[29.75, -95.35],[29.77, -95.34]];
        var polygon = L.polygon(latlngs, {color: 'orange', fillOpacity: 0.8, weight:6}).addTo(map);