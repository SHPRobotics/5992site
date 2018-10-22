function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/10Qr61o-T54hU15EzSWs5rvvPW2wctxpsme3uzuDH-kQ/edit?usp=sharing',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)