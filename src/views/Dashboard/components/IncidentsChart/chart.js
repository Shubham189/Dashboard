// Palette
import palette from 'theme/palette';

var color=[];
colourRandom();
// Chart data
export const data = {
  datasets: [
    {
      data: [5143, 881, 277260, 6484, 7700, 10489, 360, 54371, 13667, 95997, 26367, 2166, 624, 2568, 188, 104732, 16352, 39586, 1758, 29703, 47492, 3770],
      backgroundColor:  color ,
      borderWidth: 8,
      borderColor: palette.common.white,
      hoverBorderColor: palette.common.white
    }
  ],
  labels: ['BALTIMORE-PD','BOSTON-PD', 'CHICAGO-PD', 'CINCINNATI-PD', 'COLORADO-SPRINDS-PD', 'DALLAS-PD', 'DENVER-PD', 'HOUSTON-PD', 'LAS-VEGAS-MPD', 'LOS-ANGELES-PD', 'LOUISVILLE-PD', 'NEW-ORLEANS-PD', 'NEW-YORK-CITY-PD', 'NEWWARK-PD', 'ORLANDO-PD', 'PHILADELPHIAL-PD','PITTSBURGH-PD', 'SAN-DIEGO-PD', 'SAN-FRANCISCO-PD', 'ST-LOUIS-MPD', 'TUCSON-PD', 'WILMINFTON-PD']
};


/*
[
        palette.primary.main,
        palette.danger.main,
        palette.warning.main
      ]
 */

// Chart options
export const options = {
  legend: {
    display: true
  },
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 80,
  layout: { padding: 0 },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.common.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  }
};

function colourRandom()
{
  for(var i=0;i<22;i++)
  {
    var r = Math.floor(Math.random() * 200);
    var g = Math.floor(Math.random() * 200);
    var b = Math.floor(Math.random() * 200);
    var c = 'rgb(' + (r+20) + ', ' + (g+20) + ', ' +( b+20) + ')';
    color.push(c);
  }
}

